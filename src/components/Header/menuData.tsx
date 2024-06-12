import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Anasayfa",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Rehber",
    path: "https://ve3.plus/tr/rehber",
    newTab: true,
  },
  {
    id: 3,
    title: "Forum",
    path: "https://forum.ve3.plus",
    newTab: true,
  },
  {
    id: 4,
    title: "Eğitimler",
    path: "https://forum.ve3.plus/t/tutorials?language=tr",
    newTab: true,
  },
  {
    id: 5,
    title: "Helper",
    path: "https://ve3.plus/tr/rehber/ve3plus-helper",
    newTab: true,
  },
  {
    id: 6,
    title: "Demo",
    path: "https://forum.ve3.plus/d/5-demo-talebi",
    newTab: true,
  },
  {
    id: 7,
    title: "Premium",
    path: "https://forum.ve3.plus/d/14-premium-ve-avantajlari",
    newTab: true,
  },
    
];


export default menuData;
