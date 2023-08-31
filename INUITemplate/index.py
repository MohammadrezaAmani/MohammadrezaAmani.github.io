from inui.elements import *
import datetime


def CVTemplate(
    work=[],
    projects=[],
    link=[],
    interests="",
    educations=[],
    skills=[],
    title="",
    description="",
    name="",
    picture=None,
    lang="en",
):
    return str(
        Html(
            lang=lang,
            data=(
                Head(
                    data=(
                        Meta(
                            charset="UTF-8",
                        ),
                        Meta(
                            name="theme-color",
                            content="#333",
                        ),
                        Meta(
                            name="viewport",
                            content="width=device-width, initial-scale=1.0",
                        ),
                        Meta(
                            name="description",
                            content=description,
                        ),
                        Title(data=(title,)),
                        Link(
                            rel="preconnect",
                            href="https://fonts.googleapis.com",
                        ),
                        Link(
                            rel="preconnect",
                            href="https://fonts.gstatic.com",
                            crossorigin="",
                        ),
                        Link(
                            href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,300&display=swap",
                            rel="stylesheet",
                        ),
                        Link(
                            rel="stylesheet",
                            href="./assets/css/styles.css",
                        ),
                    )
                ),
                Body(
                    data=(
                        Nav(
                            data=(
                                Div(
                                    classs="logo",
                                    data=(
                                        Img(
                                            src=picture,
                                            alt=name,
                                        )
                                        if picture != None
                                        else "",
                                        H1(data=(name,)),
                                    ),
                                ),
                                Ul(
                                    data=(
                                        Li(data=(A(href="#About", data=("About",)),)),
                                        Li(
                                            data=(
                                                A(
                                                    href="#EDUCATION",
                                                    data=("Education",),
                                                ),
                                            )
                                        ),
                                        Li(
                                            data=(
                                                A(
                                                    href="#EXPERIENCE",
                                                    data=("Experience",),
                                                ),
                                            )
                                        ),
                                        Li(data=(A(href="#SKILLS", data=("Skills",)),)),
                                        Li(
                                            data=(
                                                A(href="#PROJECTS", data=("Projects",)),
                                            )
                                        ),
                                        Li(
                                            data=(
                                                A(
                                                    href="#INTERESTS",
                                                    data=("Interests",),
                                                ),
                                            )
                                        ),
                                    )
                                ),
                            )
                        ),
                        Header(data=(P(data=(*link,)),)),
                        # Hr(),
                        Section(
                            id="EDUCATION",
                            data=(
                                H3(data=("EDUCATION",)),
                                Ul(data=(*educations,)),
                            ),
                        )
                        if educations != []
                        else "",
                        # Hr(),
                        Section(
                            id="EXPERIENCE",
                            data=(
                                H3(data=("EXPERIENCE",)),
                                Ul(
                                    data=(*work,),
                                ),
                            ),
                        ),
                        # Hr(),
                        Section(
                            id="SKILLS",
                            data=(H3(data=("SKILLS",)), Ul(data=(*skills,))),
                        )
                        if skills != []
                        else "",
                        # Hr(),
                        Section(
                            id="PROJECTS",
                            data=(
                                H3(data=("PROJECTS",)),
                                Ul(data=(*projects,)),
                            ),
                        )
                        if projects != []
                        else "",
                        # Hr(),
                        Section(
                            id="INTERESTS",
                            data=(
                                H3(data=("INTERESTS",)),
                                interests,
                            ),
                        )
                        if interests != ""
                        else "",
                        Footer(
                            data=(
                                P(
                                    data=("with ❤️ by MohammadrezaAmani",),
                                    classs="footer",
                                ),
                                P(
                                    data=(
                                        "Updated in "
                                        + str(
                                            datetime.datetime.now().strftime("%d,%m,%Y")
                                        )
                                    ),
                                    classs="footer",
                                ),
                            )
                        ),
                        Script(
                            src="assets/js/scripts.js",
                        ),
                    )
                ),
            ),
        )
    )
