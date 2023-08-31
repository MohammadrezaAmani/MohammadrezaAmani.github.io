from inui.toinui import HtmlToInui

hti = HtmlToInui()
hti.fromFile("./index.html")
hti.save("index.py")
