function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
  }

  const skills = ["HTML", "CSS", "JavaScript","Figma"];
  const skillsList = document.getElementById("skillsList");
  skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  const info = ["NAME: Garcia, Maria Elaine M. ", "EMAIL: garcia123@gmail.com", "LOCATION: Lipa Batangas"];
  const infoList = document.getElementById("infoList");
  info.forEach(info => {
    const li = document.createElement("li");
    li.textContent = info;
    infoList.appendChild(li);
  });
  
  const projects = [
    {
      title: "Portfolio One",
      description: "THE FIRST PROJECT THAT I'VE GOT",
      link: "https://www.figma.com/design/uirtlN5JDhawHX91ykrNqu/Untitled?node-id=0-1&p=f&t=9pmC34WjBjvneJsu-0"
    },
    {
      title: "Portfolio Two",
      description: "CONCEPT OF IMPROVENTS",
      link: "https://www.figma.com/design/S9Lo7RakpgwJNKk25ig4gr/Untitled?t=9pmC34WjBjvneJsu-0"
    },
    {
        title: "Portfolio Three",
        description: "THE TRIAL AND ERROR",
        link: "https://www.figma.com/design/I6xREuMqOayEjATMFC2Ifk/Comic-Mobile-App--Community-?t=9pmC34WjBjvneJsu-0"
      }
  ];
  
  const projectsContainer = document.getElementById("projectsContainer");
  projects.forEach(project => {
    const div = document.createElement("div");
    div.className = "project";
    div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p><a href="${project.link}" target="_blank">View Project</a>`;
    projectsContainer.appendChild(div);
  });

    const achievements = [
    {
      title: "Certified UI/UX Designer",
      description: "Earned certifications in UX Design (Google UX, Nielsen Norman Group, or Coursera).",
    },
    {
      title: "Most Impactful Design – Internal Product Awards",
      description: "Awarded by [Company Name] for designing a dashboard that improved usability and reduced support tickets by 40%.",
    },
    {
        title: "UX Hackathon Finalist",
        description: "Placed in the top 5 teams at national UI\UX Hackathon for a rapid redesign challenge of a legacy app interface.",
    },
    {
        title: "Heuristic Analysis Expert",
        description: "Praised for conducting detailed UX audits that led to critical usability improvements for key client products.",
    }
  ];
  
    const achievementsContainer = document.getElementById("achievementsContainer");
  achievements.forEach(achievements => {
    const div = document.createElement("div");
    div.className = "achievements";
    div.innerHTML = `<h3>${achievements.title}</h3><p>${achievements.description}</p><a></a>`;
    achievementsContainer.appendChild(div);
  });
