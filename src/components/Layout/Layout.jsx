import { useMemo, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useThemeStore } from "../../store/useThemeStore";

const navItems = [
  { to: "/", label: "Головна" },
  { to: "/lab1", label: "Lab 1" },
  { to: "/lab2", label: "Lab 2" },
  { to: "/lab3", label: "Lab 3" },
  { to: "/todo-list", label: "To-Do" },
];

const linkSx = {
  px: 1.25,
  py: 0.75,
  borderRadius: 2,
  textDecoration: "none",
  color: "inherit",
  opacity: 0.85,
  "&.active": {
    opacity: 1,
    fontWeight: 700,
    outline: "2px solid",
    outlineColor: "divider",
    outlineOffset: "2px",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "primary.main",
    outlineOffset: "2px",
  },
};

export default function Layout() {
  const mode = useThemeStore((s) => s.mode);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  const [open, setOpen] = useState(false);

  const themeIcon = useMemo(
    () => (mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />),
    [mode]
  );

  return (
    <Box sx={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
      {/* Skip link for accessibility */}
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: "absolute",
          left: -9999,
          top: 8,
          bgcolor: "background.paper",
          color: "text.primary",
          p: 1,
          borderRadius: 2,
          zIndex: 2000,
          "&:focus": { left: 8 },
        }}
      >
        Перейти до контенту
      </Box>

      <AppBar position="sticky" elevation={0} color="default">
        <Toolbar>
          <IconButton
            edge="start"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "inline-flex", md: "none" }, mr: 1 }}
            aria-label="Відкрити меню"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" fontWeight={800} sx={{ flexGrow: 1 }}>
            Practice Hub
          </Typography>

          <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Box
                key={item.to}
                component={NavLink}
                to={item.to}
                style={({ isActive }) => ({
                  ...(isActive ? { fontWeight: 700 } : null),
                })}
                className={({ isActive }) => (isActive ? "active" : "")}
                sx={linkSx}
              >
                {item.label}
              </Box>
            ))}
          </Stack>

          <Tooltip title={mode === "dark" ? "Темна тема" : "Світла тема"}>
            <IconButton
              onClick={toggleTheme}
              aria-label="Перемкнути тему"
              sx={{ ml: 1 }}
            >
              {themeIcon}
            </IconButton>
          </Tooltip>
        </Toolbar>
        <Divider />
      </AppBar>

      <Drawer open={open} onClose={() => setOpen(false)} sx={{ display: { md: "none" } }}>
        <Box sx={{ width: 280, p: 2 }}>
          <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>
            Навігація
          </Typography>
          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.to}
                component={NavLink}
                to={item.to}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>

      <Container component="main" id="main-content" sx={{ py: 4, flex: 1 }}>
        <Outlet />
      </Container>

      <Divider />
      <Box component="footer" sx={{ py: 3 }}>
        <Container>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Practice Hub • React + Router + MUI • A11y friendly
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
