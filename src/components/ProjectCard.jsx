import "./ProjectCard.css";

const projects = [
  {
    title: "Adopt A Village",
    image: "/src/assets/adoptVillage.png",
  },
  {
    title: "Green Volunteer",
    image: "/src/assets/Green-Volunteer.png",
  },
  {
    title: "Meri Panchayat",
    image: "/src/assets/meri-panchayat.png",
  },
  {
    title: "Campus Mind",
    image: "/src/assets/campus-mind.png",
  },
  {
    title: "Wall Of Change",
    image: "/src/assets/woc.png",
  },
  {
    title: "Kalam Leadership Academy",
    image: "/src/assets/kla.png",
  },
  {
    title: "Project UMEED",
    image: "/src/assets/UMEED-IMG.png",
  },
  {
    title: "Udaan Libraries",
    image: "/src/assets/Udaan.png",
  },
];

function ProjectCard() {
  return (
    <div className="projects-section">
      <h2 className="section-title">CURRENT PROJECTS</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="card-content">
              <h3>{project.title}</h3>
              <button>KNOW MORE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;