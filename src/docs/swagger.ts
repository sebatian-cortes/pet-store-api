import swaggerJSDoc, {OAS3Definition, OAS3Options} from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
    openapi: "3.0.0",

    info: {
        title: "documentacion Pet-Store-API",
        version: "1.0.0"
    },

    servers: [

        {
            url: "http://localhost:3000"
        },
    ],

    components: {
        securitySchemes: {bearerAuth: {

                type: "http",
                scheme: "bearer"
            },

        },
        schemas: {
            user: {
                type: "object",

                required: ["name", "email", "password"],

                properties: {
                    name: {
                        type: "string"
                    },
                    email: {
                        type:"string"
                    },
                    password: {
                        type: "string"
                    }
                },}}
    },
};

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ["./src/presentation/auth/router.ts"]
};

export default swaggerJSDoc(swaggerOptions);