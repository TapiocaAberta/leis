# -*- coding: utf-8 -*-
from lxml import html
from lxml.html.clean import clean_html
import requests,io,json
# constants
DATA = '../src/data/'
URL_VEREADORES = 'http://www.camarasjc.sp.gov.br/vereadores/'
EXPRESSION_LINK_VEREADORES = '//*[@id="conteudo-principal"]/div[2]/div/div[2]/div/h3/a'
JSON_VEREADORES = DATA + 'vereadores.json'

XPATH_DADOS_PESSOAIS = '//*[@id="conteudo-principal"]/div[2]/div/div[2]/ul/li[1]/p/text()'
XPATH_EMAIL = '//*[@id="conteudo-principal"]/div[2]/div/div[2]/ul/li[2]/a/text()'
XPATH_TELEFONE = '//*[@id="conteudo-principal"]/div[2]/div/div[2]/ul/li[3]/text()'
XPATH_LOCAL_TRABALHO = '//*[@id="conteudo-principal"]/div[2]/div/div[2]/ul/li[4]/text()'
XPATH_RESUMO = '//*[@id="conteudo-principal"]/div[2]/div/div[4]/p/text()'
CAMARA_PREFIX  = 'camara_' 

def get_first(iterable, default=None):
    if iterable:
        for item in iterable:
            return item
    return default

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
with io.open(JSON_VEREADORES,'r',encoding='utf8') as f: 
	s = unicode(f.read())	
	jsonVereadores = json.loads(s)

# open the vereadores page for scraping
page = requests.get(URL_VEREADORES)
tree = html.fromstring(page.content)
linkVereadores = tree.xpath(EXPRESSION_LINK_VEREADORES)

# will read each vereador  URL to open his personal page to download the data  
for link in linkVereadores:
	name = unicode(link.text.upper())
	name = name_corrections(name)
	v_json = None
	for v in jsonVereadores:
		if(v['NOME_URNA_CANDIDATO'] == name or v['NOME_CANDIDATO'] == name):
			v_json = v
	if(v_json is None):
		print 'Not Found: ' + name
	else:
		v_page = requests.get(link.attrib['href'])
		v_tree = html.fromstring(v_page.content)
		dados_pessoais =  v_tree.xpath(XPATH_DADOS_PESSOAIS)
		email = get_first(v_tree.xpath(XPATH_EMAIL))
		telefone =get_first(v_tree.xpath(XPATH_TELEFONE))
		local_trabalho = get_first(v_tree.xpath(XPATH_LOCAL_TRABALHO))
		resumo = v_tree.xpath(XPATH_RESUMO)
		v_json[CAMARA_PREFIX + 'dados_pessoais'] = unicode('\n'.join(dados_pessoais))
		v_json[CAMARA_PREFIX + 'email'] = unicode(email)
		v_json[CAMARA_PREFIX + 'telefone'] = unicode(telefone)
		v_json[CAMARA_PREFIX + 'local_trabalho'] = unicode(local_trabalho)
		v_json[CAMARA_PREFIX + 'resumo'] = unicode('\n'.join(resumo))
		# TODO open the vereador page and download the info 


# save the resulting JSON
new_json =  json.dumps(jsonVereadores, indent=4, sort_keys=True, ensure_ascii=False, encoding='utf8')
print new_json
with io.open(JSON_VEREADORES,'w',encoding='utf8') as f:
    f.write(new_json)
