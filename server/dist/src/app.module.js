"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const path_1 = require("path");
const items_module_1 = require("./items/items.module");
const typeorm_1 = require("@nestjs/typeorm");
const apollo_1 = require("@nestjs/apollo");
const categories_module_1 = require("./categories/categories.module");
const admin_module_1 = require("./admin/admin.module");
const ormconfig_1 = require("../ormconfig");
const users_meta_module_1 = require("./users-meta/users-meta.module");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const order_module_1 = require("./order/order.module");
const discount_module_1 = require("./discount/discount.module");
const items_order_module_1 = require("./items_order/items_order.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                debug: true,
                playground: true,
                introspection: true,
                sortSchema: true,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                buildSchemaOptions: {
                    dateScalarMode: 'timestamp',
                },
            }),
            typeorm_1.TypeOrmModule.forRoot(ormconfig_1.default),
            items_module_1.ItemsModule,
            categories_module_1.CategoriesModule,
            users_module_1.UsersModule,
            users_meta_module_1.UserMetaModule,
            admin_module_1.AdminModule,
            auth_module_1.AuthModule,
            order_module_1.OrderModule,
            discount_module_1.DiscountModule,
            items_order_module_1.ItemsOrderModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map