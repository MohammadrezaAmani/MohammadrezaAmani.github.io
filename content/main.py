from inui.toinui import HtmlToInui

hti = HtmlToInui()
hti.fromFile("./content/content.html")
hti.save("content.py")
