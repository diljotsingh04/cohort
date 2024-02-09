const z = require("zod");

const schema = z.object({
    email: z.string().email().endsWith(".com"),
    password: z.string().min(8)
});

console.log(schema.parse({
    email: "Diljot@gmail.in",
    password: "12345678"
}));