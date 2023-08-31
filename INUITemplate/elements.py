from inui.elements import *


class Education:
    def __init__(
        self, university="", degree="", location="", date="", field="", grade=""
    ) -> None:
        self.university = university
        self.degree = degree
        self.location = location
        self.date = date
        self.field = field
        self.grade = grade

    def __str__(self) -> str:
        return str(
            Li(
                data=(
                    H4(
                        classs="title",
                        data=(f"{self.university}, {self.location}",),
                    ),
                    P(classs="descriptions", data=(f"{self.degree}, {self.field}",)),
                    Div(
                        data=(
                            P(classs="date", data=(self.date,)),
                            B(classs="grade", data=(self.grade,)),
                        )
                    ),
                ),
                classs="content",
            )
        )

    def __repr__(self) -> str:
        return self.__str__()


class Skill:
    def __init__(self, title="", content="") -> None:
        self.title = title
        self.content = content

    def __str__(self) -> str:
        return str(
            Li(
                data=(
                    H4(
                        classs="title",
                        data=(self.title,),
                    ),
                    P(classs="descriptions", data=(self.content,)),
                ),
                classs="content",
            )
        )

    def __repr__(self) -> str:
        return self.__str__()


class WorkExp:
    def __init__(
        self, company="", position="", date="", city="", description=""
    ) -> None:
        self.company = company
        self.position = position
        self.date = date
        self.city = city
        self.description = description

    def __str__(self) -> str:
        return str(
            Li(
                data=(
                    H4(classs="title", data=(self.company,)),
                    Div(
                        data=(
                            P(classs="date", data=(self.date,)),
                            P(classs="location", data=(self.city,)),
                        )
                    ),
                    P(classs="position", data=(self.position,)),
                    P(classs="descriptions", data=(self.description,)),
                ),
                classs="content",
            )
        )

    def __repr__(self) -> str:
        return self.__str__()


class Links:
    def __init__(self, text="", href="#") -> None:
        self.text = text
        self.href = href

    def __str__(self) -> str:
        return str(A(data=(self.text), href=self.href, classs="link"))

    def __repr__(self) -> str:
        return self.__str__()


class Interests:
    def __init__(
        self,
        interests=[],
    ) -> None:
        self.interests = interests

    def __str__(self) -> str:
        interst = ""
        for i in self.interests:
            interst += str(i) + ", "
        return str(P(interst, classs="descriptions content"))

    def __repr__(self) -> str:
        return self.__str__()


class Project:
    def __init__(self, name="", description="", href="#", linktext="GitHub") -> None:
        self.name = name
        self.description = description
        self.href = href
        self.linktext = linktext

    def __str__(self) -> str:
        return str(
            Li(
                data=(
                    H4(data=(self.name,), classs="title"),
                    P(data=(self.description), classs="descriptions"),
                    A(href=self.href, data=(self.linktext,), classs="link"),
                ),
                classs="content",
            ),
        )

    def __repr__(self) -> str:
        return self.__str__()
