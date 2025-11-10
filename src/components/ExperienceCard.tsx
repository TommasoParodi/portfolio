import React from "react";
import { Card, CardContent, Box, Typography, Avatar } from "@mui/material";

interface ExperienceCardProps {
  logo: string;
  role: string;
  company: string;
  description: string;
  period: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  logo,
  role,
  company,
  description,
  period,
}) => {
  return (
    <Card
      sx={{
        mb: 3,
        p: 2,
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 8px 25px rgba(255, 107, 53, 0.2)",
        },
      }}
    >
      <Avatar
        src={logo}
        sx={{
          width: 80,
          height: 80,
          borderRadius: 2,
          flexShrink: 0,
        }}
        variant="rounded"
      />
      <CardContent sx={{ flex: 1, p: 0 }}>
        <Box sx={{ mb: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "text.primary",
              mb: 0.5,
            }}
          >
            {role}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "primary.main",
              fontWeight: 500,
              mb: 1,
            }}
          >
            {company}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              mb: 1,
            }}
          >
            {period}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: "text.primary",
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
