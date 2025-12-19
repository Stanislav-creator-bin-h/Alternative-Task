import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  Chip,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";

const features = [
  {
    title: "React SPA + Routing",
    desc: "Структура сторінок, вкладені роуты, 404, layout-компонент.",
    icon: <CodeIcon />,
  },
  {
    title: "Web Accessibility",
    desc: "Skip-link, focus-visible, семантичні лендмарки, aria-label.",
    icon: <AccessibilityNewIcon />,
  },
  {
    title: "State Management",
    desc: "Zustand для теми та стану задач (CRUD + асинхронщина).",
    icon: <DeviceHubIcon />,
  },
  {
    title: "UI/UX + Responsive",
    desc: "MUI theme, мобільне меню, акуратна типографіка та відступи.",
    icon: <PaletteOutlinedIcon />,
  },
];

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" fontWeight={900} gutterBottom>
          Practice Hub
        </Typography>

        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 840 }}>
          Демонстраційний проєкт для практики: React + сучасний UI, маршрутизація,
          адаптивність та базові принципи Web Accessibility (WCAG-friendly підхід).
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap", gap: 1 }}>
          <Chip label="React 19" variant="outlined" />
          <Chip label="React Router" variant="outlined" />
          <Chip label="Material UI" variant="outlined" />
          <Chip label="Zustand" variant="outlined" />
          <Chip label="A11y basics" variant="outlined" />
        </Stack>
      </Box>

      <Grid container spacing={2}>
        {features.map((f) => (
          <Grid item xs={12} sm={6} md={3} key={f.title}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  {f.icon}
                  <Typography fontWeight={800}>{f.title}</Typography>
                </Stack>
                <Typography color="text.secondary">{f.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}