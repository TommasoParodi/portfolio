import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ProjectCardProps {
  name: string;
  description: string;
  github: string;
  deploy: string | null;
  languages: string[];
  index: number;
  isLast?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  github,
  deploy,
  languages,
  index,
  isLast = false,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "0px",
  });

  return (
    <Box
      ref={elementRef}
      className="timeline-card"
      sx={{
        display: "flex",
        gap: 2.5,
        pb: isLast ? 0 : 3.5,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-30px)",
        transition: `all 0.6s cubic-bezier(0.43, 0.13, 0.23, 0.96) ${index * 0.15}s`,
        transitionProperty: "color, box-shadow, opacity, transform",
        "&:hover .timeline-content": {
          transform: "translateX(4px)",
        },
        "&:hover .timeline-node": {
          boxShadow: "0 0 24px rgba(255, 107, 53, 0.95)",
          backgroundColor: "rgba(255, 107, 53, 0.9)",
          borderColor: "rgba(255, 180, 140, 0.9)",
        },
        "&:hover .project-title": {
          color: "text.primary",
        },
        "&:hover .project-links": {
          opacity: 1,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 18,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          className="timeline-node"
          sx={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            border: "2px solid rgba(255, 107, 53, 0.65)",
            backgroundColor: "rgba(255, 107, 53, 0.25)",
            boxShadow: "0 0 10px rgba(255, 107, 53, 0.35)",
            zIndex: 1,
            mt: 0.5,
            transition: "all 0.4s cubic-bezier(0.43, 0.13, 0.23, 0.96)",
          }}
        />
        {!isLast && (
          <Box
            sx={{
              position: "absolute",
              top: 16,
              bottom: -28,
              width: 2,
              background: "rgba(255, 107, 53, 0.45)",
            }}
          />
        )}
      </Box>

      <Box
        className="timeline-content"
        sx={{
          flex: 1,
          transition: "transform 0.4s cubic-bezier(0.43, 0.13, 0.23, 0.96)",
          willChange: "transform",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 1,
            mb: 1.5,
          }}
        >
          <Box>
            <Typography
              className="project-title"
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                color: "rgba(255, 255, 255, 0.75)",
                transition: "color 0.4s cubic-bezier(0.43, 0.13, 0.23, 0.96)",
              }}
            >
              {name}
            </Typography>
            <Box
              className="project-links"
              sx={{
                display: "flex",
                gap: 1,
                mt: 0.5,
                opacity: 0.7,
                transition: "opacity 0.4s cubic-bezier(0.43, 0.13, 0.23, 0.96)",
              }}
            >
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "text.secondary",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                <GitHub fontSize="small" />
              </Link>
              {deploy && (
                <Link
                  href={deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.secondary",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "secondary.main",
                    },
                  }}
                >
                  <Launch fontSize="small" />
                </Link>
              )}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 0.5,
              maxWidth: { xs: "100%", sm: "200px" },
            }}
          >
            {languages.map((lang, idx) => (
              <Typography
                key={idx}
                variant="caption"
                sx={{
                  color: "rgba(255, 255, 255, 0.5)",
                  fontSize: "0.7rem",
                }}
              >
                {lang}
                {idx < languages.length - 1 && " •"}
              </Typography>
            ))}
          </Box>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.68)",
            lineHeight: 1.8,
            transition: "color 0.4s cubic-bezier(0.43, 0.13, 0.23, 0.96)",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCard;

