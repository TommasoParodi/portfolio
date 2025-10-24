import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Hero from "../components/Hero";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
import SkillsSection from "../components/SkillsSection";

const HomePage: React.FC = () => {
  // Dati hardcoded per le esperienze lavorative
  const experiences = [
    {
      logo: "/api/placeholder/80/80", // Placeholder per ora
      ruolo: "Sviluppatore Frontend",
      azienda: "Tech Solutions Inc.",
      descrizione:
        "Ho lavorato allo sviluppo di interfacce utente per una piattaforma di e-commerce utilizzando React e Redux. Ho contribuito a migliorare le performance del sito del 20%.",
      periodo: "2022 - Presente",
    },
    {
      logo: "/api/placeholder/80/80", // Placeholder per ora
      ruolo: "Junior Web Developer",
      azienda: "Web Agency Creativa",
      descrizione:
        "Ho collaborato alla creazione di siti web per clienti di diversi settori, utilizzando HTML, CSS e JavaScript. Ho imparato le basi del responsive design e del lavoro in team.",
      periodo: "2021 - 2022",
    },
  ];

  // Dati hardcoded per la formazione
  const education = {
    titolo: "Laurea in Informatica",
    istituzione: "Università degli Studi",
    periodo: "2018 - 2021",
  };

  // Dati hardcoded per le competenze
  const skills = [
    "React",
    "Node.js",
    "Material-UI",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git",
    "TypeScript",
    "Redux",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
  ];

  return (
    <Container maxWidth="lg">
      <Hero />

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {/* Colonna sinistra - Esperienze Lavorative */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              color: "text.primary",
              fontWeight: 600,
            }}
          >
            Esperienze Lavorative
          </Typography>

          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              logo={experience.logo}
              ruolo={experience.ruolo}
              azienda={experience.azienda}
              descrizione={experience.descrizione}
              periodo={experience.periodo}
            />
          ))}
        </Grid>

        {/* Colonna destra - Formazione e Competenze */}
        <Grid size={{ xs: 12, md: 5 }}>
          {/* Sezione Formazione */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                color: "text.primary",
                fontWeight: 600,
              }}
            >
              Formazione
            </Typography>

            <EducationCard
              titolo={education.titolo}
              istituzione={education.istituzione}
              periodo={education.periodo}
            />
          </Box>

          {/* Sezione Competenze Chiave */}
          <Box>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                color: "text.primary",
                fontWeight: 600,
              }}
            >
              Competenze Chiave
            </Typography>

            <SkillsSection skills={skills} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
