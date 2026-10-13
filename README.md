#### Starfleet Academy Portfolio

hi,


the following contains some useful info regarding the assignment. I recommend you read it if you're interested on the stylistic choises or just a **_Trekie_**. The assignment is [here](https://read-crush-77170900.figma.site/). It was part of the course "Human-Computer Interaction (ECE_K730)" (University of Peloponnese).

---

#### Description

-   This assignment is a fictional personal portfolio inspired by the **legendary Star Trek**, with obvious references to the visual identity of the universe. The aesthetics of the website are based on the typical [LCARS (Library Computer Access and Retrieval System)](https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Lcars_wallpaper.svg/1280px-Lcars_wallpaper.svg.png) interface, and most of the elements provided are taken straight either from episodes or general information from the universe.

-   It contains unintelligible --gibberish for some-- words which are taken from the Klingon language. The use of this vocabulary (e.g. "batlh maHegh"), the technical terminology (such as "subspace frequencies" and "warp core dynamics") as well as additional features which you can see more of in the last part of this file ("Security Simulation", "Message Transmission", "Record Exportation"), are not accidental -- they serve the purpose of deepening in the series' mythos and also immersing the visitor in a functional and lived-in Star Trek simulation environment.

---

#### Procedural Details 

-   Having worked with AngularJS in the past, I used REACT for the project as they share commonalities (component-based logic & flexibility). Used AI to avoid re-writing the same repetitive code multiple times, such as creating boilerplate structures for reusable components (e.g. the LCARS pills and panels).

-   The image is obviously AI _enhanced_ to say the least hehe..

-   The design approach **respects the principles** of Michael Okuda (designer of the original LCARS). The specific hex codes used were: LCARS Orange (#FF9900) for primary actions and headers, Science Blue/Purple (#9999CC) for secondary elements and Alert Red (#FF6666) for interactive alert elements. The typography is based on the combination of the 'Oswald' fonts for the titles, mimicking the Swiss 911 of the series, and 'Barlow Condensed' for the body text, ensuring good readability in narrow grid layouts. The pills & panels also follow the aesthetic approach of the futuristic layout of the 24^th^ century they correspond to.

---

#### Observations/Known Issues

-   Figma has some ready-made structures for websites that contribute to saving time in some rather boring processes such as creating files and folders (scaffolding) and an automatic standard generation of CSS properties. Dont know if I've removed any unused, pre-made files or components within the nest -- not planning to check either.

-   The assignment has a humorous twist, considering it fits with the aesthetics of the fictional universe (with engineers like Geordi and Scotty being similarly playful), but it is also a personal choice as I believe it will make the reviewer's experience more pleasant, all without losing the aesthetic we are aiming for. Examples include the different and multiple "Access Denied" alerts, the comical texts, and the Easter Eggs.

-   Haven't added the required dynamic reconfiguration of the layout for use cases from devices other than a computer screen. It needs optimization and this I MIGHT actually fix it at some point.

---

#### Additional information if you're still interested

**SECURITY SIMULATION (ACCESS DENIED):**\
The "Access Denied" function is not a simple static message. It uses dynamic event handling of JavaScript. Specifically, during the _onClick_ event, a mini algorithm is executed that uses the _Math.random()_ function to randomly select a message from the predefined "Starfleet Security Protocols" array of responses. This is to attach a sense of live response to the UI instead of a repetitive, static experience.

 **MESSAGE TRANSMISSION (HAILING FREQUENCIES):**\
The communication form acts as a serverless client-side integration. Instead of relying on a backend system (SMTP server), the application takes advantage of the browser's URI schemes. It collects real-time data via _useState_ and upon submission, encodes it (_encodeURIComponent_) for character safety and dynamically creates a _mailto:_ link. We added an artificial delay (_setTimeout_) to simulate the subspace transmission time (which does exist in Star Trek) before opening the user's default email client, further enhancing the immersion.

**DATA EXPORTATION (EXPORT RECORDS):**\
With the "Export Records" feature, we achieve client-side File Generation. This is interesting, as it doesn't download a file that already exists on a server. Instead, the browser generates the file at that moment on runtime(!) using the **Blob API** (Binary Large Object). More specifically, JavaScript converts the JSON data of the missions (latest mission logs) into plain text, creates a virtual URL (_URL.createObjectURL_) and asks for user action (_click_) to download the file locally to their device. This demonstrates the ability to manage data exclusively in the frontend, enhances the dynamics of the otherwise static page, and strengthens the user-application interaction.

---

---

Thanks for your time. After this and the incomplete AngularJS project in my account I dont think I'm ever touching front-end dev again. Though i may delve into some graphics later on-