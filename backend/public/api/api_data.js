define({ "api": [
  {
    "type": "post",
    "url": "/employee",
    "title": "Create",
    "name": "CreateEmployee",
    "group": "Employee",
    "version": "1.0.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"registration\": \"123456\"\n   \"name\": \"Marcello Jr\",\n   \"email\": \"marcello@leads2b.com.br\",\n   \"role\": \"Desenvolvedor FullSctack\",\n   \"phone\": \"83988317867\",\n   \"admissionDate\": \"2020-01-15\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0200\",\n   \"message\": \"Usuário criado com sucesso\",\n   \"employee\": {\n       \"_id\": \"5df50742202466003b524964\",\n       \"registration\": \"654321\",\n       \"name\": \"Haynna Freitas\",\n       \"email\": \"hayanna@leads2b.com.br\",\n       \"role\": \"Aux. de RH\",\n       \"phone\": \"83988317867\",\n       \"admissionDate\": \"2020-01-15T00:00:00.000Z\",\n       \"__v\": 0\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": \"E0301\",\n   \"message\": \"Erro ao criar o Funcionário\",\n   \"errors\": {\n       \"msg\": \"Ops! Matrícula já existe.\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/employee/controller.js",
    "groupTitle": "Employee"
  },
  {
    "type": "delete",
    "url": "/employee/:id",
    "title": "Delete",
    "name": "DeleteEmployee",
    "group": "Employee",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Employee ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0302\",\n   \"message\": \"Funcionário removido com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": \"E0303\",\n   \"message\": \"Erro ao remover o Funcionário\",\n   \"errors\": {\n       \"msg\": \"Mensagem de erro aqui\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/employee/controller.js",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id",
    "title": "Get (By ID)",
    "name": "GetEmployee",
    "group": "Employee",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "id",
            "description": "<p>Employee ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"5df4f4d9938a3200cdbfe960\",\n   \"registration\": \"123456\",\n   \"name\": \"Marcello Jr\",\n   \"email\": \"marcello@leads2b.com.br\",\n   \"role\": \"Desenvolvedor FullSctack\",\n   \"phone\": \"83988317867\",\n   \"admissionDate\": \"2019-12-14T14:42:33.466Z\",\n   \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": \"E0300\",\n   \"message\": \"Erro ao buscar Funcionário\",\n   \"errors\": { \"msg\": \"Mensagem de erro aqui\"}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/employee/controller.js",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee",
    "title": "Get all",
    "name": "GetEmployees",
    "group": "Employee",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   [{\n       \"_id\": \"5df4f4d9938a3200cdbfe960\",\n       \"registration\": \"123456\",\n       \"name\": \"Marcello Jr\",\n       \"email\": \"marcello@leads2b.com.br\",\n       \"role\": \"Desenvolvedor FullSctack\",\n       \"phone\": \"83988317867\",\n       \"admissionDate\": \"2019-12-14T14:42:33.466Z\",\n       \"__v\": 0\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": \"E0300\",\n   \"message\": \"Erro ao buscar Funcionário\",\n   \"errors\": {\n     \"msg\": \"Mensagem de erro aqui\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/employee/controller.js",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "/employee",
    "title": "Update",
    "name": "UpdateEmployee",
    "group": "Employee",
    "version": "1.0.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"id\": \"5df4f4d9938a3200cdbfe960\",\n   \"name\": \"Marcello Jr\",\n   \"email\": \"marcello@leads2b.com.br\",\n   \"role\": \"Desenvolvedor Fullstack\",\n   \"phone\": \"83987912383\",\n   \"admissionDate\": \"2020-01-15\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0301\",\n   \"message\": \"Funcionário atualizado com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": \"E0302\",\n   \"message\": \"Erro ao atualizar o Funcionário\",\n   \"errors\": {\n     \"msg\": \"Mensagem de erro aqui\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/employee/controller.js",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create",
    "name": "CreateUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>User usermane</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "passwaord",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"email\": \"marcello@mail.com\",\n   \"username\": \"Marcello Jr\",\n   \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0000\",\n   \"message\": \"Usuário criado com sucesso\",\n   \"user\": [{\n     \"id\": \"eb76cd10-367b-447d-b238-fa8e9eef2a1f\",\n     \"id_profile\": 1,\n     \"email\": \"marcello@mail.com\",\n     \"username\": \"Marcello Jr\",\n     \"password\": \"$2b$10$qnkfSsxQEjdTW0CHGw1z0eR/vko.vhJrqpq.xeb/T0nR4R55VpNy.\",\n     \"avatar_url\": null,\n     \"create_date\": \"2019-09-14T19:25:26.560Z\",\n     \"active\": true\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 9999,\n   \"message\": \"Dados da requisição inválidos\",\n   \"errors\": [{\n     \"msg\": \"Invalid value\",\n     \"param\": \"email\",\n     \"location\": \"body\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/user/controller.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login",
    "name": "LoginUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"email\": \"marcello@mail.com\",\n   \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": \"S0003\",\n   \"message\": \"Usuario logado\",\n   \"token\": \"eyJhbGciOiJIUzI1NiIsIdkadjJHJHKkjnbajbHBNAIKGMA\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"code\": 2505,\n   \"message\": \"Email ou senha inválido\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/user/controller.js",
    "groupTitle": "User"
  }
] });
