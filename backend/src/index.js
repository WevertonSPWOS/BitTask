import 'dotenv/config';
import conectarMongoDB from './database/mongoDBConnect.js';
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import projectRoutes from './routes/project.route.js';
import taskRoutes from './routes/task.route.js';

// Criando uma instância do servidor Express
const app = express();

// Definindo a porta do servidor
const port = process.env.PORT || 3001;

// Conectando-se ao banco de dados
conectarMongoDB();

// Middlewares da API
app.use(cors());  // Middleware para lidar com CORS (Cross-Origin Resource Sharing)
app.use(express.urlencoded({ extended: false }));  // Middleware para analisar dados codificados na URL
app.use(express.json());  // Middleware para analisar corpos de solicitação JSON

// Configurando as rotas da API
app.use("/api/cadastro", userRoutes);
app.use("/api/login", authRoutes);
app.use("/api/projetos", projectRoutes);
app.use("/api/projetos/:idProjeto/tarefas", taskRoutes);

// Iniciando o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});