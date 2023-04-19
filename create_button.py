import ipywidgets as widgets
from ipywidgets import interact, interact_manual, fixed
  
from random import choice
  
def lang():
  langSelect = ["English","Deustche","Espanol","Italiano","한국어","日本人"]
  print(choice(langSelect))
    
interact_manual(lang)
