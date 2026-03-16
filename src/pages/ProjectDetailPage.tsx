import React, { useMemo } from "react";
import {
  Box,
  Typography,
  Link,
  Container,
  IconButton,
  alpha,
  useTheme,
} from "@mui/material";
import { GitHub, OpenInNew, ArrowBack } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../data/projects.json";
import type { Project } from "../data/projects.d";

const BASE = import.meta.env.BASE_URL;

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const theme = useTheme();

  const project = useMemo(() => {
    return (projectsData.projects as Project[]).find((p) => p.slug === slug) ?? null;
  }, [slug]);

  if (!project) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Progetto non trovato
        </Typography>
        <Link
          component="button"
          variant="body1"
          onClick={() => navigate("/")}
          sx={{ color: "primary.main" }}
        >
          ← Torna alla home
        </Link>
      </Container>
    );
  }

  const imageUrls = (project.images ?? []).map((path) => `${BASE}${path}`);

  return (
    <Container maxWidth="md" sx={{ py: 4, pb: 8 }}>
      <IconButton
        onClick={() => navigate("/")}
        sx={{
          mb: 2,
          color: "text.secondary",
          "&:hover": { color: "primary.main" },
        }}
        aria-label="Torna indietro"
      >
        <ArrowBack />
      </IconButton>

      <Box component={motion.div} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <Typography variant="h4" fontWeight={600} color="text.primary" gutterBottom>
          {project.name}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
          {project.languages.map((lang, idx) => (
            <Typography
              key={idx}
              variant="caption"
              sx={{
                color: alpha(theme.palette.text.primary, 0.7),
                fontSize: "0.8rem",
              }}
            >
              {lang}
              {idx < project.languages.length - 1 && " •"}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3 }}>
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                color: "text.secondary",
                fontWeight: 500,
                fontSize: "0.95rem",
                transition: "color 0.2s ease",
                "&:hover": { color: "primary.main" },
              }}
            >
              <GitHub fontSize="small" /> Repository
            </Link>
          )}
          {project.deploy && (
            <Link
              href={project.deploy}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                color: "text.secondary",
                fontWeight: 500,
                fontSize: "0.95rem",
                transition: "color 0.2s ease",
                "&:hover": { color: "secondary.main" },
              }}
            >
              <OpenInNew fontSize="small" /> Go to the app
            </Link>
          )}
        </Box>

        <Typography
          variant="body1"
          sx={{
            color: alpha(theme.palette.text.primary, 0.85),
            lineHeight: 1.8,
            mb: 3,
          }}
        >
          {project.description}
        </Typography>

        {imageUrls.length > 0 && (
          <Box sx={{ mt: 4, width: "100%" }}>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
              Screenshot
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: { xs: 1.5, sm: 2 },
                width: "100%",
              }}
            >
              <AnimatePresence mode="wait">
                {imageUrls.map((src, i) => (
                  <Box
                    key={src}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    sx={{
                      flex: "1 1 0",
                      minWidth: { xs: "calc(50% - 6px)", sm: 160 },
                      maxWidth: { sm: 200 },
                      transition: "transform 0.25s ease",
                      "&:hover": {
                        zIndex: 2,
                        transform: "translateY(-4px) scale(1.02)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: 0.5,
                        overflow: "hidden",
                        boxShadow: 3,
                        aspectRatio: "9 / 19.5",
                        width: "100%",
                        bgcolor: alpha(theme.palette.background.paper, 0.3),
                      }}
                    >
                      <Box
                        component="img"
                        src={src}
                        alt={`${project.name} - screenshot ${i + 1}`}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center top",
                          display: "block",
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </AnimatePresence>
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ProjectDetailPage;
