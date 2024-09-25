<template>
    <GDSC transparent>
        <Block img="/group_photo.png" notag dark>
            <Paragraph head="GDSC" body="University of San Agustin" landing />
        </Block>
        <Block cols="2" xs="1">
            <Bubble top="100%" left="100% - 30px" :z="300" crop />
            <Bubble top="100%" left="30px" :z="200" fill="green" />
            <Paragraph head="About GDSC USA" body="GDSC USA is a community group for Augustinian students interested in growing their technical knowledge and applying it to real life situations to create solutions for local businesses and their community." />
            <Bubbles img="/pop00.png" />
            <Bubbles img="/pop02.png,/pop01.png" />
            <Paragraph head="What We Do" body="As a program supported by Google Developers, students from all courses and year levels can join GDSC USA. We arrange webinars, hold workshops, and engage in community building to help kickstart careers!" />
        </Block>
        <Block dark>
            <Bubble top="55%" left="70%" :z="200" fill="yellow" back />
            <Paragraph head="GDSC Event Gallery" body="We arrange webinars, hold workshops, and engage in community building to help kickstart careers!" />
            <Slider>
                <Card img="/2023-03-07.jpg" head="University Week 2023 Alternative Class" date="2023-03-07">Gathering Augustinian tech enthusiasts, GDSC USA and Holotech Society arranged the alternative classes, "Marketing Yourself: A Guide to Resume and Job Interviews" and "PC Building 101: A Rundown on the Basics of Building Your Rigs," March 3. Augustinians engaged in interactive classes at the University's Special Laboratory, with Ms. Ma. Ariessa Lane C. Ko on creating a resumé and nailing job interviews and Mr. John Eric Benliro Tayco on the basics of PC building.</Card>
                <Card img="/2023-03-07.jpg" head="University Week 2023 Alternative Class" date="2023-03-07">Gathering Augustinian tech enthusiasts, GDSC USA and Holotech Society arranged the alternative classes, "Marketing Yourself: A Guide to Resume and Job Interviews" and "PC Building 101: A Rundown on the Basics of Building Your Rigs," March 3. Augustinians engaged in interactive classes at the University's Special Laboratory, with Ms. Ma. Ariessa Lane C. Ko on creating a resumé and nailing job interviews and Mr. John Eric Benliro Tayco on the basics of PC building.</Card>
                <Card img="/2023-03-07.jpg" head="University Week 2023 Alternative Class" date="2023-03-07">Gathering Augustinian tech enthusiasts, GDSC USA and Holotech Society arranged the alternative classes, "Marketing Yourself: A Guide to Resume and Job Interviews" and "PC Building 101: A Rundown on the Basics of Building Your Rigs," March 3. Augustinians engaged in interactive classes at the University's Special Laboratory, with Ms. Ma. Ariessa Lane C. Ko on creating a resumé and nailing job interviews and Mr. John Eric Benliro Tayco on the basics of PC building.</Card>
            </Slider>
        </Block>
        <Block>
            <Bubble top="0" left="100px" :z="200" fill="blue" crop />
            <Paragraph head="Meet Our Team!" />
            <Deck />
        </Block>
        <Block dark>
            <Paragraph head="Be Part of the Community!" />
            <Bubbles />
            <Form />
        </Block>
    </GDSC>
</template>