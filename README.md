# Car Rental Dashboard

## 📋 Descrição do Projeto

Uma aplicação de dashboard interativa para análise de dados de aluguel de carros, desenvolvida com Next.js, React, Recharts e Tailwind CSS. O projeto oferece visualizações detalhadas e interativas sobre desempenho de diferentes modelos de veículos.

## ✨ Características Principais

- **Visualização Interativa de Dados**
  - Gráfico de Distribuição de Categorias de Carros
  - Gráfico de Duração Média de Aluguel
  - Gráfico de Total de Receita por Modelo
  - Gráfico de Rentals por Modelo de Carro

- **Tabela Detalhada de Aluguel de Carros**
  - Informações completas sobre cada modelo
  - Dados incluem: modelo, categoria, total de aluguéis, duração média, receita total e eficiência de combustível

- **Controles de Filtro Avançados**
  - Filtrar por categoria de carro
  - Ordenar por diferentes métricas
  - Pesquisa por modelo de carro

## 🚀 Tecnologias Utilizadas

- **Frontend**:
  - Next.js 15
  - React 19
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - Recharts

- **Utilitários**:
  - XLSX (para manipulação de dados de Excel)
  - Radix UI (componentes acessíveis)
  - Lucide React (ícones)

## 🔧 Instalação e Configuração

### Pré-requisitos

- Node.js (versão 20 ou superior)
- npm ou yarn

### Passos de Instalação

1. Clone o repositório

   ```bash
   git clone https://github.com/crishard/car-rental-dashboard.git
   cd car-rental-dashboard
   ```

2. Instale as dependências

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📊 Estrutura dos Dados

O projeto utiliza uma estrutura de dados `CarRentalData` com os seguintes campos:

- `id`: Identificador único
- `model`: Modelo do carro
- `category`: Categoria do veículo
- `rentals`: Número total de aluguéis
- `averageRentalDuration`: Duração média de aluguel em dias
- `totalRevenue`: Receita total gerada
- `fuelEfficiency`: Eficiência de combustível em mpg

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE.md para detalhes.

## 📞 Contato

Crislân Torres - <crislantorespr@gmail.com>
