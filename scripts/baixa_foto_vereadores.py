# -*- coding: utf-8 -*-
from lxml import html
import requests,unicodedata,json,shutil,pprint

# constants
IMG_PATH = '../src/assets/images/vereadores/'
IMG_NEW_PATH = '/assets/images/vereadores/'
DATA = '../src/data/'
URL_VEREADORES = 'http://www.camarasjc.sp.gov.br/vereadores/'
EXPRESSION_IMG_VEREADORES = '//*[@id="conteudo-principal"]/div[2]/div/div[2]/div/a/img'
JSON_VEREADORES = DATA + 'vereadores.json'

def save_image(img):
	response = requests.get(img.get('src'), stream=True)
	with open(file_path, 'wb') as out_file:
	    shutil.copyfileobj(response.raw, out_file)
	    del response
# to help match the congress page names with the tse json names
def name_corrections(s):
	if(s == u'AMÉLIA NAOMI'):
		return u'AMELIA NAOMI'
	if(s == u'DRA ANGELA'):
		return u'ANGELA GUADAGNIN'
	if(s == u'FERNANDO PETITI DA FARMÁCIA COMUNITÁRIA'):
		return u'PETITI DA FARMÁCIA COMUNITÁRIA'
	if(s == u'LUIZ MOTA'):
		return u'MOTA'
	if(s == u'PROF. CALASANS CAMARGO'):
		return u'PROFESSOR CALASANS CAMARGO'
	if(s == u'ROGÉRIO CYBORG'):
		return u'CYBORG'
	if(s == u'WAGNER BALIEIRO '):
		return u'WAGNER BALIEIRO'
	if(s == u'WILLIS GOULART'):
		return u'WILLIS'
	return s
# open the vereadores files that contains the vereadores data
fileVereadores = open(JSON_VEREADORES)
jsonVereadores = json.loads(fileVereadores.read())
fileVereadores.close()


# open the vereadores page for scraping
page = requests.get(URL_VEREADORES)
tree = html.fromstring(page.content)
imgVereadores = tree.xpath(EXPRESSION_IMG_VEREADORES)

# get the images info to download locally and to update the JSON
for img in imgVereadores:
	name = unicode(img.get('alt').upper())
	name = name_corrections(name)
	# for some reason one AMÉLIA has no accent in TSE data
	v_json = None
	for v in jsonVereadores:
		if(v['NOME_URNA_CANDIDATO'] == name or v['NOME_CANDIDATO'] == name):
			v_json = v
	if(v_json is None):
		print 'Not Found: ' + name
	else:
		print 'saving image for ' + name
		img_name = str(v_json['SEQUENCIAL_CANDIDATO']) + '.jpg'
		file_path = IMG_PATH + img_name 
		save_image(img)		
		v_json['FOTO'] = IMG_NEW_PATH + img_name
	#print div.get('src')
new_json =  json.dumps(jsonVereadores, indent=4, sort_keys=True)

fileVereadores = open(JSON_VEREADORES, 'w')
fileVereadores.write(new_json)
fileVereadores.close()
#/opt/projects/leis/src/assets/images/vereadores

