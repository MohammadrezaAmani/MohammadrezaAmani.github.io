from INUITemplate.elements import WorkExp, Interests, Project, Links, Education, Skill

NAME = "Mohammadreza Amani"

TITLE = "%s- Resume" % NAME
DESCRIPTION = "Resume of %s" % NAME
PICTURE = "https://avatars.githubusercontent.com/u/64687226?v=4"
LANG = "en"
EDUCATIONS = [
    Education(
        "PolyTechnic University of Technology (AmirKabir)",
        "Bachelor of Science",
        "Tehran, IRI",
        "Dec 2020",
        "Computer Science",
        "GPA: 3.6",
    )
]
SKILLS = [
    Skill(
        "Languages", "Python, Go, Rust, C, C++, Java, Bash, SQL, JavaScript, LATEX..."
    ),
    Skill(
        "Development",
        """Django, DRF, Docker, K8s, INUI, Redis, Celery, MongoDB, PostgrSQL, RabbitMQ, NginX, FastAPI, HTML, CSS, React, Bootstrap, Foundation, Next.js, Gin, ORM. Git, GitHub""",
    ),
]
EXPERIENCES = [
    WorkExp(
        "Farmina",
        "Co-Founder and Developer",
        "June 2023 - ",
        "Tehran",
        """AI-Based Assistant for Farmers and Gardeners include Django-Backend,
        INUI(React)
        frontend for website, INUI
        (react-native) frontend for Android and IOS and INUI
        (electron) for
        windows and Linux""",
    ),
    WorkExp(
        "UNILAND",
        "Back-End Developer",
        "Dec 2022 - Jul 2023",
        "Tehran",
        "Backend Developer in UniLand Project for AmirKabir University of Technology.",
    ),
    WorkExp(
        "CS50x Iran",
        "Member of Scientific Team",
        "Mar 2023 - Jul 2023",
        "Tehran",
        """CS50x Event in Iran for Python And Machine-Learning""",
    ),
    WorkExp(
        "Thrita-Tech",
        "Back-End Developer",
        "Nov 2022 - May 2023",
        "Tehran",
        """Django Backend Developer for ThritaTech Company""",
    ),
    WorkExp(
        "ChatSon",
        "Back-End Developer",
        "Nov 2022 - Jun 2023",
        "Tehran",
        """FastAPI Backend Developer for ChatSon Messenger""",
    ),
    WorkExp(
        "Prav-Sass",
        "Back-End Developer",
        "Feb 2022 - May 2022",
        "Tehran",
        """Django Backend Developer for Prav-Sass Company""",
    ),
    WorkExp(
        "CWS",
        "Member of Scientific Team",
        "Dec 2021 - Aug 2022",
        "Tehran",
        """CWS is the biggest Computer Webinar Event in Middle-East""",
    ),
]


projects = [
    Project(
        "INUI",
        """Powerful and Highly Customizable Python FrameWork for UI, It’s
        allow Back-
        End developer and everyone who
        knows python, write full Front-End of their applica-
        tion or
        websites using python Quickly.""",
        "https://github.com/MohammadrezaAmani/INUI",
    ),
    Project(
        "LinCut",
        """URL-Shortener website written in Django and FastAPI as Back-end
        and
        INUI (bootstrap) as
        front-end.""",
        "https://github.com/MohammadrezaAmani/LinCut",
    ),
    Project(
        "Pure-Messenger ",
        """CLI realtime chatapp written in pure python. (include
        Server and
        Client)""",
        "https://github.com/MohammadrezaAmani/Python-Websocket-Chatapp",
    ),
    Project(
        "Farmina",
        """AI-Based Assistant for Farmers and Gardeners include
        Django-Backend,

        INUI(React) frontend for website, INUI (react-native) frontend for
        Android and IOS
        and INUI (electron) for
        windows and Linux""",
        linktext="not available",
    ),
    Project(
        "Roomify",
        """Hotel Resevation system""",
        "https://github.com/MohammadrezaAmani/Roomify",
    ),
    Project(
        "UNILAND",
        """A highly modular and diverse Telegram Bot for universities and
        institu-
        tions written in python. This
        is the effort of a group of eight CS students at AUT.""",
        "https://github.com/MohammadrezaAmani/UniLand",
    ),
    Project(
        "US-Messenger",
        """Django and INUI based Messenger""",
        "https://github.com/MohammadrezaAmani/US-Messenger",
    ),
    Project(
        "Mosic",
        """Music Player website written in GoLang""",
        "https://github.com/MohammadrezaAmani/Mosic",
    ),
    Project(
        "GoGrep",
        """Go implementation of Grep module in linux""",
        "https://github.com/MohammadrezaAmani/GoGrep",
    ),
    Project(
        "ThritaTech Backend",
        """Backend of Thrita-Tech physiotherapy website for ThritaTech company""",
        linktext="Not Available",
    ),
    Project(
        "AruShop",
        """Ecommerce Website written in django and INUI for Arukala shop (something like Amazon)""",
        "https://github.com/MohammadrezaAmani/arushop",
    ),
    Project(
        "Django DigiKala clone",
        """Django Digikala Clone with INUI Front-End""",
        "https://github.com/MohammadrezaAmani/Django-Digikala-clone",
    ),
    Project(
        "Instago",
        """Django Instagram Clone with INUI Front-End""",
        "https://github.com/MohammadrezaAmani/Django-Instagram-clone",
    ),
    Project(
        "Django Amazon clone",
        """Django Amazon Clone with INUI Front-End""",
        "https://github.com/MohammadrezaAmani/Django-Amazon-clone",
    ),
    Project(
        "Java BattleShip",
        """Simple battleShip Game written in Java""",
        "https://github.com/MohammadrezaAmani/BattleShip",
    ),
    Project(
        "MA FileManager",
        """Browser Based File Manager written and File server written in FastAPI and INUI as Front-End.""",
        "https://github.com/MohammadrezaAmani/FileManager",
    ),
    Project(
        "JBeautiful date",
        """Simple and nice python library for working with jalali date-time""",
        "https://github.com/MohammadrezaAmani/Jbeautiful-date",
    ),
    Project(
        "Python-Mag",
        """Persian python book.""",
        "https://github.com/MohammadrezaAmani/PythonMag",
    ),
    Project(
        "HamSpam",
        """Simple Email HamSpam classifier for Persian language using NLP.""",
        "https://github.com/MohammadrezaAmani/HamSpam",
    ),
    Project(
        "PDF-converte",
        """Simple Python library for work with PDF in Python include, PDF to Speech, PDF to text, PDF to DOCx, PDF text Extractor and image OCR. """,
        "https://github.com/MohammadrezaAmani/pdf",
    ),
    Project(
        "TextToSpeech",
        """Python Program for Android and Desktop that get a text and read it aloud, just this. written in Kivy and Kivy-MD""",
        "https://github.com/MohammadrezaAmani/TextToSpeech-Kivy",
    ),
    Project(
        "Other project",
        """There is many projects available on my github, if you are interested in projects you can check them.""",
        "https://github.com/MohammadrezaAmani",
        "MyGitHub",
    ),
]

LINKS = [
    Links(" GitHub ", "https://github.com/MohammadrezaAmani"),
    Links(" Email ", "mailto:more.amani@yahoo.com"),
    Links(" LinkedIn ", "https://www.linkedin.com/in/mohammadreza-amani/"),
    Links(" +98-990-520-2779 ", 'tel:+989905202779"'),
    Links(" StackOverFlow ", "https://stackoverflow.com/users/15300704/mohammadreza"),
]
INTERESTS = Interests(
    [
        "Mobina",
        "Coding",
        "Discrete Mathematics and Linear Algebra",
        "Greedy Algorithms...",
    ]
)
