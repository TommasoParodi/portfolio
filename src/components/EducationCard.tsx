import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface EducationCardProps {
  titolo: string;
  istituzione: string;
  periodo: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  titolo,
  istituzione,
  periodo,
}) => {
  return (
    <Card
      sx={{
        mb: 3,
        p: 3,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 8px 25px rgba(255, 152, 0, 0.15)",
        },
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "text.primary",
            mb: 1,
          }}
        >
          {titolo}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "primary.main",
            fontWeight: 500,
            mb: 1,
          }}
        >
          {istituzione}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
          }}
        >
          {periodo}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
