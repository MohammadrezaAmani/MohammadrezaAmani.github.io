from inui.elements import *
import datetime
# from inui.svg import *
from MyConfig import work, projects, link, interests

h = Html(
    lang="""en""",
    data=(
        Head(
            data=(
                Meta(
                    charset="""UTF-8""",
                ),
                Meta(
                    name="""viewport""",
                    content="""width=device-width, initial-scale=1.0""",
                ),
                Meta(
                    name="""description""",
                    content="""Resume of Mohammadreza Amani""",
                ),
                Title(data=("""Mohammadreza Amani - Resume""",)),
                Link(
                    rel="""preconnect""",
                    href="""https://fonts.googleapis.com""",
                ),
                Link(
                    rel="""preconnect""",
                    href="""https://fonts.gstatic.com""",
                    crossorigin="",
                ),
                Link(
                    href="""https://fonts.googleapis.com/css2?family=PT+Sans&family=Roboto:wght@300&family=Source+Code+Pro&display=swap""",
                    rel="""stylesheet""",
                ),
                Link(
                    rel="""stylesheet""",
                    href="""styles.css""",
                ),
            )
        ),
        Body(
            data=(
                Nav(
                    data=(
                        Div(
                            classs="""logo""",
                            data=(
                                Img(
                                    src="""https://avatars.githubusercontent.com/u/64687226?v=4""",
                                    alt="""Mohammadreza Amani""",
                                ),
                                H1(data=("""Mohammadreza Amani""",)),
                            ),
                        ),
                        Ul(
                            data=(
                                Li(data=(A(href="""#About""", data=("""About""",)),)),
                                Li(
                                    data=(
                                        A(
                                            href="""#EDUCATION""",
                                            data=("""Education""",),
                                        ),
                                    )
                                ),
                                Li(
                                    data=(
                                        A(
                                            href="""#EXPERIENCE""",
                                            data=("""Experience""",),
                                        ),
                                    )
                                ),
                                Li(data=(A(href="""#SKILLS""", data=("""Skills""",)),)),
                                Li(
                                    data=(
                                        A(href="""#PROJECTS""", data=("""Projects""",)),
                                    )
                                ),
                                Li(
                                    data=(
                                        A(
                                            href="""#INTERESTS""",
                                            data=("""Interests""",),
                                        ),
                                    )
                                ),
                            )
                        ),
                    )
                ),
                Header(
                    data=(
                        P(
                            data=(
                                *link,
                            )
                        ),
                    )
                ),
                Hr(),
                Section(
                    id="""EDUCATION""",
                    data=(
                        H3(data=("""EDUCATION""",)),
                        Ul(
                            data=(
                                Li(
                                    data=(
                                        H4(
                                            data=(
                                                """PolyTechnic University of Technology (AmirKabir), Tehran, IRI""",
                                            )
                                        ),
                                        P(
                                            data=(
                                                """Bachelor of Science, Computer Science, Dec 2020""",
                                            )
                                        ),
                                        P(data=(B(data=("""GPA: 3.6""",)),)),
                                    )
                                ),
                            )
                        ),
                    ),
                ),
                Hr(),
                Section(
                    id="""EXPERIENCE""",
                    data=(
                        H3(data=("""EXPERIENCE""",)),
                        Ul(
                            data=(*work,),
                        ),
                    ),
                ),
                Hr(),
                Section(
                    id="""SKILLS""",
                    data=(
                        H3(data=("""SKILLS""",)),
                        P(
                            data=(
                                """Languages: Python, Go, Rust, C, C++, Java, Bash, SQL, JavaScript, LATEX...""",
                            )
                        ),
                        P(data=("""Operating Systems: Linux, Windows, Android.""",)),
                    ),
                ),
                Hr(),
                Section(
                    id="""PROJECTS""",
                    data=(
                        H3(data=("""PROJECTS""",)),
                        Ul(data=(*projects,)),
                    ),
                ),
                Hr(),
                Section(
                    id="""INTERESTS""",
                    data=(
                        H3(data=("""INTERESTS""",)),
                       interests,
                    ),
                ),
                Footer(
                    data=(
                        P(
                            data=(
                                """Contact: """,
                                A(
                                    href="""mailto:more.amani@yahoo.com""",
                                    data=("""more.amani@yahoo.com""",),
                                ),
                            )
                        ),
                        P(data=('Updated in ' + str(datetime.datetime.now().strftime("%d,%m,%Y")) )),
                    )
                ),
                Script(
                    data=(
                        """
        let lastScroll = window.scrollY;

        function handleScroll() {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll) {
                nav.classList.add('hide-nav');
            } else {
                nav.classList.remove('hide-nav');
            }

            lastScroll = currentScroll;
        }

        const nav = document.querySelector('nav');
        window.addEventListener('scroll', handleScroll);
    """,
                    )
                ),
            )
        ),
    ),
)
h.save("index.html")
