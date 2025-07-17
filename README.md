# 📋 Lista de Usuários - Case Técnico

Este projeto é uma aplicação React desenvolvida como parte de um case técnico. O objetivo é listar usuários consumindo a API pública JSONPlaceholder, com funcionalidades adicionais como pesquisa, detalhamento e favoritos.

## 🚀 Funcionalidades
- ✅ Listagem de usuários com informações básicas (nome, e-mail, telefone)
- 🔍 Filtro de usuários por nome
- 👤 Visualização detalhada de um usuário (endereço, empresa, etc.)
- ⭐ Adição e remoção de usuários da lista de favoritos
- ⏳ Loader durante o carregamento de dados

## 🛠️ Tecnologias Utilizadas
- **React** com **TypeScript** para desenvolvimento da interface
- **Redux** para gerenciamento de estado global
- **Redux-Saga** para lidar com efeitos colaterais e chamadas assíncronas
- **Styled Components** para estilização dos componentes
- **Componentes de Classe e Funcionais** conforme solicitado

## 🖼️ Telas
- **Tela Inicial**: Lista de usuários com campo de busca
- **Tela de Detalhes**: Informações completas do usuário selecionado
- **Componente de Favoritos**: Lista de usuários favoritos com opção de remoção

## 🔗 API Utilizada
- JSONPlaceholder - Users Endpoint

## 📄 Considerações Finais
Este projeto foi desenvolvido com foco em boas práticas de arquitetura, separação de responsabilidades, uso adequado de Redux e Redux-Saga, e estilização com Styled Components. A estrutura foi pensada para ser escalável e de fácil manutenção.

## 📦 Como Rodar o Projeto
1. **Clone o repositório:**
```bash
git clone https://github.com/snax10/user-list.git
cd user-list.git

2. **Instale as dependências:**
yarn install

3. **Inicie o servidor de desenvolvimento:**
yarn run dev

4. **Versão do node = node v24.4.1
