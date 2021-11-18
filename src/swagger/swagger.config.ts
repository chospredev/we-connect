import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from "@nestjs/swagger";
import { SWAGGER } from "./swagger.model";

export function SwaggerConfig(app: INestApplication): OpenAPIObject {
    const builder = new DocumentBuilder()
        .setTitle(SWAGGER.title)
        .setDescription(SWAGGER.description)
        .setVersion(SWAGGER.version)

        const config = builder.build();

        return SwaggerModule.createDocument(app, config);
}