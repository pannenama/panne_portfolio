window.WINDOW_CONFIG = {
  about: { title: "About", icon: "assets/about.png", w: 420, h: 340 },
  contacts: { title: "Contacts", icon: "assets/contacts.png", w: 500, h: 300 },
  skills: { title: "Skills", icon: "assets/skills.png", w: 650, h: 300 },
  gallery: { title: "Gallery", icon: "assets/gallery.png", w: 600, h: 400 },
  portfolio: { title: "Portfolio", icon: "assets/portfolio.png", w: 800, h: 450 },
  experiences: { title: "Experiences", icon: "assets/experiences.png", w: 800, h: 380 }
};

window.WINDOW_CONTENTS = {
  about: `
    <section class="about-section">
      <header class="about-header">
        <div class="about-text-block">
          <h1 class="about-title">Anne Labarete</h1>
          <h2 class="about-subtitle">AI Engineering Student</h2>
        </div>

        <div class="about-photo-wrap">
          <img
            src="assets/photo.png"
            alt="Photo of Anne Labarete"
            class="about-photo"
          />
        </div>
      </header>

      <hr class="about-divider" />

      <p>
        My name is Precious Anne F. Labarete, though I usually go by
        <strong>Anne</strong>! I am currently pursuing a Bachelor of Science in
        <strong>AI Engineering at Mapúa University</strong>, driven by a strong passion
        for technology and innovation.
      </p>
      <p>
        In general, I like making cool stuff and learning more and more things!
      </p>

      <h2 class="about-education-title">Education</h2>

      <div class="education-timeline">
        <div class="edu-item">
          <div class="edu-dot edu-dot-main"></div>
          <div class="edu-content">
            <p class="edu-degree">
              <strong>Bachelor of Science in Artificial Intelligence Engineering</strong>
            </p>
            <p class="edu-school">
              <em>Mapúa University (2025 - Present)</em>
            </p>
          </div>
        </div>

        <div class="edu-item">
          <div class="edu-dot"></div>
          <div class="edu-content">
            <p class="edu-degree">
              <strong>Software Development</strong>
            </p>
            <p class="edu-school">
              <em>iACADEMY SHS (2023 - 2025)</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  `,

  contacts: `
    <section class="contacts-section">
      <p>
        For <strong>business inquiries</strong>, please send me a message here:
      </p>

      <div class="contact-email">
        <img src="assets/email.png" alt="Email icon" class="email-icon" />
        <a href="mailto:preciousannelabarete@gmail.com" class="email-link">
          preciousannelabarete@gmail.com
        </a>
      </div>

      <div class="contacts-divider">
        <span>Other Links!</span>
      </div>

      <div class="social-links">
        <a href="https://www.linkedin.com/in/anne-labarete-16a66333b/" target="_blank">
          <img src="assets/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/pannenama" target="_blank">
          <img src="assets/github.png" alt="GitHub" />
        </a>
        <a href="https://discord.com/users/821780385577828402" target="_blank">
          <img src="assets/discord.png" alt="Discord" />
        </a>
        <a href="https://www.instagram.com/pannenama.png/" target="_blank">
          <img src="assets/instagram.png" alt="Instagram" />
        </a>
      </div>
    </section>
  `,

  skills: `
    <section class="skills-section">
      <div class="skills-columns">
        <div class="skills-col">
          <h2 class="skills-heading">Soft Skills</h2>
          <ul class="soft-skills">
            <li>Leadership & Team Management</li>
            <li>Strong Initiative for Participation</li>
            <li>Problem-Solving & Critical Thinking</li>
            <li>Creativity & Fast Adaptability</li>
            <li>Multitasking & Time Efficiency</li>
            <li>Attention to Detail</li>
          </ul>
        </div>

        <div class="skills-col">
          <h2 class="skills-heading">Technical Skills</h2>
          <div class="tech-tags">
            <span class="tag tag-blue">C#</span>
            <span class="tag tag-blue">C++</span>
            <span class="tag tag-blue">C</span>
            <span class="tag tag-blue">Python</span>
            <span class="tag tag-blue">JS</span>
            <span class="tag tag-blue">HTML-CSS</span>
            <span class="tag tag-blue">React</span>
            <span class="tag tag-blue">GDScript</span>
            <span class="tag tag-gray">Video Production</span>
            <span class="tag tag-gray">Sound Design</span>
            <span class="tag tag-gray">Graphics/Asset Design</span>
          </div>
        </div>
      </div>

      <div class="skills-divider"><span>Development Tools!</span></div>

      <div class="tools-grid">
        <img src="assets/arduino.png" alt="Arduino" title="Arduino IDE" />
        <img src="assets/godot.png" alt="Godot" title="Godot Engine" />
        <img src="assets/vs.png" alt="Visual Studio" title="Visual Studio" />
        <img src="assets/vscode.png" alt="VS Code" title="Visual Studio Code" />
        <img src="assets/git.png" alt="Git" title="Git" />
      </div>

      <div class="skills-divider"><span>Art Tools!</span></div>

      <div class="tools-grid">
        <img src="assets/ps.png" alt="Photoshop" title="Adobe Photoshop" />
        <img src="assets/lr.png" alt="Lightroom" title="Adobe Lightroom" />
        <img src="assets/davinci.png" alt="DaVinci Resolve" title="DaVinci Resolve" />
        <img src="assets/firealpaca.png" alt="FireAlpaca" title="FireAlpaca" />
        <img src="assets/sai.png" alt="Paint Tool Sai" title="Paint Tool Sai" />
      </div>
    </section>
  `,

  gallery: `
    <section class="gallery-section">
      <h1 class="gallery-title">Artworks</h1>

      <div class="gallery-divider"><span>Traditional Art</span></div>
      <div class="art-grid">
        <img src="assets/tradart1.png" alt="Traditional Art 1">
        <img src="assets/tradart2.png" alt="Traditional Art 2">
        <img src="assets/tradart3.png" alt="Traditional Art 3">
        <img src="assets/tradart4.png" alt="Traditional Art 4">
        <img src="assets/tradart5.png" alt="Traditional Art 5">
        <img src="assets/tradart6.png" alt="Traditional Art 6">
        <img src="assets/tradart7.png" alt="Traditional Art 7">
        <img src="assets/tradart8.png" alt="Traditional Art 8">
      </div>

      <div class="gallery-divider"><span>Digital Art</span></div>
      <div class="art-grid">
        <img src="assets/digiart1.png" alt="Digital Art 1">
        <img src="assets/digiart2.png" alt="Digital Art 2">
        <img src="assets/digiart3.png" alt="Digital Art 3">
        <img src="assets/digiart4.png" alt="Digital Art 4">
        <img src="assets/digiart5.png" alt="Digital Art 5">
        <img src="assets/digiart6.png" alt="Digital Art 6">
      </div>

      <h1 class="gallery-title">Media</h1>
      <div class="gallery-divider"><span>Photography</span></div>

      <p class="photo-note">
        Ft. Canon M50 Mark II + Sigma 30mm f/1.4 DC DN Lens
      </p>

      <div class="art-grid">
        <img src="assets/photo1.png" alt="Photography 1">
        <img src="assets/photo2.png" alt="Photography 2">
        <img src="assets/photo3.png" alt="Photography 3">
        <img src="assets/photo4.png" alt="Photography 4">
        <img src="assets/photo5.png" alt="Photography 5">
        <img src="assets/photo6.png" alt="Photography 6">
        <img src="assets/photo7.png" alt="Photography 7">
      </div>

      <div class="gallery-divider"><span>Video Editing</span></div>
      <p>To be published on my future YT Acc!</p>
      <!--
      <div class="video-embed">
        <iframe width="100%" height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Sample video" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      -->
    </section>
  `,

  portfolio: `
    <section class="portfolio-section">
      <h1 class="portfolio-title">Tech-Projects!</h1>
      <p class="portfolio-intro">
        Below is a series of projects I've done throughout the years!
      </p>
      <hr class="portfolio-divider" />

      <div class="project">
        <img src="assets/project1.png" alt="IMUNIS Project" class="project-image" />
        <div class="project-info">
          <h2>GAMEx Output: IMUNIS</h2>
          <p>
            IMUNIS: Uprising is a game developed using Godot during my first year SHS.
            It portrays how the human immune system works through interactive levels
            and story-based cutscenes, showcasing my skills in game design,
            programming, and storytelling.
          </p>
          <p>
            IMUNIS received an award at GAMEx, a culminating event highlighting
            outstanding SHS projects, where it was recognized as one of the best presentations.
          </p>
          <a href="https://drive.google.com/file/d/1nIhqWiffQVByc3QlnUkrwyMimzYrSe1M/view?usp=sharing" target="_blank" class="project-link">
             Watch the Gameplay!
          </a>
        </div>
      </div>

      <div class="project">
        <img src="assets/project2.png" alt="About Me Website" class="project-image" />
        <div class="project-info">
          <h2>About Me Website</h2>
          <p>
            An earlier version of my About Me website, highlighting my growth
            and initial interest in web development.
          </p>
        </div>
      </div>

      <div class="project">
        <img src="assets/project3.png" alt="BatAko App" class="project-image" />
        <div class="project-info">
          <h2>BatAko!</h2>
          <p>
            I led a team in developing <strong>BatAko</strong>, a centralized platform
            built using MIT App Inventor that helps users access youth leadership
            opportunities easily, especially in the digital age where such chances
            can be hard to find.
          </p>
        </div>
      </div>

      <div class="project">
        <img src="assets/project4.png" alt="WAVEO2 Device" class="project-image" />
        <div class="project-info">
          <h2>WAVEO₂</h2>
          <p>
            WAVEO₂ is a low-cost medical device prototype built with Arduino,
            designed to estimate hemoglobin levels and aid in detecting anemia.
            Developed with RMTs and hospital facilities, this project showcased
            our skills in research and robotics.
          </p>
          <a href="https://drive.google.com/file/d/1hutrfzoj_x3SDVF_ePifbDku_PjGS2c2/view?usp=sharing" target="_blank" class="project-link">
             Watch the Documentary!
          </a>
        </div>
      </div>
    </section>
  `,

  experiences: `
    <section class="experience-section">
      <div class="section-divider"><span>Competitions</span></div>

      <div class="experience-item">
        <div class="experience-text">
          <h2>DOST’s 8ᵗʰ iMAKE weMAKE</h2>
          <p>
            Our project, <strong>WAVEO₂</strong>, was among the Top 19 finalists out of 134 entries
            in DOST’s 8ᵗʰ iMAKE weMAKE Competition. I led a 10-minute documentary on its impact
            for GIDAs in Sorsogon and collaborated with the Provincial Government under
            Governor Hamor’s 7K Kalusugan Project. WAVEO₂ also earned our team the
            <strong>Innovation for Service Award</strong> at iACADEMY.
          </p>
        </div>
        <img src="assets/exp1.png" alt="DOST iMAKE weMAKE" class="experience-img" />
      </div>

      <div class="experience-item reverse">
        <div class="experience-text">
          <h2>YSES: 2025 Junior Hackfest</h2>
          <p>
            In my senior year, I led a team of three to the
            <strong>Young Software Engineers’ Society’s Junior Hackfest Competition</strong>
            at the University of the Philippines Los Baños. Our project,
            <strong>BatAko</strong>, earned us both <em>Overall Champion</em> and
            <em>Best Presentation</em>.
          </p>
        </div>
        <img src="assets/exp2.png" alt="YSES Junior Hackfest" class="experience-img" />
      </div>

      <div class="experience-item">
        <div class="experience-text">
          <h2>APPMI – Youth Catalyst Competition</h2>
          <p>
            In Grade 11, I joined the <strong>Youth Catalyst Competition: APPMI</strong>,
            where our team proposed <strong>cliMATE</strong>, a mobile app promoting
            environmental conservation and disaster preparedness. I handled the UI/UX design,
            and our pitch won the overall championship.
          </p>
        </div>
        <img src="assets/exp3.png" alt="APPMI Youth Catalyst Competition" class="experience-img" />
      </div>

      <div class="experience-item reverse">
        <div class="experience-text">
          <h2>2024 Breaking Bridges Hackathon</h2>
          <p>
            One of the competitions I joined in Grade 11 was Accenture’s
            <strong>2024 Breaking Bridges Hackathon</strong>. In this event, our team proposed
            <strong>CIRRO</strong>, a mobile application designed to provide a platform for
            users to connect with licensed therapists and support their mental health.
            Our proposal was selected as one of the <strong>Top 5 Finalists</strong> in the competition.
          </p>
        </div>
        <img src="assets/exp4.png" alt="Breaking Bridges Hackathon" class="experience-img" />
      </div>

      <div class="section-divider"><span>Leadership</span></div>

      <div class="experience-item">
        <div class="experience-text">
          <h2>BYTE Week</h2>
          <p>
            As one of the organizing heads of <strong>BYTE Week</strong>, a culminating event
            showcasing Software Development students’ work, I helped lead activities like
            <em>Rewired Talks</em> and the <em>IT Quiz Bee</em>, coordinating speakers,
            designing events, and promoting engagement between students and the tech industry.
          </p>
        </div>
        <img src="assets/exp5.png" alt="BYTE Week" class="experience-img" />
      </div>

      <div class="experience-item reverse">
        <div class="experience-text">
          <h2>iCODE</h2>
          <p>
            As former President of <strong>iJSD</strong>, I led the planning of
            <strong>iCODE</strong>, a Python programming workshop series by designing lessons
            and assessments while collaborating with faculty to ensure effective learning.
          </p>
        </div>
        <img src="assets/exp6.png" alt="iCODE Workshop" class="experience-img" />
      </div>
    </section>
  `
};
