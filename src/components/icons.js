import { FaAward, FaChartBar, FaCloudUploadAlt, FaCode, FaCube, FaDatabase, FaFileAlt, FaFlask, FaHeartbeat, FaLaptopCode, FaMicrophoneAlt, FaPlug, FaProjectDiagram, FaRobot, FaServer, FaUserMd } from 'react-icons/fa'
import { SiC, SiCss, SiDocker, SiFastapi, SiGit, SiGithub, SiGooglegemini, SiHtml5, SiJavascript, SiKeras, SiLangchain, SiLanggraph, SiLinux, SiModelcontextprotocol, SiN8N, SiNumpy, SiOpencv, SiPandas, SiPostgresql, SiPython, SiPytorch, SiReact, SiScikitlearn, SiSqlalchemy, SiTailwindcss, SiTensorflow } from 'react-icons/si'
import { RiOpenaiFill } from 'react-icons/ri'

// Add an icon here, then reference its name from src/data/content.js
const all = { FaAward, FaChartBar, FaCloudUploadAlt, FaCode, FaCube, FaDatabase, FaFileAlt, FaFlask, FaHeartbeat, FaLaptopCode, FaMicrophoneAlt, FaPlug, FaProjectDiagram, FaRobot, FaServer, FaUserMd, RiOpenaiFill, SiC, SiCss, SiDocker, SiFastapi, SiGit, SiGithub, SiGooglegemini, SiHtml5, SiJavascript, SiKeras, SiLangchain, SiLanggraph, SiLinux, SiModelcontextprotocol, SiN8N, SiNumpy, SiOpencv, SiPandas, SiPostgresql, SiPython, SiPytorch, SiReact, SiScikitlearn, SiSqlalchemy, SiTailwindcss, SiTensorflow }
export const getIcon = (name) => all[name] || FaCube
