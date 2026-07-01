
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model DistributorRegion
 * 
 */
export type DistributorRegion = $Result.DefaultSelection<Prisma.$DistributorRegionPayload>
/**
 * Model B2BApplication
 * 
 */
export type B2BApplication = $Result.DefaultSelection<Prisma.$B2BApplicationPayload>
/**
 * Model Influencer
 * 
 */
export type Influencer = $Result.DefaultSelection<Prisma.$InfluencerPayload>
/**
 * Model InfluencerCode
 * 
 */
export type InfluencerCode = $Result.DefaultSelection<Prisma.$InfluencerCodePayload>
/**
 * Model OrderAttribution
 * 
 */
export type OrderAttribution = $Result.DefaultSelection<Prisma.$OrderAttributionPayload>
/**
 * Model DistributorOrderStatus
 * 
 */
export type DistributorOrderStatus = $Result.DefaultSelection<Prisma.$DistributorOrderStatusPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model WebhookEvent
 * 
 */
export type WebhookEvent = $Result.DefaultSelection<Prisma.$WebhookEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleName: {
  ADMIN: 'ADMIN',
  APPROVER: 'APPROVER',
  EDITOR: 'EDITOR',
  DISTRIBUTOR: 'DISTRIBUTOR',
  VIEWER: 'VIEWER'
};

export type RoleName = (typeof RoleName)[keyof typeof RoleName]


export const B2BApplicationStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type B2BApplicationStatus = (typeof B2BApplicationStatus)[keyof typeof B2BApplicationStatus]


export const DistributorOrderState: {
  ACCEPTED: 'ACCEPTED',
  OUT_FOR_DELIVERY: 'OUT_FOR_DELIVERY',
  REJECTED: 'REJECTED',
  DELIVERED: 'DELIVERED'
};

export type DistributorOrderState = (typeof DistributorOrderState)[keyof typeof DistributorOrderState]

}

export type RoleName = $Enums.RoleName

export const RoleName: typeof $Enums.RoleName

export type B2BApplicationStatus = $Enums.B2BApplicationStatus

export const B2BApplicationStatus: typeof $Enums.B2BApplicationStatus

export type DistributorOrderState = $Enums.DistributorOrderState

export const DistributorOrderState: typeof $Enums.DistributorOrderState

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.distributorRegion`: Exposes CRUD operations for the **DistributorRegion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DistributorRegions
    * const distributorRegions = await prisma.distributorRegion.findMany()
    * ```
    */
  get distributorRegion(): Prisma.DistributorRegionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.b2BApplication`: Exposes CRUD operations for the **B2BApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more B2BApplications
    * const b2BApplications = await prisma.b2BApplication.findMany()
    * ```
    */
  get b2BApplication(): Prisma.B2BApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.influencer`: Exposes CRUD operations for the **Influencer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Influencers
    * const influencers = await prisma.influencer.findMany()
    * ```
    */
  get influencer(): Prisma.InfluencerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.influencerCode`: Exposes CRUD operations for the **InfluencerCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InfluencerCodes
    * const influencerCodes = await prisma.influencerCode.findMany()
    * ```
    */
  get influencerCode(): Prisma.InfluencerCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderAttribution`: Exposes CRUD operations for the **OrderAttribution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderAttributions
    * const orderAttributions = await prisma.orderAttribution.findMany()
    * ```
    */
  get orderAttribution(): Prisma.OrderAttributionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.distributorOrderStatus`: Exposes CRUD operations for the **DistributorOrderStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DistributorOrderStatuses
    * const distributorOrderStatuses = await prisma.distributorOrderStatus.findMany()
    * ```
    */
  get distributorOrderStatus(): Prisma.DistributorOrderStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhookEvent`: Exposes CRUD operations for the **WebhookEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookEvents
    * const webhookEvents = await prisma.webhookEvent.findMany()
    * ```
    */
  get webhookEvent(): Prisma.WebhookEventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    DistributorRegion: 'DistributorRegion',
    B2BApplication: 'B2BApplication',
    Influencer: 'Influencer',
    InfluencerCode: 'InfluencerCode',
    OrderAttribution: 'OrderAttribution',
    DistributorOrderStatus: 'DistributorOrderStatus',
    AuditLog: 'AuditLog',
    WebhookEvent: 'WebhookEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "distributorRegion" | "b2BApplication" | "influencer" | "influencerCode" | "orderAttribution" | "distributorOrderStatus" | "auditLog" | "webhookEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      DistributorRegion: {
        payload: Prisma.$DistributorRegionPayload<ExtArgs>
        fields: Prisma.DistributorRegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistributorRegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorRegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistributorRegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorRegionPayload>
          }
          findFirst: {
            args: Prisma.DistributorRegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorRegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistributorRegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorRegionPayload>
          }
          findMany: {
            args: Prisma.DistributorRegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorRegionPayload>[]
          }
          create: {
            args: Prisma.DistributorRegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorRegionPayload>
          }
          createMany: {
            args: Prisma.DistributorRegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistributorRegionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorRegionPayload>[]
          }
          delete: {
            args: Prisma.DistributorRegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorRegionPayload>
          }
          update: {
            args: Prisma.DistributorRegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorRegionPayload>
          }
          deleteMany: {
            args: Prisma.DistributorRegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistributorRegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DistributorRegionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorRegionPayload>[]
          }
          upsert: {
            args: Prisma.DistributorRegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorRegionPayload>
          }
          aggregate: {
            args: Prisma.DistributorRegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistributorRegion>
          }
          groupBy: {
            args: Prisma.DistributorRegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistributorRegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistributorRegionCountArgs<ExtArgs>
            result: $Utils.Optional<DistributorRegionCountAggregateOutputType> | number
          }
        }
      }
      B2BApplication: {
        payload: Prisma.$B2BApplicationPayload<ExtArgs>
        fields: Prisma.B2BApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.B2BApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$B2BApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.B2BApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$B2BApplicationPayload>
          }
          findFirst: {
            args: Prisma.B2BApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$B2BApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.B2BApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$B2BApplicationPayload>
          }
          findMany: {
            args: Prisma.B2BApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$B2BApplicationPayload>[]
          }
          create: {
            args: Prisma.B2BApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$B2BApplicationPayload>
          }
          createMany: {
            args: Prisma.B2BApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.B2BApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$B2BApplicationPayload>[]
          }
          delete: {
            args: Prisma.B2BApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$B2BApplicationPayload>
          }
          update: {
            args: Prisma.B2BApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$B2BApplicationPayload>
          }
          deleteMany: {
            args: Prisma.B2BApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.B2BApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.B2BApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$B2BApplicationPayload>[]
          }
          upsert: {
            args: Prisma.B2BApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$B2BApplicationPayload>
          }
          aggregate: {
            args: Prisma.B2BApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateB2BApplication>
          }
          groupBy: {
            args: Prisma.B2BApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<B2BApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.B2BApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<B2BApplicationCountAggregateOutputType> | number
          }
        }
      }
      Influencer: {
        payload: Prisma.$InfluencerPayload<ExtArgs>
        fields: Prisma.InfluencerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InfluencerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InfluencerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerPayload>
          }
          findFirst: {
            args: Prisma.InfluencerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InfluencerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerPayload>
          }
          findMany: {
            args: Prisma.InfluencerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerPayload>[]
          }
          create: {
            args: Prisma.InfluencerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerPayload>
          }
          createMany: {
            args: Prisma.InfluencerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InfluencerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerPayload>[]
          }
          delete: {
            args: Prisma.InfluencerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerPayload>
          }
          update: {
            args: Prisma.InfluencerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerPayload>
          }
          deleteMany: {
            args: Prisma.InfluencerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InfluencerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InfluencerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerPayload>[]
          }
          upsert: {
            args: Prisma.InfluencerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerPayload>
          }
          aggregate: {
            args: Prisma.InfluencerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInfluencer>
          }
          groupBy: {
            args: Prisma.InfluencerGroupByArgs<ExtArgs>
            result: $Utils.Optional<InfluencerGroupByOutputType>[]
          }
          count: {
            args: Prisma.InfluencerCountArgs<ExtArgs>
            result: $Utils.Optional<InfluencerCountAggregateOutputType> | number
          }
        }
      }
      InfluencerCode: {
        payload: Prisma.$InfluencerCodePayload<ExtArgs>
        fields: Prisma.InfluencerCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InfluencerCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InfluencerCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerCodePayload>
          }
          findFirst: {
            args: Prisma.InfluencerCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InfluencerCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerCodePayload>
          }
          findMany: {
            args: Prisma.InfluencerCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerCodePayload>[]
          }
          create: {
            args: Prisma.InfluencerCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerCodePayload>
          }
          createMany: {
            args: Prisma.InfluencerCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InfluencerCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerCodePayload>[]
          }
          delete: {
            args: Prisma.InfluencerCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerCodePayload>
          }
          update: {
            args: Prisma.InfluencerCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerCodePayload>
          }
          deleteMany: {
            args: Prisma.InfluencerCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InfluencerCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InfluencerCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerCodePayload>[]
          }
          upsert: {
            args: Prisma.InfluencerCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfluencerCodePayload>
          }
          aggregate: {
            args: Prisma.InfluencerCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInfluencerCode>
          }
          groupBy: {
            args: Prisma.InfluencerCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<InfluencerCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.InfluencerCodeCountArgs<ExtArgs>
            result: $Utils.Optional<InfluencerCodeCountAggregateOutputType> | number
          }
        }
      }
      OrderAttribution: {
        payload: Prisma.$OrderAttributionPayload<ExtArgs>
        fields: Prisma.OrderAttributionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderAttributionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAttributionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderAttributionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAttributionPayload>
          }
          findFirst: {
            args: Prisma.OrderAttributionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAttributionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderAttributionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAttributionPayload>
          }
          findMany: {
            args: Prisma.OrderAttributionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAttributionPayload>[]
          }
          create: {
            args: Prisma.OrderAttributionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAttributionPayload>
          }
          createMany: {
            args: Prisma.OrderAttributionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderAttributionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAttributionPayload>[]
          }
          delete: {
            args: Prisma.OrderAttributionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAttributionPayload>
          }
          update: {
            args: Prisma.OrderAttributionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAttributionPayload>
          }
          deleteMany: {
            args: Prisma.OrderAttributionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderAttributionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderAttributionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAttributionPayload>[]
          }
          upsert: {
            args: Prisma.OrderAttributionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAttributionPayload>
          }
          aggregate: {
            args: Prisma.OrderAttributionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderAttribution>
          }
          groupBy: {
            args: Prisma.OrderAttributionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderAttributionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderAttributionCountArgs<ExtArgs>
            result: $Utils.Optional<OrderAttributionCountAggregateOutputType> | number
          }
        }
      }
      DistributorOrderStatus: {
        payload: Prisma.$DistributorOrderStatusPayload<ExtArgs>
        fields: Prisma.DistributorOrderStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistributorOrderStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistributorOrderStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderStatusPayload>
          }
          findFirst: {
            args: Prisma.DistributorOrderStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistributorOrderStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderStatusPayload>
          }
          findMany: {
            args: Prisma.DistributorOrderStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderStatusPayload>[]
          }
          create: {
            args: Prisma.DistributorOrderStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderStatusPayload>
          }
          createMany: {
            args: Prisma.DistributorOrderStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistributorOrderStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderStatusPayload>[]
          }
          delete: {
            args: Prisma.DistributorOrderStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderStatusPayload>
          }
          update: {
            args: Prisma.DistributorOrderStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderStatusPayload>
          }
          deleteMany: {
            args: Prisma.DistributorOrderStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistributorOrderStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DistributorOrderStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderStatusPayload>[]
          }
          upsert: {
            args: Prisma.DistributorOrderStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderStatusPayload>
          }
          aggregate: {
            args: Prisma.DistributorOrderStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistributorOrderStatus>
          }
          groupBy: {
            args: Prisma.DistributorOrderStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistributorOrderStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistributorOrderStatusCountArgs<ExtArgs>
            result: $Utils.Optional<DistributorOrderStatusCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      WebhookEvent: {
        payload: Prisma.$WebhookEventPayload<ExtArgs>
        fields: Prisma.WebhookEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          findFirst: {
            args: Prisma.WebhookEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          findMany: {
            args: Prisma.WebhookEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>[]
          }
          create: {
            args: Prisma.WebhookEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          createMany: {
            args: Prisma.WebhookEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>[]
          }
          delete: {
            args: Prisma.WebhookEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          update: {
            args: Prisma.WebhookEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          deleteMany: {
            args: Prisma.WebhookEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebhookEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>[]
          }
          upsert: {
            args: Prisma.WebhookEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          aggregate: {
            args: Prisma.WebhookEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookEvent>
          }
          groupBy: {
            args: Prisma.WebhookEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookEventCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    distributorRegion?: DistributorRegionOmit
    b2BApplication?: B2BApplicationOmit
    influencer?: InfluencerOmit
    influencerCode?: InfluencerCodeOmit
    orderAttribution?: OrderAttributionOmit
    distributorOrderStatus?: DistributorOrderStatusOmit
    auditLog?: AuditLogOmit
    webhookEvent?: WebhookEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    distributorRegions: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distributorRegions?: boolean | UserCountOutputTypeCountDistributorRegionsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDistributorRegionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributorRegionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type InfluencerCountOutputType
   */

  export type InfluencerCountOutputType = {
    codes: number
  }

  export type InfluencerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    codes?: boolean | InfluencerCountOutputTypeCountCodesArgs
  }

  // Custom InputTypes
  /**
   * InfluencerCountOutputType without action
   */
  export type InfluencerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerCountOutputType
     */
    select?: InfluencerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InfluencerCountOutputType without action
   */
  export type InfluencerCountOutputTypeCountCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InfluencerCodeWhereInput
  }


  /**
   * Count Type InfluencerCodeCountOutputType
   */

  export type InfluencerCodeCountOutputType = {
    attributions: number
  }

  export type InfluencerCodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributions?: boolean | InfluencerCodeCountOutputTypeCountAttributionsArgs
  }

  // Custom InputTypes
  /**
   * InfluencerCodeCountOutputType without action
   */
  export type InfluencerCodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerCodeCountOutputType
     */
    select?: InfluencerCodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InfluencerCodeCountOutputType without action
   */
  export type InfluencerCodeCountOutputTypeCountAttributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderAttributionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    shopifyCustomerId: string | null
    role: $Enums.RoleName | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    shopifyCustomerId: string | null
    role: $Enums.RoleName | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    shopifyCustomerId: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    shopifyCustomerId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    shopifyCustomerId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    shopifyCustomerId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    shopifyCustomerId: string | null
    role: $Enums.RoleName
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    shopifyCustomerId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    distributorRegions?: boolean | User$distributorRegionsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    shopifyCustomerId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    shopifyCustomerId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    shopifyCustomerId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "shopifyCustomerId" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distributorRegions?: boolean | User$distributorRegionsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      distributorRegions: Prisma.$DistributorRegionPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      shopifyCustomerId: string | null
      role: $Enums.RoleName
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    distributorRegions<T extends User$distributorRegionsArgs<ExtArgs> = {}>(args?: Subset<T, User$distributorRegionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorRegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly shopifyCustomerId: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'RoleName'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.distributorRegions
   */
  export type User$distributorRegionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorRegion
     */
    select?: DistributorRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorRegion
     */
    omit?: DistributorRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorRegionInclude<ExtArgs> | null
    where?: DistributorRegionWhereInput
    orderBy?: DistributorRegionOrderByWithRelationInput | DistributorRegionOrderByWithRelationInput[]
    cursor?: DistributorRegionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistributorRegionScalarFieldEnum | DistributorRegionScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model DistributorRegion
   */

  export type AggregateDistributorRegion = {
    _count: DistributorRegionCountAggregateOutputType | null
    _min: DistributorRegionMinAggregateOutputType | null
    _max: DistributorRegionMaxAggregateOutputType | null
  }

  export type DistributorRegionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    country: string | null
    region: string | null
    createdAt: Date | null
  }

  export type DistributorRegionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    country: string | null
    region: string | null
    createdAt: Date | null
  }

  export type DistributorRegionCountAggregateOutputType = {
    id: number
    userId: number
    country: number
    region: number
    createdAt: number
    _all: number
  }


  export type DistributorRegionMinAggregateInputType = {
    id?: true
    userId?: true
    country?: true
    region?: true
    createdAt?: true
  }

  export type DistributorRegionMaxAggregateInputType = {
    id?: true
    userId?: true
    country?: true
    region?: true
    createdAt?: true
  }

  export type DistributorRegionCountAggregateInputType = {
    id?: true
    userId?: true
    country?: true
    region?: true
    createdAt?: true
    _all?: true
  }

  export type DistributorRegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DistributorRegion to aggregate.
     */
    where?: DistributorRegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistributorRegions to fetch.
     */
    orderBy?: DistributorRegionOrderByWithRelationInput | DistributorRegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistributorRegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistributorRegions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistributorRegions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DistributorRegions
    **/
    _count?: true | DistributorRegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistributorRegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistributorRegionMaxAggregateInputType
  }

  export type GetDistributorRegionAggregateType<T extends DistributorRegionAggregateArgs> = {
        [P in keyof T & keyof AggregateDistributorRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistributorRegion[P]>
      : GetScalarType<T[P], AggregateDistributorRegion[P]>
  }




  export type DistributorRegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributorRegionWhereInput
    orderBy?: DistributorRegionOrderByWithAggregationInput | DistributorRegionOrderByWithAggregationInput[]
    by: DistributorRegionScalarFieldEnum[] | DistributorRegionScalarFieldEnum
    having?: DistributorRegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistributorRegionCountAggregateInputType | true
    _min?: DistributorRegionMinAggregateInputType
    _max?: DistributorRegionMaxAggregateInputType
  }

  export type DistributorRegionGroupByOutputType = {
    id: string
    userId: string
    country: string
    region: string
    createdAt: Date
    _count: DistributorRegionCountAggregateOutputType | null
    _min: DistributorRegionMinAggregateOutputType | null
    _max: DistributorRegionMaxAggregateOutputType | null
  }

  type GetDistributorRegionGroupByPayload<T extends DistributorRegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistributorRegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistributorRegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistributorRegionGroupByOutputType[P]>
            : GetScalarType<T[P], DistributorRegionGroupByOutputType[P]>
        }
      >
    >


  export type DistributorRegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    country?: boolean
    region?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distributorRegion"]>

  export type DistributorRegionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    country?: boolean
    region?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distributorRegion"]>

  export type DistributorRegionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    country?: boolean
    region?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distributorRegion"]>

  export type DistributorRegionSelectScalar = {
    id?: boolean
    userId?: boolean
    country?: boolean
    region?: boolean
    createdAt?: boolean
  }

  export type DistributorRegionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "country" | "region" | "createdAt", ExtArgs["result"]["distributorRegion"]>
  export type DistributorRegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DistributorRegionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DistributorRegionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DistributorRegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DistributorRegion"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      country: string
      region: string
      createdAt: Date
    }, ExtArgs["result"]["distributorRegion"]>
    composites: {}
  }

  type DistributorRegionGetPayload<S extends boolean | null | undefined | DistributorRegionDefaultArgs> = $Result.GetResult<Prisma.$DistributorRegionPayload, S>

  type DistributorRegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistributorRegionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistributorRegionCountAggregateInputType | true
    }

  export interface DistributorRegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DistributorRegion'], meta: { name: 'DistributorRegion' } }
    /**
     * Find zero or one DistributorRegion that matches the filter.
     * @param {DistributorRegionFindUniqueArgs} args - Arguments to find a DistributorRegion
     * @example
     * // Get one DistributorRegion
     * const distributorRegion = await prisma.distributorRegion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistributorRegionFindUniqueArgs>(args: SelectSubset<T, DistributorRegionFindUniqueArgs<ExtArgs>>): Prisma__DistributorRegionClient<$Result.GetResult<Prisma.$DistributorRegionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DistributorRegion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistributorRegionFindUniqueOrThrowArgs} args - Arguments to find a DistributorRegion
     * @example
     * // Get one DistributorRegion
     * const distributorRegion = await prisma.distributorRegion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistributorRegionFindUniqueOrThrowArgs>(args: SelectSubset<T, DistributorRegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistributorRegionClient<$Result.GetResult<Prisma.$DistributorRegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DistributorRegion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorRegionFindFirstArgs} args - Arguments to find a DistributorRegion
     * @example
     * // Get one DistributorRegion
     * const distributorRegion = await prisma.distributorRegion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistributorRegionFindFirstArgs>(args?: SelectSubset<T, DistributorRegionFindFirstArgs<ExtArgs>>): Prisma__DistributorRegionClient<$Result.GetResult<Prisma.$DistributorRegionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DistributorRegion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorRegionFindFirstOrThrowArgs} args - Arguments to find a DistributorRegion
     * @example
     * // Get one DistributorRegion
     * const distributorRegion = await prisma.distributorRegion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistributorRegionFindFirstOrThrowArgs>(args?: SelectSubset<T, DistributorRegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistributorRegionClient<$Result.GetResult<Prisma.$DistributorRegionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DistributorRegions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorRegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DistributorRegions
     * const distributorRegions = await prisma.distributorRegion.findMany()
     * 
     * // Get first 10 DistributorRegions
     * const distributorRegions = await prisma.distributorRegion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const distributorRegionWithIdOnly = await prisma.distributorRegion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistributorRegionFindManyArgs>(args?: SelectSubset<T, DistributorRegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorRegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DistributorRegion.
     * @param {DistributorRegionCreateArgs} args - Arguments to create a DistributorRegion.
     * @example
     * // Create one DistributorRegion
     * const DistributorRegion = await prisma.distributorRegion.create({
     *   data: {
     *     // ... data to create a DistributorRegion
     *   }
     * })
     * 
     */
    create<T extends DistributorRegionCreateArgs>(args: SelectSubset<T, DistributorRegionCreateArgs<ExtArgs>>): Prisma__DistributorRegionClient<$Result.GetResult<Prisma.$DistributorRegionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DistributorRegions.
     * @param {DistributorRegionCreateManyArgs} args - Arguments to create many DistributorRegions.
     * @example
     * // Create many DistributorRegions
     * const distributorRegion = await prisma.distributorRegion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistributorRegionCreateManyArgs>(args?: SelectSubset<T, DistributorRegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DistributorRegions and returns the data saved in the database.
     * @param {DistributorRegionCreateManyAndReturnArgs} args - Arguments to create many DistributorRegions.
     * @example
     * // Create many DistributorRegions
     * const distributorRegion = await prisma.distributorRegion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DistributorRegions and only return the `id`
     * const distributorRegionWithIdOnly = await prisma.distributorRegion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistributorRegionCreateManyAndReturnArgs>(args?: SelectSubset<T, DistributorRegionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorRegionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DistributorRegion.
     * @param {DistributorRegionDeleteArgs} args - Arguments to delete one DistributorRegion.
     * @example
     * // Delete one DistributorRegion
     * const DistributorRegion = await prisma.distributorRegion.delete({
     *   where: {
     *     // ... filter to delete one DistributorRegion
     *   }
     * })
     * 
     */
    delete<T extends DistributorRegionDeleteArgs>(args: SelectSubset<T, DistributorRegionDeleteArgs<ExtArgs>>): Prisma__DistributorRegionClient<$Result.GetResult<Prisma.$DistributorRegionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DistributorRegion.
     * @param {DistributorRegionUpdateArgs} args - Arguments to update one DistributorRegion.
     * @example
     * // Update one DistributorRegion
     * const distributorRegion = await prisma.distributorRegion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistributorRegionUpdateArgs>(args: SelectSubset<T, DistributorRegionUpdateArgs<ExtArgs>>): Prisma__DistributorRegionClient<$Result.GetResult<Prisma.$DistributorRegionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DistributorRegions.
     * @param {DistributorRegionDeleteManyArgs} args - Arguments to filter DistributorRegions to delete.
     * @example
     * // Delete a few DistributorRegions
     * const { count } = await prisma.distributorRegion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistributorRegionDeleteManyArgs>(args?: SelectSubset<T, DistributorRegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DistributorRegions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorRegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DistributorRegions
     * const distributorRegion = await prisma.distributorRegion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistributorRegionUpdateManyArgs>(args: SelectSubset<T, DistributorRegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DistributorRegions and returns the data updated in the database.
     * @param {DistributorRegionUpdateManyAndReturnArgs} args - Arguments to update many DistributorRegions.
     * @example
     * // Update many DistributorRegions
     * const distributorRegion = await prisma.distributorRegion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DistributorRegions and only return the `id`
     * const distributorRegionWithIdOnly = await prisma.distributorRegion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DistributorRegionUpdateManyAndReturnArgs>(args: SelectSubset<T, DistributorRegionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorRegionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DistributorRegion.
     * @param {DistributorRegionUpsertArgs} args - Arguments to update or create a DistributorRegion.
     * @example
     * // Update or create a DistributorRegion
     * const distributorRegion = await prisma.distributorRegion.upsert({
     *   create: {
     *     // ... data to create a DistributorRegion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DistributorRegion we want to update
     *   }
     * })
     */
    upsert<T extends DistributorRegionUpsertArgs>(args: SelectSubset<T, DistributorRegionUpsertArgs<ExtArgs>>): Prisma__DistributorRegionClient<$Result.GetResult<Prisma.$DistributorRegionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DistributorRegions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorRegionCountArgs} args - Arguments to filter DistributorRegions to count.
     * @example
     * // Count the number of DistributorRegions
     * const count = await prisma.distributorRegion.count({
     *   where: {
     *     // ... the filter for the DistributorRegions we want to count
     *   }
     * })
    **/
    count<T extends DistributorRegionCountArgs>(
      args?: Subset<T, DistributorRegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistributorRegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DistributorRegion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorRegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DistributorRegionAggregateArgs>(args: Subset<T, DistributorRegionAggregateArgs>): Prisma.PrismaPromise<GetDistributorRegionAggregateType<T>>

    /**
     * Group by DistributorRegion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorRegionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DistributorRegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistributorRegionGroupByArgs['orderBy'] }
        : { orderBy?: DistributorRegionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DistributorRegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistributorRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DistributorRegion model
   */
  readonly fields: DistributorRegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DistributorRegion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistributorRegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DistributorRegion model
   */
  interface DistributorRegionFieldRefs {
    readonly id: FieldRef<"DistributorRegion", 'String'>
    readonly userId: FieldRef<"DistributorRegion", 'String'>
    readonly country: FieldRef<"DistributorRegion", 'String'>
    readonly region: FieldRef<"DistributorRegion", 'String'>
    readonly createdAt: FieldRef<"DistributorRegion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DistributorRegion findUnique
   */
  export type DistributorRegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorRegion
     */
    select?: DistributorRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorRegion
     */
    omit?: DistributorRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorRegionInclude<ExtArgs> | null
    /**
     * Filter, which DistributorRegion to fetch.
     */
    where: DistributorRegionWhereUniqueInput
  }

  /**
   * DistributorRegion findUniqueOrThrow
   */
  export type DistributorRegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorRegion
     */
    select?: DistributorRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorRegion
     */
    omit?: DistributorRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorRegionInclude<ExtArgs> | null
    /**
     * Filter, which DistributorRegion to fetch.
     */
    where: DistributorRegionWhereUniqueInput
  }

  /**
   * DistributorRegion findFirst
   */
  export type DistributorRegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorRegion
     */
    select?: DistributorRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorRegion
     */
    omit?: DistributorRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorRegionInclude<ExtArgs> | null
    /**
     * Filter, which DistributorRegion to fetch.
     */
    where?: DistributorRegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistributorRegions to fetch.
     */
    orderBy?: DistributorRegionOrderByWithRelationInput | DistributorRegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DistributorRegions.
     */
    cursor?: DistributorRegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistributorRegions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistributorRegions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistributorRegions.
     */
    distinct?: DistributorRegionScalarFieldEnum | DistributorRegionScalarFieldEnum[]
  }

  /**
   * DistributorRegion findFirstOrThrow
   */
  export type DistributorRegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorRegion
     */
    select?: DistributorRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorRegion
     */
    omit?: DistributorRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorRegionInclude<ExtArgs> | null
    /**
     * Filter, which DistributorRegion to fetch.
     */
    where?: DistributorRegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistributorRegions to fetch.
     */
    orderBy?: DistributorRegionOrderByWithRelationInput | DistributorRegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DistributorRegions.
     */
    cursor?: DistributorRegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistributorRegions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistributorRegions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistributorRegions.
     */
    distinct?: DistributorRegionScalarFieldEnum | DistributorRegionScalarFieldEnum[]
  }

  /**
   * DistributorRegion findMany
   */
  export type DistributorRegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorRegion
     */
    select?: DistributorRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorRegion
     */
    omit?: DistributorRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorRegionInclude<ExtArgs> | null
    /**
     * Filter, which DistributorRegions to fetch.
     */
    where?: DistributorRegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistributorRegions to fetch.
     */
    orderBy?: DistributorRegionOrderByWithRelationInput | DistributorRegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DistributorRegions.
     */
    cursor?: DistributorRegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistributorRegions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistributorRegions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistributorRegions.
     */
    distinct?: DistributorRegionScalarFieldEnum | DistributorRegionScalarFieldEnum[]
  }

  /**
   * DistributorRegion create
   */
  export type DistributorRegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorRegion
     */
    select?: DistributorRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorRegion
     */
    omit?: DistributorRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorRegionInclude<ExtArgs> | null
    /**
     * The data needed to create a DistributorRegion.
     */
    data: XOR<DistributorRegionCreateInput, DistributorRegionUncheckedCreateInput>
  }

  /**
   * DistributorRegion createMany
   */
  export type DistributorRegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DistributorRegions.
     */
    data: DistributorRegionCreateManyInput | DistributorRegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DistributorRegion createManyAndReturn
   */
  export type DistributorRegionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorRegion
     */
    select?: DistributorRegionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorRegion
     */
    omit?: DistributorRegionOmit<ExtArgs> | null
    /**
     * The data used to create many DistributorRegions.
     */
    data: DistributorRegionCreateManyInput | DistributorRegionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorRegionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DistributorRegion update
   */
  export type DistributorRegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorRegion
     */
    select?: DistributorRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorRegion
     */
    omit?: DistributorRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorRegionInclude<ExtArgs> | null
    /**
     * The data needed to update a DistributorRegion.
     */
    data: XOR<DistributorRegionUpdateInput, DistributorRegionUncheckedUpdateInput>
    /**
     * Choose, which DistributorRegion to update.
     */
    where: DistributorRegionWhereUniqueInput
  }

  /**
   * DistributorRegion updateMany
   */
  export type DistributorRegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DistributorRegions.
     */
    data: XOR<DistributorRegionUpdateManyMutationInput, DistributorRegionUncheckedUpdateManyInput>
    /**
     * Filter which DistributorRegions to update
     */
    where?: DistributorRegionWhereInput
    /**
     * Limit how many DistributorRegions to update.
     */
    limit?: number
  }

  /**
   * DistributorRegion updateManyAndReturn
   */
  export type DistributorRegionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorRegion
     */
    select?: DistributorRegionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorRegion
     */
    omit?: DistributorRegionOmit<ExtArgs> | null
    /**
     * The data used to update DistributorRegions.
     */
    data: XOR<DistributorRegionUpdateManyMutationInput, DistributorRegionUncheckedUpdateManyInput>
    /**
     * Filter which DistributorRegions to update
     */
    where?: DistributorRegionWhereInput
    /**
     * Limit how many DistributorRegions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorRegionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DistributorRegion upsert
   */
  export type DistributorRegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorRegion
     */
    select?: DistributorRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorRegion
     */
    omit?: DistributorRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorRegionInclude<ExtArgs> | null
    /**
     * The filter to search for the DistributorRegion to update in case it exists.
     */
    where: DistributorRegionWhereUniqueInput
    /**
     * In case the DistributorRegion found by the `where` argument doesn't exist, create a new DistributorRegion with this data.
     */
    create: XOR<DistributorRegionCreateInput, DistributorRegionUncheckedCreateInput>
    /**
     * In case the DistributorRegion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistributorRegionUpdateInput, DistributorRegionUncheckedUpdateInput>
  }

  /**
   * DistributorRegion delete
   */
  export type DistributorRegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorRegion
     */
    select?: DistributorRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorRegion
     */
    omit?: DistributorRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorRegionInclude<ExtArgs> | null
    /**
     * Filter which DistributorRegion to delete.
     */
    where: DistributorRegionWhereUniqueInput
  }

  /**
   * DistributorRegion deleteMany
   */
  export type DistributorRegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DistributorRegions to delete
     */
    where?: DistributorRegionWhereInput
    /**
     * Limit how many DistributorRegions to delete.
     */
    limit?: number
  }

  /**
   * DistributorRegion without action
   */
  export type DistributorRegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorRegion
     */
    select?: DistributorRegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorRegion
     */
    omit?: DistributorRegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorRegionInclude<ExtArgs> | null
  }


  /**
   * Model B2BApplication
   */

  export type AggregateB2BApplication = {
    _count: B2BApplicationCountAggregateOutputType | null
    _min: B2BApplicationMinAggregateOutputType | null
    _max: B2BApplicationMaxAggregateOutputType | null
  }

  export type B2BApplicationMinAggregateOutputType = {
    id: string | null
    shopifyCustomerId: string | null
    email: string | null
    contactName: string | null
    businessName: string | null
    taxId: string | null
    message: string | null
    status: $Enums.B2BApplicationStatus | null
    reviewedById: string | null
    reviewedAt: Date | null
    rejectionReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type B2BApplicationMaxAggregateOutputType = {
    id: string | null
    shopifyCustomerId: string | null
    email: string | null
    contactName: string | null
    businessName: string | null
    taxId: string | null
    message: string | null
    status: $Enums.B2BApplicationStatus | null
    reviewedById: string | null
    reviewedAt: Date | null
    rejectionReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type B2BApplicationCountAggregateOutputType = {
    id: number
    shopifyCustomerId: number
    email: number
    contactName: number
    businessName: number
    taxId: number
    message: number
    status: number
    reviewedById: number
    reviewedAt: number
    rejectionReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type B2BApplicationMinAggregateInputType = {
    id?: true
    shopifyCustomerId?: true
    email?: true
    contactName?: true
    businessName?: true
    taxId?: true
    message?: true
    status?: true
    reviewedById?: true
    reviewedAt?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type B2BApplicationMaxAggregateInputType = {
    id?: true
    shopifyCustomerId?: true
    email?: true
    contactName?: true
    businessName?: true
    taxId?: true
    message?: true
    status?: true
    reviewedById?: true
    reviewedAt?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type B2BApplicationCountAggregateInputType = {
    id?: true
    shopifyCustomerId?: true
    email?: true
    contactName?: true
    businessName?: true
    taxId?: true
    message?: true
    status?: true
    reviewedById?: true
    reviewedAt?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type B2BApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which B2BApplication to aggregate.
     */
    where?: B2BApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of B2BApplications to fetch.
     */
    orderBy?: B2BApplicationOrderByWithRelationInput | B2BApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: B2BApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` B2BApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` B2BApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned B2BApplications
    **/
    _count?: true | B2BApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: B2BApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: B2BApplicationMaxAggregateInputType
  }

  export type GetB2BApplicationAggregateType<T extends B2BApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateB2BApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateB2BApplication[P]>
      : GetScalarType<T[P], AggregateB2BApplication[P]>
  }




  export type B2BApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: B2BApplicationWhereInput
    orderBy?: B2BApplicationOrderByWithAggregationInput | B2BApplicationOrderByWithAggregationInput[]
    by: B2BApplicationScalarFieldEnum[] | B2BApplicationScalarFieldEnum
    having?: B2BApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: B2BApplicationCountAggregateInputType | true
    _min?: B2BApplicationMinAggregateInputType
    _max?: B2BApplicationMaxAggregateInputType
  }

  export type B2BApplicationGroupByOutputType = {
    id: string
    shopifyCustomerId: string | null
    email: string
    contactName: string
    businessName: string
    taxId: string | null
    message: string | null
    status: $Enums.B2BApplicationStatus
    reviewedById: string | null
    reviewedAt: Date | null
    rejectionReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: B2BApplicationCountAggregateOutputType | null
    _min: B2BApplicationMinAggregateOutputType | null
    _max: B2BApplicationMaxAggregateOutputType | null
  }

  type GetB2BApplicationGroupByPayload<T extends B2BApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<B2BApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof B2BApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], B2BApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], B2BApplicationGroupByOutputType[P]>
        }
      >
    >


  export type B2BApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopifyCustomerId?: boolean
    email?: boolean
    contactName?: boolean
    businessName?: boolean
    taxId?: boolean
    message?: boolean
    status?: boolean
    reviewedById?: boolean
    reviewedAt?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["b2BApplication"]>

  export type B2BApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopifyCustomerId?: boolean
    email?: boolean
    contactName?: boolean
    businessName?: boolean
    taxId?: boolean
    message?: boolean
    status?: boolean
    reviewedById?: boolean
    reviewedAt?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["b2BApplication"]>

  export type B2BApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopifyCustomerId?: boolean
    email?: boolean
    contactName?: boolean
    businessName?: boolean
    taxId?: boolean
    message?: boolean
    status?: boolean
    reviewedById?: boolean
    reviewedAt?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["b2BApplication"]>

  export type B2BApplicationSelectScalar = {
    id?: boolean
    shopifyCustomerId?: boolean
    email?: boolean
    contactName?: boolean
    businessName?: boolean
    taxId?: boolean
    message?: boolean
    status?: boolean
    reviewedById?: boolean
    reviewedAt?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type B2BApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopifyCustomerId" | "email" | "contactName" | "businessName" | "taxId" | "message" | "status" | "reviewedById" | "reviewedAt" | "rejectionReason" | "createdAt" | "updatedAt", ExtArgs["result"]["b2BApplication"]>

  export type $B2BApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "B2BApplication"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopifyCustomerId: string | null
      email: string
      contactName: string
      businessName: string
      taxId: string | null
      message: string | null
      status: $Enums.B2BApplicationStatus
      reviewedById: string | null
      reviewedAt: Date | null
      rejectionReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["b2BApplication"]>
    composites: {}
  }

  type B2BApplicationGetPayload<S extends boolean | null | undefined | B2BApplicationDefaultArgs> = $Result.GetResult<Prisma.$B2BApplicationPayload, S>

  type B2BApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<B2BApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: B2BApplicationCountAggregateInputType | true
    }

  export interface B2BApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['B2BApplication'], meta: { name: 'B2BApplication' } }
    /**
     * Find zero or one B2BApplication that matches the filter.
     * @param {B2BApplicationFindUniqueArgs} args - Arguments to find a B2BApplication
     * @example
     * // Get one B2BApplication
     * const b2BApplication = await prisma.b2BApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends B2BApplicationFindUniqueArgs>(args: SelectSubset<T, B2BApplicationFindUniqueArgs<ExtArgs>>): Prisma__B2BApplicationClient<$Result.GetResult<Prisma.$B2BApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one B2BApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {B2BApplicationFindUniqueOrThrowArgs} args - Arguments to find a B2BApplication
     * @example
     * // Get one B2BApplication
     * const b2BApplication = await prisma.b2BApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends B2BApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, B2BApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__B2BApplicationClient<$Result.GetResult<Prisma.$B2BApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first B2BApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {B2BApplicationFindFirstArgs} args - Arguments to find a B2BApplication
     * @example
     * // Get one B2BApplication
     * const b2BApplication = await prisma.b2BApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends B2BApplicationFindFirstArgs>(args?: SelectSubset<T, B2BApplicationFindFirstArgs<ExtArgs>>): Prisma__B2BApplicationClient<$Result.GetResult<Prisma.$B2BApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first B2BApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {B2BApplicationFindFirstOrThrowArgs} args - Arguments to find a B2BApplication
     * @example
     * // Get one B2BApplication
     * const b2BApplication = await prisma.b2BApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends B2BApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, B2BApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__B2BApplicationClient<$Result.GetResult<Prisma.$B2BApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more B2BApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {B2BApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all B2BApplications
     * const b2BApplications = await prisma.b2BApplication.findMany()
     * 
     * // Get first 10 B2BApplications
     * const b2BApplications = await prisma.b2BApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const b2BApplicationWithIdOnly = await prisma.b2BApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends B2BApplicationFindManyArgs>(args?: SelectSubset<T, B2BApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$B2BApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a B2BApplication.
     * @param {B2BApplicationCreateArgs} args - Arguments to create a B2BApplication.
     * @example
     * // Create one B2BApplication
     * const B2BApplication = await prisma.b2BApplication.create({
     *   data: {
     *     // ... data to create a B2BApplication
     *   }
     * })
     * 
     */
    create<T extends B2BApplicationCreateArgs>(args: SelectSubset<T, B2BApplicationCreateArgs<ExtArgs>>): Prisma__B2BApplicationClient<$Result.GetResult<Prisma.$B2BApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many B2BApplications.
     * @param {B2BApplicationCreateManyArgs} args - Arguments to create many B2BApplications.
     * @example
     * // Create many B2BApplications
     * const b2BApplication = await prisma.b2BApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends B2BApplicationCreateManyArgs>(args?: SelectSubset<T, B2BApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many B2BApplications and returns the data saved in the database.
     * @param {B2BApplicationCreateManyAndReturnArgs} args - Arguments to create many B2BApplications.
     * @example
     * // Create many B2BApplications
     * const b2BApplication = await prisma.b2BApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many B2BApplications and only return the `id`
     * const b2BApplicationWithIdOnly = await prisma.b2BApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends B2BApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, B2BApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$B2BApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a B2BApplication.
     * @param {B2BApplicationDeleteArgs} args - Arguments to delete one B2BApplication.
     * @example
     * // Delete one B2BApplication
     * const B2BApplication = await prisma.b2BApplication.delete({
     *   where: {
     *     // ... filter to delete one B2BApplication
     *   }
     * })
     * 
     */
    delete<T extends B2BApplicationDeleteArgs>(args: SelectSubset<T, B2BApplicationDeleteArgs<ExtArgs>>): Prisma__B2BApplicationClient<$Result.GetResult<Prisma.$B2BApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one B2BApplication.
     * @param {B2BApplicationUpdateArgs} args - Arguments to update one B2BApplication.
     * @example
     * // Update one B2BApplication
     * const b2BApplication = await prisma.b2BApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends B2BApplicationUpdateArgs>(args: SelectSubset<T, B2BApplicationUpdateArgs<ExtArgs>>): Prisma__B2BApplicationClient<$Result.GetResult<Prisma.$B2BApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more B2BApplications.
     * @param {B2BApplicationDeleteManyArgs} args - Arguments to filter B2BApplications to delete.
     * @example
     * // Delete a few B2BApplications
     * const { count } = await prisma.b2BApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends B2BApplicationDeleteManyArgs>(args?: SelectSubset<T, B2BApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more B2BApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {B2BApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many B2BApplications
     * const b2BApplication = await prisma.b2BApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends B2BApplicationUpdateManyArgs>(args: SelectSubset<T, B2BApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more B2BApplications and returns the data updated in the database.
     * @param {B2BApplicationUpdateManyAndReturnArgs} args - Arguments to update many B2BApplications.
     * @example
     * // Update many B2BApplications
     * const b2BApplication = await prisma.b2BApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more B2BApplications and only return the `id`
     * const b2BApplicationWithIdOnly = await prisma.b2BApplication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends B2BApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, B2BApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$B2BApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one B2BApplication.
     * @param {B2BApplicationUpsertArgs} args - Arguments to update or create a B2BApplication.
     * @example
     * // Update or create a B2BApplication
     * const b2BApplication = await prisma.b2BApplication.upsert({
     *   create: {
     *     // ... data to create a B2BApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the B2BApplication we want to update
     *   }
     * })
     */
    upsert<T extends B2BApplicationUpsertArgs>(args: SelectSubset<T, B2BApplicationUpsertArgs<ExtArgs>>): Prisma__B2BApplicationClient<$Result.GetResult<Prisma.$B2BApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of B2BApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {B2BApplicationCountArgs} args - Arguments to filter B2BApplications to count.
     * @example
     * // Count the number of B2BApplications
     * const count = await prisma.b2BApplication.count({
     *   where: {
     *     // ... the filter for the B2BApplications we want to count
     *   }
     * })
    **/
    count<T extends B2BApplicationCountArgs>(
      args?: Subset<T, B2BApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], B2BApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a B2BApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {B2BApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends B2BApplicationAggregateArgs>(args: Subset<T, B2BApplicationAggregateArgs>): Prisma.PrismaPromise<GetB2BApplicationAggregateType<T>>

    /**
     * Group by B2BApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {B2BApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends B2BApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: B2BApplicationGroupByArgs['orderBy'] }
        : { orderBy?: B2BApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, B2BApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetB2BApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the B2BApplication model
   */
  readonly fields: B2BApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for B2BApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__B2BApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the B2BApplication model
   */
  interface B2BApplicationFieldRefs {
    readonly id: FieldRef<"B2BApplication", 'String'>
    readonly shopifyCustomerId: FieldRef<"B2BApplication", 'String'>
    readonly email: FieldRef<"B2BApplication", 'String'>
    readonly contactName: FieldRef<"B2BApplication", 'String'>
    readonly businessName: FieldRef<"B2BApplication", 'String'>
    readonly taxId: FieldRef<"B2BApplication", 'String'>
    readonly message: FieldRef<"B2BApplication", 'String'>
    readonly status: FieldRef<"B2BApplication", 'B2BApplicationStatus'>
    readonly reviewedById: FieldRef<"B2BApplication", 'String'>
    readonly reviewedAt: FieldRef<"B2BApplication", 'DateTime'>
    readonly rejectionReason: FieldRef<"B2BApplication", 'String'>
    readonly createdAt: FieldRef<"B2BApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"B2BApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * B2BApplication findUnique
   */
  export type B2BApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the B2BApplication
     */
    select?: B2BApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the B2BApplication
     */
    omit?: B2BApplicationOmit<ExtArgs> | null
    /**
     * Filter, which B2BApplication to fetch.
     */
    where: B2BApplicationWhereUniqueInput
  }

  /**
   * B2BApplication findUniqueOrThrow
   */
  export type B2BApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the B2BApplication
     */
    select?: B2BApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the B2BApplication
     */
    omit?: B2BApplicationOmit<ExtArgs> | null
    /**
     * Filter, which B2BApplication to fetch.
     */
    where: B2BApplicationWhereUniqueInput
  }

  /**
   * B2BApplication findFirst
   */
  export type B2BApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the B2BApplication
     */
    select?: B2BApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the B2BApplication
     */
    omit?: B2BApplicationOmit<ExtArgs> | null
    /**
     * Filter, which B2BApplication to fetch.
     */
    where?: B2BApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of B2BApplications to fetch.
     */
    orderBy?: B2BApplicationOrderByWithRelationInput | B2BApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for B2BApplications.
     */
    cursor?: B2BApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` B2BApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` B2BApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of B2BApplications.
     */
    distinct?: B2BApplicationScalarFieldEnum | B2BApplicationScalarFieldEnum[]
  }

  /**
   * B2BApplication findFirstOrThrow
   */
  export type B2BApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the B2BApplication
     */
    select?: B2BApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the B2BApplication
     */
    omit?: B2BApplicationOmit<ExtArgs> | null
    /**
     * Filter, which B2BApplication to fetch.
     */
    where?: B2BApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of B2BApplications to fetch.
     */
    orderBy?: B2BApplicationOrderByWithRelationInput | B2BApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for B2BApplications.
     */
    cursor?: B2BApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` B2BApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` B2BApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of B2BApplications.
     */
    distinct?: B2BApplicationScalarFieldEnum | B2BApplicationScalarFieldEnum[]
  }

  /**
   * B2BApplication findMany
   */
  export type B2BApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the B2BApplication
     */
    select?: B2BApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the B2BApplication
     */
    omit?: B2BApplicationOmit<ExtArgs> | null
    /**
     * Filter, which B2BApplications to fetch.
     */
    where?: B2BApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of B2BApplications to fetch.
     */
    orderBy?: B2BApplicationOrderByWithRelationInput | B2BApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing B2BApplications.
     */
    cursor?: B2BApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` B2BApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` B2BApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of B2BApplications.
     */
    distinct?: B2BApplicationScalarFieldEnum | B2BApplicationScalarFieldEnum[]
  }

  /**
   * B2BApplication create
   */
  export type B2BApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the B2BApplication
     */
    select?: B2BApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the B2BApplication
     */
    omit?: B2BApplicationOmit<ExtArgs> | null
    /**
     * The data needed to create a B2BApplication.
     */
    data: XOR<B2BApplicationCreateInput, B2BApplicationUncheckedCreateInput>
  }

  /**
   * B2BApplication createMany
   */
  export type B2BApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many B2BApplications.
     */
    data: B2BApplicationCreateManyInput | B2BApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * B2BApplication createManyAndReturn
   */
  export type B2BApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the B2BApplication
     */
    select?: B2BApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the B2BApplication
     */
    omit?: B2BApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many B2BApplications.
     */
    data: B2BApplicationCreateManyInput | B2BApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * B2BApplication update
   */
  export type B2BApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the B2BApplication
     */
    select?: B2BApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the B2BApplication
     */
    omit?: B2BApplicationOmit<ExtArgs> | null
    /**
     * The data needed to update a B2BApplication.
     */
    data: XOR<B2BApplicationUpdateInput, B2BApplicationUncheckedUpdateInput>
    /**
     * Choose, which B2BApplication to update.
     */
    where: B2BApplicationWhereUniqueInput
  }

  /**
   * B2BApplication updateMany
   */
  export type B2BApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update B2BApplications.
     */
    data: XOR<B2BApplicationUpdateManyMutationInput, B2BApplicationUncheckedUpdateManyInput>
    /**
     * Filter which B2BApplications to update
     */
    where?: B2BApplicationWhereInput
    /**
     * Limit how many B2BApplications to update.
     */
    limit?: number
  }

  /**
   * B2BApplication updateManyAndReturn
   */
  export type B2BApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the B2BApplication
     */
    select?: B2BApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the B2BApplication
     */
    omit?: B2BApplicationOmit<ExtArgs> | null
    /**
     * The data used to update B2BApplications.
     */
    data: XOR<B2BApplicationUpdateManyMutationInput, B2BApplicationUncheckedUpdateManyInput>
    /**
     * Filter which B2BApplications to update
     */
    where?: B2BApplicationWhereInput
    /**
     * Limit how many B2BApplications to update.
     */
    limit?: number
  }

  /**
   * B2BApplication upsert
   */
  export type B2BApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the B2BApplication
     */
    select?: B2BApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the B2BApplication
     */
    omit?: B2BApplicationOmit<ExtArgs> | null
    /**
     * The filter to search for the B2BApplication to update in case it exists.
     */
    where: B2BApplicationWhereUniqueInput
    /**
     * In case the B2BApplication found by the `where` argument doesn't exist, create a new B2BApplication with this data.
     */
    create: XOR<B2BApplicationCreateInput, B2BApplicationUncheckedCreateInput>
    /**
     * In case the B2BApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<B2BApplicationUpdateInput, B2BApplicationUncheckedUpdateInput>
  }

  /**
   * B2BApplication delete
   */
  export type B2BApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the B2BApplication
     */
    select?: B2BApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the B2BApplication
     */
    omit?: B2BApplicationOmit<ExtArgs> | null
    /**
     * Filter which B2BApplication to delete.
     */
    where: B2BApplicationWhereUniqueInput
  }

  /**
   * B2BApplication deleteMany
   */
  export type B2BApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which B2BApplications to delete
     */
    where?: B2BApplicationWhereInput
    /**
     * Limit how many B2BApplications to delete.
     */
    limit?: number
  }

  /**
   * B2BApplication without action
   */
  export type B2BApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the B2BApplication
     */
    select?: B2BApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the B2BApplication
     */
    omit?: B2BApplicationOmit<ExtArgs> | null
  }


  /**
   * Model Influencer
   */

  export type AggregateInfluencer = {
    _count: InfluencerCountAggregateOutputType | null
    _min: InfluencerMinAggregateOutputType | null
    _max: InfluencerMaxAggregateOutputType | null
  }

  export type InfluencerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InfluencerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InfluencerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InfluencerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InfluencerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InfluencerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InfluencerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Influencer to aggregate.
     */
    where?: InfluencerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Influencers to fetch.
     */
    orderBy?: InfluencerOrderByWithRelationInput | InfluencerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InfluencerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Influencers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Influencers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Influencers
    **/
    _count?: true | InfluencerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InfluencerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InfluencerMaxAggregateInputType
  }

  export type GetInfluencerAggregateType<T extends InfluencerAggregateArgs> = {
        [P in keyof T & keyof AggregateInfluencer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInfluencer[P]>
      : GetScalarType<T[P], AggregateInfluencer[P]>
  }




  export type InfluencerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InfluencerWhereInput
    orderBy?: InfluencerOrderByWithAggregationInput | InfluencerOrderByWithAggregationInput[]
    by: InfluencerScalarFieldEnum[] | InfluencerScalarFieldEnum
    having?: InfluencerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InfluencerCountAggregateInputType | true
    _min?: InfluencerMinAggregateInputType
    _max?: InfluencerMaxAggregateInputType
  }

  export type InfluencerGroupByOutputType = {
    id: string
    name: string
    email: string | null
    createdAt: Date
    updatedAt: Date
    _count: InfluencerCountAggregateOutputType | null
    _min: InfluencerMinAggregateOutputType | null
    _max: InfluencerMaxAggregateOutputType | null
  }

  type GetInfluencerGroupByPayload<T extends InfluencerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InfluencerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InfluencerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InfluencerGroupByOutputType[P]>
            : GetScalarType<T[P], InfluencerGroupByOutputType[P]>
        }
      >
    >


  export type InfluencerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    codes?: boolean | Influencer$codesArgs<ExtArgs>
    _count?: boolean | InfluencerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["influencer"]>

  export type InfluencerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["influencer"]>

  export type InfluencerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["influencer"]>

  export type InfluencerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InfluencerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["influencer"]>
  export type InfluencerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    codes?: boolean | Influencer$codesArgs<ExtArgs>
    _count?: boolean | InfluencerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InfluencerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InfluencerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InfluencerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Influencer"
    objects: {
      codes: Prisma.$InfluencerCodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["influencer"]>
    composites: {}
  }

  type InfluencerGetPayload<S extends boolean | null | undefined | InfluencerDefaultArgs> = $Result.GetResult<Prisma.$InfluencerPayload, S>

  type InfluencerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InfluencerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InfluencerCountAggregateInputType | true
    }

  export interface InfluencerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Influencer'], meta: { name: 'Influencer' } }
    /**
     * Find zero or one Influencer that matches the filter.
     * @param {InfluencerFindUniqueArgs} args - Arguments to find a Influencer
     * @example
     * // Get one Influencer
     * const influencer = await prisma.influencer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InfluencerFindUniqueArgs>(args: SelectSubset<T, InfluencerFindUniqueArgs<ExtArgs>>): Prisma__InfluencerClient<$Result.GetResult<Prisma.$InfluencerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Influencer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InfluencerFindUniqueOrThrowArgs} args - Arguments to find a Influencer
     * @example
     * // Get one Influencer
     * const influencer = await prisma.influencer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InfluencerFindUniqueOrThrowArgs>(args: SelectSubset<T, InfluencerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InfluencerClient<$Result.GetResult<Prisma.$InfluencerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Influencer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerFindFirstArgs} args - Arguments to find a Influencer
     * @example
     * // Get one Influencer
     * const influencer = await prisma.influencer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InfluencerFindFirstArgs>(args?: SelectSubset<T, InfluencerFindFirstArgs<ExtArgs>>): Prisma__InfluencerClient<$Result.GetResult<Prisma.$InfluencerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Influencer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerFindFirstOrThrowArgs} args - Arguments to find a Influencer
     * @example
     * // Get one Influencer
     * const influencer = await prisma.influencer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InfluencerFindFirstOrThrowArgs>(args?: SelectSubset<T, InfluencerFindFirstOrThrowArgs<ExtArgs>>): Prisma__InfluencerClient<$Result.GetResult<Prisma.$InfluencerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Influencers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Influencers
     * const influencers = await prisma.influencer.findMany()
     * 
     * // Get first 10 Influencers
     * const influencers = await prisma.influencer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const influencerWithIdOnly = await prisma.influencer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InfluencerFindManyArgs>(args?: SelectSubset<T, InfluencerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfluencerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Influencer.
     * @param {InfluencerCreateArgs} args - Arguments to create a Influencer.
     * @example
     * // Create one Influencer
     * const Influencer = await prisma.influencer.create({
     *   data: {
     *     // ... data to create a Influencer
     *   }
     * })
     * 
     */
    create<T extends InfluencerCreateArgs>(args: SelectSubset<T, InfluencerCreateArgs<ExtArgs>>): Prisma__InfluencerClient<$Result.GetResult<Prisma.$InfluencerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Influencers.
     * @param {InfluencerCreateManyArgs} args - Arguments to create many Influencers.
     * @example
     * // Create many Influencers
     * const influencer = await prisma.influencer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InfluencerCreateManyArgs>(args?: SelectSubset<T, InfluencerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Influencers and returns the data saved in the database.
     * @param {InfluencerCreateManyAndReturnArgs} args - Arguments to create many Influencers.
     * @example
     * // Create many Influencers
     * const influencer = await prisma.influencer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Influencers and only return the `id`
     * const influencerWithIdOnly = await prisma.influencer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InfluencerCreateManyAndReturnArgs>(args?: SelectSubset<T, InfluencerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfluencerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Influencer.
     * @param {InfluencerDeleteArgs} args - Arguments to delete one Influencer.
     * @example
     * // Delete one Influencer
     * const Influencer = await prisma.influencer.delete({
     *   where: {
     *     // ... filter to delete one Influencer
     *   }
     * })
     * 
     */
    delete<T extends InfluencerDeleteArgs>(args: SelectSubset<T, InfluencerDeleteArgs<ExtArgs>>): Prisma__InfluencerClient<$Result.GetResult<Prisma.$InfluencerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Influencer.
     * @param {InfluencerUpdateArgs} args - Arguments to update one Influencer.
     * @example
     * // Update one Influencer
     * const influencer = await prisma.influencer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InfluencerUpdateArgs>(args: SelectSubset<T, InfluencerUpdateArgs<ExtArgs>>): Prisma__InfluencerClient<$Result.GetResult<Prisma.$InfluencerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Influencers.
     * @param {InfluencerDeleteManyArgs} args - Arguments to filter Influencers to delete.
     * @example
     * // Delete a few Influencers
     * const { count } = await prisma.influencer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InfluencerDeleteManyArgs>(args?: SelectSubset<T, InfluencerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Influencers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Influencers
     * const influencer = await prisma.influencer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InfluencerUpdateManyArgs>(args: SelectSubset<T, InfluencerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Influencers and returns the data updated in the database.
     * @param {InfluencerUpdateManyAndReturnArgs} args - Arguments to update many Influencers.
     * @example
     * // Update many Influencers
     * const influencer = await prisma.influencer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Influencers and only return the `id`
     * const influencerWithIdOnly = await prisma.influencer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InfluencerUpdateManyAndReturnArgs>(args: SelectSubset<T, InfluencerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfluencerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Influencer.
     * @param {InfluencerUpsertArgs} args - Arguments to update or create a Influencer.
     * @example
     * // Update or create a Influencer
     * const influencer = await prisma.influencer.upsert({
     *   create: {
     *     // ... data to create a Influencer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Influencer we want to update
     *   }
     * })
     */
    upsert<T extends InfluencerUpsertArgs>(args: SelectSubset<T, InfluencerUpsertArgs<ExtArgs>>): Prisma__InfluencerClient<$Result.GetResult<Prisma.$InfluencerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Influencers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerCountArgs} args - Arguments to filter Influencers to count.
     * @example
     * // Count the number of Influencers
     * const count = await prisma.influencer.count({
     *   where: {
     *     // ... the filter for the Influencers we want to count
     *   }
     * })
    **/
    count<T extends InfluencerCountArgs>(
      args?: Subset<T, InfluencerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InfluencerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Influencer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InfluencerAggregateArgs>(args: Subset<T, InfluencerAggregateArgs>): Prisma.PrismaPromise<GetInfluencerAggregateType<T>>

    /**
     * Group by Influencer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InfluencerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InfluencerGroupByArgs['orderBy'] }
        : { orderBy?: InfluencerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InfluencerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInfluencerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Influencer model
   */
  readonly fields: InfluencerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Influencer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InfluencerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    codes<T extends Influencer$codesArgs<ExtArgs> = {}>(args?: Subset<T, Influencer$codesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfluencerCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Influencer model
   */
  interface InfluencerFieldRefs {
    readonly id: FieldRef<"Influencer", 'String'>
    readonly name: FieldRef<"Influencer", 'String'>
    readonly email: FieldRef<"Influencer", 'String'>
    readonly createdAt: FieldRef<"Influencer", 'DateTime'>
    readonly updatedAt: FieldRef<"Influencer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Influencer findUnique
   */
  export type InfluencerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencer
     */
    select?: InfluencerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Influencer
     */
    omit?: InfluencerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerInclude<ExtArgs> | null
    /**
     * Filter, which Influencer to fetch.
     */
    where: InfluencerWhereUniqueInput
  }

  /**
   * Influencer findUniqueOrThrow
   */
  export type InfluencerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencer
     */
    select?: InfluencerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Influencer
     */
    omit?: InfluencerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerInclude<ExtArgs> | null
    /**
     * Filter, which Influencer to fetch.
     */
    where: InfluencerWhereUniqueInput
  }

  /**
   * Influencer findFirst
   */
  export type InfluencerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencer
     */
    select?: InfluencerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Influencer
     */
    omit?: InfluencerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerInclude<ExtArgs> | null
    /**
     * Filter, which Influencer to fetch.
     */
    where?: InfluencerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Influencers to fetch.
     */
    orderBy?: InfluencerOrderByWithRelationInput | InfluencerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Influencers.
     */
    cursor?: InfluencerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Influencers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Influencers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Influencers.
     */
    distinct?: InfluencerScalarFieldEnum | InfluencerScalarFieldEnum[]
  }

  /**
   * Influencer findFirstOrThrow
   */
  export type InfluencerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencer
     */
    select?: InfluencerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Influencer
     */
    omit?: InfluencerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerInclude<ExtArgs> | null
    /**
     * Filter, which Influencer to fetch.
     */
    where?: InfluencerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Influencers to fetch.
     */
    orderBy?: InfluencerOrderByWithRelationInput | InfluencerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Influencers.
     */
    cursor?: InfluencerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Influencers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Influencers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Influencers.
     */
    distinct?: InfluencerScalarFieldEnum | InfluencerScalarFieldEnum[]
  }

  /**
   * Influencer findMany
   */
  export type InfluencerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencer
     */
    select?: InfluencerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Influencer
     */
    omit?: InfluencerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerInclude<ExtArgs> | null
    /**
     * Filter, which Influencers to fetch.
     */
    where?: InfluencerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Influencers to fetch.
     */
    orderBy?: InfluencerOrderByWithRelationInput | InfluencerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Influencers.
     */
    cursor?: InfluencerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Influencers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Influencers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Influencers.
     */
    distinct?: InfluencerScalarFieldEnum | InfluencerScalarFieldEnum[]
  }

  /**
   * Influencer create
   */
  export type InfluencerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencer
     */
    select?: InfluencerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Influencer
     */
    omit?: InfluencerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerInclude<ExtArgs> | null
    /**
     * The data needed to create a Influencer.
     */
    data: XOR<InfluencerCreateInput, InfluencerUncheckedCreateInput>
  }

  /**
   * Influencer createMany
   */
  export type InfluencerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Influencers.
     */
    data: InfluencerCreateManyInput | InfluencerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Influencer createManyAndReturn
   */
  export type InfluencerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencer
     */
    select?: InfluencerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Influencer
     */
    omit?: InfluencerOmit<ExtArgs> | null
    /**
     * The data used to create many Influencers.
     */
    data: InfluencerCreateManyInput | InfluencerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Influencer update
   */
  export type InfluencerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencer
     */
    select?: InfluencerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Influencer
     */
    omit?: InfluencerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerInclude<ExtArgs> | null
    /**
     * The data needed to update a Influencer.
     */
    data: XOR<InfluencerUpdateInput, InfluencerUncheckedUpdateInput>
    /**
     * Choose, which Influencer to update.
     */
    where: InfluencerWhereUniqueInput
  }

  /**
   * Influencer updateMany
   */
  export type InfluencerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Influencers.
     */
    data: XOR<InfluencerUpdateManyMutationInput, InfluencerUncheckedUpdateManyInput>
    /**
     * Filter which Influencers to update
     */
    where?: InfluencerWhereInput
    /**
     * Limit how many Influencers to update.
     */
    limit?: number
  }

  /**
   * Influencer updateManyAndReturn
   */
  export type InfluencerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencer
     */
    select?: InfluencerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Influencer
     */
    omit?: InfluencerOmit<ExtArgs> | null
    /**
     * The data used to update Influencers.
     */
    data: XOR<InfluencerUpdateManyMutationInput, InfluencerUncheckedUpdateManyInput>
    /**
     * Filter which Influencers to update
     */
    where?: InfluencerWhereInput
    /**
     * Limit how many Influencers to update.
     */
    limit?: number
  }

  /**
   * Influencer upsert
   */
  export type InfluencerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencer
     */
    select?: InfluencerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Influencer
     */
    omit?: InfluencerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerInclude<ExtArgs> | null
    /**
     * The filter to search for the Influencer to update in case it exists.
     */
    where: InfluencerWhereUniqueInput
    /**
     * In case the Influencer found by the `where` argument doesn't exist, create a new Influencer with this data.
     */
    create: XOR<InfluencerCreateInput, InfluencerUncheckedCreateInput>
    /**
     * In case the Influencer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InfluencerUpdateInput, InfluencerUncheckedUpdateInput>
  }

  /**
   * Influencer delete
   */
  export type InfluencerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencer
     */
    select?: InfluencerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Influencer
     */
    omit?: InfluencerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerInclude<ExtArgs> | null
    /**
     * Filter which Influencer to delete.
     */
    where: InfluencerWhereUniqueInput
  }

  /**
   * Influencer deleteMany
   */
  export type InfluencerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Influencers to delete
     */
    where?: InfluencerWhereInput
    /**
     * Limit how many Influencers to delete.
     */
    limit?: number
  }

  /**
   * Influencer.codes
   */
  export type Influencer$codesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerCode
     */
    select?: InfluencerCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfluencerCode
     */
    omit?: InfluencerCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerCodeInclude<ExtArgs> | null
    where?: InfluencerCodeWhereInput
    orderBy?: InfluencerCodeOrderByWithRelationInput | InfluencerCodeOrderByWithRelationInput[]
    cursor?: InfluencerCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InfluencerCodeScalarFieldEnum | InfluencerCodeScalarFieldEnum[]
  }

  /**
   * Influencer without action
   */
  export type InfluencerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencer
     */
    select?: InfluencerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Influencer
     */
    omit?: InfluencerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerInclude<ExtArgs> | null
  }


  /**
   * Model InfluencerCode
   */

  export type AggregateInfluencerCode = {
    _count: InfluencerCodeCountAggregateOutputType | null
    _avg: InfluencerCodeAvgAggregateOutputType | null
    _sum: InfluencerCodeSumAggregateOutputType | null
    _min: InfluencerCodeMinAggregateOutputType | null
    _max: InfluencerCodeMaxAggregateOutputType | null
  }

  export type InfluencerCodeAvgAggregateOutputType = {
    commissionRate: Decimal | null
  }

  export type InfluencerCodeSumAggregateOutputType = {
    commissionRate: Decimal | null
  }

  export type InfluencerCodeMinAggregateOutputType = {
    id: string | null
    influencerId: string | null
    code: string | null
    commissionRate: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InfluencerCodeMaxAggregateOutputType = {
    id: string | null
    influencerId: string | null
    code: string | null
    commissionRate: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InfluencerCodeCountAggregateOutputType = {
    id: number
    influencerId: number
    code: number
    commissionRate: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InfluencerCodeAvgAggregateInputType = {
    commissionRate?: true
  }

  export type InfluencerCodeSumAggregateInputType = {
    commissionRate?: true
  }

  export type InfluencerCodeMinAggregateInputType = {
    id?: true
    influencerId?: true
    code?: true
    commissionRate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InfluencerCodeMaxAggregateInputType = {
    id?: true
    influencerId?: true
    code?: true
    commissionRate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InfluencerCodeCountAggregateInputType = {
    id?: true
    influencerId?: true
    code?: true
    commissionRate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InfluencerCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InfluencerCode to aggregate.
     */
    where?: InfluencerCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfluencerCodes to fetch.
     */
    orderBy?: InfluencerCodeOrderByWithRelationInput | InfluencerCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InfluencerCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfluencerCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfluencerCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InfluencerCodes
    **/
    _count?: true | InfluencerCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InfluencerCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InfluencerCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InfluencerCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InfluencerCodeMaxAggregateInputType
  }

  export type GetInfluencerCodeAggregateType<T extends InfluencerCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateInfluencerCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInfluencerCode[P]>
      : GetScalarType<T[P], AggregateInfluencerCode[P]>
  }




  export type InfluencerCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InfluencerCodeWhereInput
    orderBy?: InfluencerCodeOrderByWithAggregationInput | InfluencerCodeOrderByWithAggregationInput[]
    by: InfluencerCodeScalarFieldEnum[] | InfluencerCodeScalarFieldEnum
    having?: InfluencerCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InfluencerCodeCountAggregateInputType | true
    _avg?: InfluencerCodeAvgAggregateInputType
    _sum?: InfluencerCodeSumAggregateInputType
    _min?: InfluencerCodeMinAggregateInputType
    _max?: InfluencerCodeMaxAggregateInputType
  }

  export type InfluencerCodeGroupByOutputType = {
    id: string
    influencerId: string
    code: string
    commissionRate: Decimal | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: InfluencerCodeCountAggregateOutputType | null
    _avg: InfluencerCodeAvgAggregateOutputType | null
    _sum: InfluencerCodeSumAggregateOutputType | null
    _min: InfluencerCodeMinAggregateOutputType | null
    _max: InfluencerCodeMaxAggregateOutputType | null
  }

  type GetInfluencerCodeGroupByPayload<T extends InfluencerCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InfluencerCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InfluencerCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InfluencerCodeGroupByOutputType[P]>
            : GetScalarType<T[P], InfluencerCodeGroupByOutputType[P]>
        }
      >
    >


  export type InfluencerCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    influencerId?: boolean
    code?: boolean
    commissionRate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    influencer?: boolean | InfluencerDefaultArgs<ExtArgs>
    attributions?: boolean | InfluencerCode$attributionsArgs<ExtArgs>
    _count?: boolean | InfluencerCodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["influencerCode"]>

  export type InfluencerCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    influencerId?: boolean
    code?: boolean
    commissionRate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    influencer?: boolean | InfluencerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["influencerCode"]>

  export type InfluencerCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    influencerId?: boolean
    code?: boolean
    commissionRate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    influencer?: boolean | InfluencerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["influencerCode"]>

  export type InfluencerCodeSelectScalar = {
    id?: boolean
    influencerId?: boolean
    code?: boolean
    commissionRate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InfluencerCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "influencerId" | "code" | "commissionRate" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["influencerCode"]>
  export type InfluencerCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    influencer?: boolean | InfluencerDefaultArgs<ExtArgs>
    attributions?: boolean | InfluencerCode$attributionsArgs<ExtArgs>
    _count?: boolean | InfluencerCodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InfluencerCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    influencer?: boolean | InfluencerDefaultArgs<ExtArgs>
  }
  export type InfluencerCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    influencer?: boolean | InfluencerDefaultArgs<ExtArgs>
  }

  export type $InfluencerCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InfluencerCode"
    objects: {
      influencer: Prisma.$InfluencerPayload<ExtArgs>
      attributions: Prisma.$OrderAttributionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      influencerId: string
      code: string
      commissionRate: Prisma.Decimal | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["influencerCode"]>
    composites: {}
  }

  type InfluencerCodeGetPayload<S extends boolean | null | undefined | InfluencerCodeDefaultArgs> = $Result.GetResult<Prisma.$InfluencerCodePayload, S>

  type InfluencerCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InfluencerCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InfluencerCodeCountAggregateInputType | true
    }

  export interface InfluencerCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InfluencerCode'], meta: { name: 'InfluencerCode' } }
    /**
     * Find zero or one InfluencerCode that matches the filter.
     * @param {InfluencerCodeFindUniqueArgs} args - Arguments to find a InfluencerCode
     * @example
     * // Get one InfluencerCode
     * const influencerCode = await prisma.influencerCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InfluencerCodeFindUniqueArgs>(args: SelectSubset<T, InfluencerCodeFindUniqueArgs<ExtArgs>>): Prisma__InfluencerCodeClient<$Result.GetResult<Prisma.$InfluencerCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InfluencerCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InfluencerCodeFindUniqueOrThrowArgs} args - Arguments to find a InfluencerCode
     * @example
     * // Get one InfluencerCode
     * const influencerCode = await prisma.influencerCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InfluencerCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, InfluencerCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InfluencerCodeClient<$Result.GetResult<Prisma.$InfluencerCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InfluencerCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerCodeFindFirstArgs} args - Arguments to find a InfluencerCode
     * @example
     * // Get one InfluencerCode
     * const influencerCode = await prisma.influencerCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InfluencerCodeFindFirstArgs>(args?: SelectSubset<T, InfluencerCodeFindFirstArgs<ExtArgs>>): Prisma__InfluencerCodeClient<$Result.GetResult<Prisma.$InfluencerCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InfluencerCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerCodeFindFirstOrThrowArgs} args - Arguments to find a InfluencerCode
     * @example
     * // Get one InfluencerCode
     * const influencerCode = await prisma.influencerCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InfluencerCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, InfluencerCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__InfluencerCodeClient<$Result.GetResult<Prisma.$InfluencerCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InfluencerCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InfluencerCodes
     * const influencerCodes = await prisma.influencerCode.findMany()
     * 
     * // Get first 10 InfluencerCodes
     * const influencerCodes = await prisma.influencerCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const influencerCodeWithIdOnly = await prisma.influencerCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InfluencerCodeFindManyArgs>(args?: SelectSubset<T, InfluencerCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfluencerCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InfluencerCode.
     * @param {InfluencerCodeCreateArgs} args - Arguments to create a InfluencerCode.
     * @example
     * // Create one InfluencerCode
     * const InfluencerCode = await prisma.influencerCode.create({
     *   data: {
     *     // ... data to create a InfluencerCode
     *   }
     * })
     * 
     */
    create<T extends InfluencerCodeCreateArgs>(args: SelectSubset<T, InfluencerCodeCreateArgs<ExtArgs>>): Prisma__InfluencerCodeClient<$Result.GetResult<Prisma.$InfluencerCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InfluencerCodes.
     * @param {InfluencerCodeCreateManyArgs} args - Arguments to create many InfluencerCodes.
     * @example
     * // Create many InfluencerCodes
     * const influencerCode = await prisma.influencerCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InfluencerCodeCreateManyArgs>(args?: SelectSubset<T, InfluencerCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InfluencerCodes and returns the data saved in the database.
     * @param {InfluencerCodeCreateManyAndReturnArgs} args - Arguments to create many InfluencerCodes.
     * @example
     * // Create many InfluencerCodes
     * const influencerCode = await prisma.influencerCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InfluencerCodes and only return the `id`
     * const influencerCodeWithIdOnly = await prisma.influencerCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InfluencerCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, InfluencerCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfluencerCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InfluencerCode.
     * @param {InfluencerCodeDeleteArgs} args - Arguments to delete one InfluencerCode.
     * @example
     * // Delete one InfluencerCode
     * const InfluencerCode = await prisma.influencerCode.delete({
     *   where: {
     *     // ... filter to delete one InfluencerCode
     *   }
     * })
     * 
     */
    delete<T extends InfluencerCodeDeleteArgs>(args: SelectSubset<T, InfluencerCodeDeleteArgs<ExtArgs>>): Prisma__InfluencerCodeClient<$Result.GetResult<Prisma.$InfluencerCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InfluencerCode.
     * @param {InfluencerCodeUpdateArgs} args - Arguments to update one InfluencerCode.
     * @example
     * // Update one InfluencerCode
     * const influencerCode = await prisma.influencerCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InfluencerCodeUpdateArgs>(args: SelectSubset<T, InfluencerCodeUpdateArgs<ExtArgs>>): Prisma__InfluencerCodeClient<$Result.GetResult<Prisma.$InfluencerCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InfluencerCodes.
     * @param {InfluencerCodeDeleteManyArgs} args - Arguments to filter InfluencerCodes to delete.
     * @example
     * // Delete a few InfluencerCodes
     * const { count } = await prisma.influencerCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InfluencerCodeDeleteManyArgs>(args?: SelectSubset<T, InfluencerCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InfluencerCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InfluencerCodes
     * const influencerCode = await prisma.influencerCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InfluencerCodeUpdateManyArgs>(args: SelectSubset<T, InfluencerCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InfluencerCodes and returns the data updated in the database.
     * @param {InfluencerCodeUpdateManyAndReturnArgs} args - Arguments to update many InfluencerCodes.
     * @example
     * // Update many InfluencerCodes
     * const influencerCode = await prisma.influencerCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InfluencerCodes and only return the `id`
     * const influencerCodeWithIdOnly = await prisma.influencerCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InfluencerCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, InfluencerCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfluencerCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InfluencerCode.
     * @param {InfluencerCodeUpsertArgs} args - Arguments to update or create a InfluencerCode.
     * @example
     * // Update or create a InfluencerCode
     * const influencerCode = await prisma.influencerCode.upsert({
     *   create: {
     *     // ... data to create a InfluencerCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InfluencerCode we want to update
     *   }
     * })
     */
    upsert<T extends InfluencerCodeUpsertArgs>(args: SelectSubset<T, InfluencerCodeUpsertArgs<ExtArgs>>): Prisma__InfluencerCodeClient<$Result.GetResult<Prisma.$InfluencerCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InfluencerCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerCodeCountArgs} args - Arguments to filter InfluencerCodes to count.
     * @example
     * // Count the number of InfluencerCodes
     * const count = await prisma.influencerCode.count({
     *   where: {
     *     // ... the filter for the InfluencerCodes we want to count
     *   }
     * })
    **/
    count<T extends InfluencerCodeCountArgs>(
      args?: Subset<T, InfluencerCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InfluencerCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InfluencerCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InfluencerCodeAggregateArgs>(args: Subset<T, InfluencerCodeAggregateArgs>): Prisma.PrismaPromise<GetInfluencerCodeAggregateType<T>>

    /**
     * Group by InfluencerCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InfluencerCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InfluencerCodeGroupByArgs['orderBy'] }
        : { orderBy?: InfluencerCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InfluencerCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInfluencerCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InfluencerCode model
   */
  readonly fields: InfluencerCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InfluencerCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InfluencerCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    influencer<T extends InfluencerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InfluencerDefaultArgs<ExtArgs>>): Prisma__InfluencerClient<$Result.GetResult<Prisma.$InfluencerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attributions<T extends InfluencerCode$attributionsArgs<ExtArgs> = {}>(args?: Subset<T, InfluencerCode$attributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderAttributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InfluencerCode model
   */
  interface InfluencerCodeFieldRefs {
    readonly id: FieldRef<"InfluencerCode", 'String'>
    readonly influencerId: FieldRef<"InfluencerCode", 'String'>
    readonly code: FieldRef<"InfluencerCode", 'String'>
    readonly commissionRate: FieldRef<"InfluencerCode", 'Decimal'>
    readonly isActive: FieldRef<"InfluencerCode", 'Boolean'>
    readonly createdAt: FieldRef<"InfluencerCode", 'DateTime'>
    readonly updatedAt: FieldRef<"InfluencerCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InfluencerCode findUnique
   */
  export type InfluencerCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerCode
     */
    select?: InfluencerCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfluencerCode
     */
    omit?: InfluencerCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerCodeInclude<ExtArgs> | null
    /**
     * Filter, which InfluencerCode to fetch.
     */
    where: InfluencerCodeWhereUniqueInput
  }

  /**
   * InfluencerCode findUniqueOrThrow
   */
  export type InfluencerCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerCode
     */
    select?: InfluencerCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfluencerCode
     */
    omit?: InfluencerCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerCodeInclude<ExtArgs> | null
    /**
     * Filter, which InfluencerCode to fetch.
     */
    where: InfluencerCodeWhereUniqueInput
  }

  /**
   * InfluencerCode findFirst
   */
  export type InfluencerCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerCode
     */
    select?: InfluencerCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfluencerCode
     */
    omit?: InfluencerCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerCodeInclude<ExtArgs> | null
    /**
     * Filter, which InfluencerCode to fetch.
     */
    where?: InfluencerCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfluencerCodes to fetch.
     */
    orderBy?: InfluencerCodeOrderByWithRelationInput | InfluencerCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InfluencerCodes.
     */
    cursor?: InfluencerCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfluencerCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfluencerCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InfluencerCodes.
     */
    distinct?: InfluencerCodeScalarFieldEnum | InfluencerCodeScalarFieldEnum[]
  }

  /**
   * InfluencerCode findFirstOrThrow
   */
  export type InfluencerCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerCode
     */
    select?: InfluencerCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfluencerCode
     */
    omit?: InfluencerCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerCodeInclude<ExtArgs> | null
    /**
     * Filter, which InfluencerCode to fetch.
     */
    where?: InfluencerCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfluencerCodes to fetch.
     */
    orderBy?: InfluencerCodeOrderByWithRelationInput | InfluencerCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InfluencerCodes.
     */
    cursor?: InfluencerCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfluencerCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfluencerCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InfluencerCodes.
     */
    distinct?: InfluencerCodeScalarFieldEnum | InfluencerCodeScalarFieldEnum[]
  }

  /**
   * InfluencerCode findMany
   */
  export type InfluencerCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerCode
     */
    select?: InfluencerCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfluencerCode
     */
    omit?: InfluencerCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerCodeInclude<ExtArgs> | null
    /**
     * Filter, which InfluencerCodes to fetch.
     */
    where?: InfluencerCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfluencerCodes to fetch.
     */
    orderBy?: InfluencerCodeOrderByWithRelationInput | InfluencerCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InfluencerCodes.
     */
    cursor?: InfluencerCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfluencerCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfluencerCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InfluencerCodes.
     */
    distinct?: InfluencerCodeScalarFieldEnum | InfluencerCodeScalarFieldEnum[]
  }

  /**
   * InfluencerCode create
   */
  export type InfluencerCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerCode
     */
    select?: InfluencerCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfluencerCode
     */
    omit?: InfluencerCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a InfluencerCode.
     */
    data: XOR<InfluencerCodeCreateInput, InfluencerCodeUncheckedCreateInput>
  }

  /**
   * InfluencerCode createMany
   */
  export type InfluencerCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InfluencerCodes.
     */
    data: InfluencerCodeCreateManyInput | InfluencerCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InfluencerCode createManyAndReturn
   */
  export type InfluencerCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerCode
     */
    select?: InfluencerCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InfluencerCode
     */
    omit?: InfluencerCodeOmit<ExtArgs> | null
    /**
     * The data used to create many InfluencerCodes.
     */
    data: InfluencerCodeCreateManyInput | InfluencerCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InfluencerCode update
   */
  export type InfluencerCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerCode
     */
    select?: InfluencerCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfluencerCode
     */
    omit?: InfluencerCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a InfluencerCode.
     */
    data: XOR<InfluencerCodeUpdateInput, InfluencerCodeUncheckedUpdateInput>
    /**
     * Choose, which InfluencerCode to update.
     */
    where: InfluencerCodeWhereUniqueInput
  }

  /**
   * InfluencerCode updateMany
   */
  export type InfluencerCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InfluencerCodes.
     */
    data: XOR<InfluencerCodeUpdateManyMutationInput, InfluencerCodeUncheckedUpdateManyInput>
    /**
     * Filter which InfluencerCodes to update
     */
    where?: InfluencerCodeWhereInput
    /**
     * Limit how many InfluencerCodes to update.
     */
    limit?: number
  }

  /**
   * InfluencerCode updateManyAndReturn
   */
  export type InfluencerCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerCode
     */
    select?: InfluencerCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InfluencerCode
     */
    omit?: InfluencerCodeOmit<ExtArgs> | null
    /**
     * The data used to update InfluencerCodes.
     */
    data: XOR<InfluencerCodeUpdateManyMutationInput, InfluencerCodeUncheckedUpdateManyInput>
    /**
     * Filter which InfluencerCodes to update
     */
    where?: InfluencerCodeWhereInput
    /**
     * Limit how many InfluencerCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InfluencerCode upsert
   */
  export type InfluencerCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerCode
     */
    select?: InfluencerCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfluencerCode
     */
    omit?: InfluencerCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the InfluencerCode to update in case it exists.
     */
    where: InfluencerCodeWhereUniqueInput
    /**
     * In case the InfluencerCode found by the `where` argument doesn't exist, create a new InfluencerCode with this data.
     */
    create: XOR<InfluencerCodeCreateInput, InfluencerCodeUncheckedCreateInput>
    /**
     * In case the InfluencerCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InfluencerCodeUpdateInput, InfluencerCodeUncheckedUpdateInput>
  }

  /**
   * InfluencerCode delete
   */
  export type InfluencerCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerCode
     */
    select?: InfluencerCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfluencerCode
     */
    omit?: InfluencerCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerCodeInclude<ExtArgs> | null
    /**
     * Filter which InfluencerCode to delete.
     */
    where: InfluencerCodeWhereUniqueInput
  }

  /**
   * InfluencerCode deleteMany
   */
  export type InfluencerCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InfluencerCodes to delete
     */
    where?: InfluencerCodeWhereInput
    /**
     * Limit how many InfluencerCodes to delete.
     */
    limit?: number
  }

  /**
   * InfluencerCode.attributions
   */
  export type InfluencerCode$attributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAttribution
     */
    select?: OrderAttributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAttribution
     */
    omit?: OrderAttributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAttributionInclude<ExtArgs> | null
    where?: OrderAttributionWhereInput
    orderBy?: OrderAttributionOrderByWithRelationInput | OrderAttributionOrderByWithRelationInput[]
    cursor?: OrderAttributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderAttributionScalarFieldEnum | OrderAttributionScalarFieldEnum[]
  }

  /**
   * InfluencerCode without action
   */
  export type InfluencerCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerCode
     */
    select?: InfluencerCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfluencerCode
     */
    omit?: InfluencerCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InfluencerCodeInclude<ExtArgs> | null
  }


  /**
   * Model OrderAttribution
   */

  export type AggregateOrderAttribution = {
    _count: OrderAttributionCountAggregateOutputType | null
    _avg: OrderAttributionAvgAggregateOutputType | null
    _sum: OrderAttributionSumAggregateOutputType | null
    _min: OrderAttributionMinAggregateOutputType | null
    _max: OrderAttributionMaxAggregateOutputType | null
  }

  export type OrderAttributionAvgAggregateOutputType = {
    subtotalAmount: Decimal | null
  }

  export type OrderAttributionSumAggregateOutputType = {
    subtotalAmount: Decimal | null
  }

  export type OrderAttributionMinAggregateOutputType = {
    id: string | null
    shopifyOrderId: string | null
    influencerCodeId: string | null
    subtotalAmount: Decimal | null
    currencyCode: string | null
    createdAt: Date | null
  }

  export type OrderAttributionMaxAggregateOutputType = {
    id: string | null
    shopifyOrderId: string | null
    influencerCodeId: string | null
    subtotalAmount: Decimal | null
    currencyCode: string | null
    createdAt: Date | null
  }

  export type OrderAttributionCountAggregateOutputType = {
    id: number
    shopifyOrderId: number
    influencerCodeId: number
    subtotalAmount: number
    currencyCode: number
    createdAt: number
    _all: number
  }


  export type OrderAttributionAvgAggregateInputType = {
    subtotalAmount?: true
  }

  export type OrderAttributionSumAggregateInputType = {
    subtotalAmount?: true
  }

  export type OrderAttributionMinAggregateInputType = {
    id?: true
    shopifyOrderId?: true
    influencerCodeId?: true
    subtotalAmount?: true
    currencyCode?: true
    createdAt?: true
  }

  export type OrderAttributionMaxAggregateInputType = {
    id?: true
    shopifyOrderId?: true
    influencerCodeId?: true
    subtotalAmount?: true
    currencyCode?: true
    createdAt?: true
  }

  export type OrderAttributionCountAggregateInputType = {
    id?: true
    shopifyOrderId?: true
    influencerCodeId?: true
    subtotalAmount?: true
    currencyCode?: true
    createdAt?: true
    _all?: true
  }

  export type OrderAttributionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderAttribution to aggregate.
     */
    where?: OrderAttributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderAttributions to fetch.
     */
    orderBy?: OrderAttributionOrderByWithRelationInput | OrderAttributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderAttributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderAttributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderAttributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderAttributions
    **/
    _count?: true | OrderAttributionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAttributionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderAttributionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderAttributionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderAttributionMaxAggregateInputType
  }

  export type GetOrderAttributionAggregateType<T extends OrderAttributionAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderAttribution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderAttribution[P]>
      : GetScalarType<T[P], AggregateOrderAttribution[P]>
  }




  export type OrderAttributionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderAttributionWhereInput
    orderBy?: OrderAttributionOrderByWithAggregationInput | OrderAttributionOrderByWithAggregationInput[]
    by: OrderAttributionScalarFieldEnum[] | OrderAttributionScalarFieldEnum
    having?: OrderAttributionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderAttributionCountAggregateInputType | true
    _avg?: OrderAttributionAvgAggregateInputType
    _sum?: OrderAttributionSumAggregateInputType
    _min?: OrderAttributionMinAggregateInputType
    _max?: OrderAttributionMaxAggregateInputType
  }

  export type OrderAttributionGroupByOutputType = {
    id: string
    shopifyOrderId: string
    influencerCodeId: string
    subtotalAmount: Decimal
    currencyCode: string
    createdAt: Date
    _count: OrderAttributionCountAggregateOutputType | null
    _avg: OrderAttributionAvgAggregateOutputType | null
    _sum: OrderAttributionSumAggregateOutputType | null
    _min: OrderAttributionMinAggregateOutputType | null
    _max: OrderAttributionMaxAggregateOutputType | null
  }

  type GetOrderAttributionGroupByPayload<T extends OrderAttributionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderAttributionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderAttributionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderAttributionGroupByOutputType[P]>
            : GetScalarType<T[P], OrderAttributionGroupByOutputType[P]>
        }
      >
    >


  export type OrderAttributionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopifyOrderId?: boolean
    influencerCodeId?: boolean
    subtotalAmount?: boolean
    currencyCode?: boolean
    createdAt?: boolean
    influencerCode?: boolean | InfluencerCodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderAttribution"]>

  export type OrderAttributionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopifyOrderId?: boolean
    influencerCodeId?: boolean
    subtotalAmount?: boolean
    currencyCode?: boolean
    createdAt?: boolean
    influencerCode?: boolean | InfluencerCodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderAttribution"]>

  export type OrderAttributionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopifyOrderId?: boolean
    influencerCodeId?: boolean
    subtotalAmount?: boolean
    currencyCode?: boolean
    createdAt?: boolean
    influencerCode?: boolean | InfluencerCodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderAttribution"]>

  export type OrderAttributionSelectScalar = {
    id?: boolean
    shopifyOrderId?: boolean
    influencerCodeId?: boolean
    subtotalAmount?: boolean
    currencyCode?: boolean
    createdAt?: boolean
  }

  export type OrderAttributionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopifyOrderId" | "influencerCodeId" | "subtotalAmount" | "currencyCode" | "createdAt", ExtArgs["result"]["orderAttribution"]>
  export type OrderAttributionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    influencerCode?: boolean | InfluencerCodeDefaultArgs<ExtArgs>
  }
  export type OrderAttributionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    influencerCode?: boolean | InfluencerCodeDefaultArgs<ExtArgs>
  }
  export type OrderAttributionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    influencerCode?: boolean | InfluencerCodeDefaultArgs<ExtArgs>
  }

  export type $OrderAttributionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderAttribution"
    objects: {
      influencerCode: Prisma.$InfluencerCodePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopifyOrderId: string
      influencerCodeId: string
      subtotalAmount: Prisma.Decimal
      currencyCode: string
      createdAt: Date
    }, ExtArgs["result"]["orderAttribution"]>
    composites: {}
  }

  type OrderAttributionGetPayload<S extends boolean | null | undefined | OrderAttributionDefaultArgs> = $Result.GetResult<Prisma.$OrderAttributionPayload, S>

  type OrderAttributionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderAttributionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderAttributionCountAggregateInputType | true
    }

  export interface OrderAttributionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderAttribution'], meta: { name: 'OrderAttribution' } }
    /**
     * Find zero or one OrderAttribution that matches the filter.
     * @param {OrderAttributionFindUniqueArgs} args - Arguments to find a OrderAttribution
     * @example
     * // Get one OrderAttribution
     * const orderAttribution = await prisma.orderAttribution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderAttributionFindUniqueArgs>(args: SelectSubset<T, OrderAttributionFindUniqueArgs<ExtArgs>>): Prisma__OrderAttributionClient<$Result.GetResult<Prisma.$OrderAttributionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderAttribution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderAttributionFindUniqueOrThrowArgs} args - Arguments to find a OrderAttribution
     * @example
     * // Get one OrderAttribution
     * const orderAttribution = await prisma.orderAttribution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderAttributionFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderAttributionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderAttributionClient<$Result.GetResult<Prisma.$OrderAttributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderAttribution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAttributionFindFirstArgs} args - Arguments to find a OrderAttribution
     * @example
     * // Get one OrderAttribution
     * const orderAttribution = await prisma.orderAttribution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderAttributionFindFirstArgs>(args?: SelectSubset<T, OrderAttributionFindFirstArgs<ExtArgs>>): Prisma__OrderAttributionClient<$Result.GetResult<Prisma.$OrderAttributionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderAttribution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAttributionFindFirstOrThrowArgs} args - Arguments to find a OrderAttribution
     * @example
     * // Get one OrderAttribution
     * const orderAttribution = await prisma.orderAttribution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderAttributionFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderAttributionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderAttributionClient<$Result.GetResult<Prisma.$OrderAttributionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderAttributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAttributionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderAttributions
     * const orderAttributions = await prisma.orderAttribution.findMany()
     * 
     * // Get first 10 OrderAttributions
     * const orderAttributions = await prisma.orderAttribution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderAttributionWithIdOnly = await prisma.orderAttribution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderAttributionFindManyArgs>(args?: SelectSubset<T, OrderAttributionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderAttributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderAttribution.
     * @param {OrderAttributionCreateArgs} args - Arguments to create a OrderAttribution.
     * @example
     * // Create one OrderAttribution
     * const OrderAttribution = await prisma.orderAttribution.create({
     *   data: {
     *     // ... data to create a OrderAttribution
     *   }
     * })
     * 
     */
    create<T extends OrderAttributionCreateArgs>(args: SelectSubset<T, OrderAttributionCreateArgs<ExtArgs>>): Prisma__OrderAttributionClient<$Result.GetResult<Prisma.$OrderAttributionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderAttributions.
     * @param {OrderAttributionCreateManyArgs} args - Arguments to create many OrderAttributions.
     * @example
     * // Create many OrderAttributions
     * const orderAttribution = await prisma.orderAttribution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderAttributionCreateManyArgs>(args?: SelectSubset<T, OrderAttributionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderAttributions and returns the data saved in the database.
     * @param {OrderAttributionCreateManyAndReturnArgs} args - Arguments to create many OrderAttributions.
     * @example
     * // Create many OrderAttributions
     * const orderAttribution = await prisma.orderAttribution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderAttributions and only return the `id`
     * const orderAttributionWithIdOnly = await prisma.orderAttribution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderAttributionCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderAttributionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderAttributionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderAttribution.
     * @param {OrderAttributionDeleteArgs} args - Arguments to delete one OrderAttribution.
     * @example
     * // Delete one OrderAttribution
     * const OrderAttribution = await prisma.orderAttribution.delete({
     *   where: {
     *     // ... filter to delete one OrderAttribution
     *   }
     * })
     * 
     */
    delete<T extends OrderAttributionDeleteArgs>(args: SelectSubset<T, OrderAttributionDeleteArgs<ExtArgs>>): Prisma__OrderAttributionClient<$Result.GetResult<Prisma.$OrderAttributionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderAttribution.
     * @param {OrderAttributionUpdateArgs} args - Arguments to update one OrderAttribution.
     * @example
     * // Update one OrderAttribution
     * const orderAttribution = await prisma.orderAttribution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderAttributionUpdateArgs>(args: SelectSubset<T, OrderAttributionUpdateArgs<ExtArgs>>): Prisma__OrderAttributionClient<$Result.GetResult<Prisma.$OrderAttributionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderAttributions.
     * @param {OrderAttributionDeleteManyArgs} args - Arguments to filter OrderAttributions to delete.
     * @example
     * // Delete a few OrderAttributions
     * const { count } = await prisma.orderAttribution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderAttributionDeleteManyArgs>(args?: SelectSubset<T, OrderAttributionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderAttributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAttributionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderAttributions
     * const orderAttribution = await prisma.orderAttribution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderAttributionUpdateManyArgs>(args: SelectSubset<T, OrderAttributionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderAttributions and returns the data updated in the database.
     * @param {OrderAttributionUpdateManyAndReturnArgs} args - Arguments to update many OrderAttributions.
     * @example
     * // Update many OrderAttributions
     * const orderAttribution = await prisma.orderAttribution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderAttributions and only return the `id`
     * const orderAttributionWithIdOnly = await prisma.orderAttribution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderAttributionUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderAttributionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderAttributionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderAttribution.
     * @param {OrderAttributionUpsertArgs} args - Arguments to update or create a OrderAttribution.
     * @example
     * // Update or create a OrderAttribution
     * const orderAttribution = await prisma.orderAttribution.upsert({
     *   create: {
     *     // ... data to create a OrderAttribution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderAttribution we want to update
     *   }
     * })
     */
    upsert<T extends OrderAttributionUpsertArgs>(args: SelectSubset<T, OrderAttributionUpsertArgs<ExtArgs>>): Prisma__OrderAttributionClient<$Result.GetResult<Prisma.$OrderAttributionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderAttributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAttributionCountArgs} args - Arguments to filter OrderAttributions to count.
     * @example
     * // Count the number of OrderAttributions
     * const count = await prisma.orderAttribution.count({
     *   where: {
     *     // ... the filter for the OrderAttributions we want to count
     *   }
     * })
    **/
    count<T extends OrderAttributionCountArgs>(
      args?: Subset<T, OrderAttributionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderAttributionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderAttribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAttributionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAttributionAggregateArgs>(args: Subset<T, OrderAttributionAggregateArgs>): Prisma.PrismaPromise<GetOrderAttributionAggregateType<T>>

    /**
     * Group by OrderAttribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAttributionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderAttributionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderAttributionGroupByArgs['orderBy'] }
        : { orderBy?: OrderAttributionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderAttributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderAttributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderAttribution model
   */
  readonly fields: OrderAttributionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderAttribution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderAttributionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    influencerCode<T extends InfluencerCodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InfluencerCodeDefaultArgs<ExtArgs>>): Prisma__InfluencerCodeClient<$Result.GetResult<Prisma.$InfluencerCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderAttribution model
   */
  interface OrderAttributionFieldRefs {
    readonly id: FieldRef<"OrderAttribution", 'String'>
    readonly shopifyOrderId: FieldRef<"OrderAttribution", 'String'>
    readonly influencerCodeId: FieldRef<"OrderAttribution", 'String'>
    readonly subtotalAmount: FieldRef<"OrderAttribution", 'Decimal'>
    readonly currencyCode: FieldRef<"OrderAttribution", 'String'>
    readonly createdAt: FieldRef<"OrderAttribution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderAttribution findUnique
   */
  export type OrderAttributionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAttribution
     */
    select?: OrderAttributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAttribution
     */
    omit?: OrderAttributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAttributionInclude<ExtArgs> | null
    /**
     * Filter, which OrderAttribution to fetch.
     */
    where: OrderAttributionWhereUniqueInput
  }

  /**
   * OrderAttribution findUniqueOrThrow
   */
  export type OrderAttributionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAttribution
     */
    select?: OrderAttributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAttribution
     */
    omit?: OrderAttributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAttributionInclude<ExtArgs> | null
    /**
     * Filter, which OrderAttribution to fetch.
     */
    where: OrderAttributionWhereUniqueInput
  }

  /**
   * OrderAttribution findFirst
   */
  export type OrderAttributionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAttribution
     */
    select?: OrderAttributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAttribution
     */
    omit?: OrderAttributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAttributionInclude<ExtArgs> | null
    /**
     * Filter, which OrderAttribution to fetch.
     */
    where?: OrderAttributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderAttributions to fetch.
     */
    orderBy?: OrderAttributionOrderByWithRelationInput | OrderAttributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderAttributions.
     */
    cursor?: OrderAttributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderAttributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderAttributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderAttributions.
     */
    distinct?: OrderAttributionScalarFieldEnum | OrderAttributionScalarFieldEnum[]
  }

  /**
   * OrderAttribution findFirstOrThrow
   */
  export type OrderAttributionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAttribution
     */
    select?: OrderAttributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAttribution
     */
    omit?: OrderAttributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAttributionInclude<ExtArgs> | null
    /**
     * Filter, which OrderAttribution to fetch.
     */
    where?: OrderAttributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderAttributions to fetch.
     */
    orderBy?: OrderAttributionOrderByWithRelationInput | OrderAttributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderAttributions.
     */
    cursor?: OrderAttributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderAttributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderAttributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderAttributions.
     */
    distinct?: OrderAttributionScalarFieldEnum | OrderAttributionScalarFieldEnum[]
  }

  /**
   * OrderAttribution findMany
   */
  export type OrderAttributionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAttribution
     */
    select?: OrderAttributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAttribution
     */
    omit?: OrderAttributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAttributionInclude<ExtArgs> | null
    /**
     * Filter, which OrderAttributions to fetch.
     */
    where?: OrderAttributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderAttributions to fetch.
     */
    orderBy?: OrderAttributionOrderByWithRelationInput | OrderAttributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderAttributions.
     */
    cursor?: OrderAttributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderAttributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderAttributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderAttributions.
     */
    distinct?: OrderAttributionScalarFieldEnum | OrderAttributionScalarFieldEnum[]
  }

  /**
   * OrderAttribution create
   */
  export type OrderAttributionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAttribution
     */
    select?: OrderAttributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAttribution
     */
    omit?: OrderAttributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAttributionInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderAttribution.
     */
    data: XOR<OrderAttributionCreateInput, OrderAttributionUncheckedCreateInput>
  }

  /**
   * OrderAttribution createMany
   */
  export type OrderAttributionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderAttributions.
     */
    data: OrderAttributionCreateManyInput | OrderAttributionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderAttribution createManyAndReturn
   */
  export type OrderAttributionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAttribution
     */
    select?: OrderAttributionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAttribution
     */
    omit?: OrderAttributionOmit<ExtArgs> | null
    /**
     * The data used to create many OrderAttributions.
     */
    data: OrderAttributionCreateManyInput | OrderAttributionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAttributionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderAttribution update
   */
  export type OrderAttributionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAttribution
     */
    select?: OrderAttributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAttribution
     */
    omit?: OrderAttributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAttributionInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderAttribution.
     */
    data: XOR<OrderAttributionUpdateInput, OrderAttributionUncheckedUpdateInput>
    /**
     * Choose, which OrderAttribution to update.
     */
    where: OrderAttributionWhereUniqueInput
  }

  /**
   * OrderAttribution updateMany
   */
  export type OrderAttributionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderAttributions.
     */
    data: XOR<OrderAttributionUpdateManyMutationInput, OrderAttributionUncheckedUpdateManyInput>
    /**
     * Filter which OrderAttributions to update
     */
    where?: OrderAttributionWhereInput
    /**
     * Limit how many OrderAttributions to update.
     */
    limit?: number
  }

  /**
   * OrderAttribution updateManyAndReturn
   */
  export type OrderAttributionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAttribution
     */
    select?: OrderAttributionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAttribution
     */
    omit?: OrderAttributionOmit<ExtArgs> | null
    /**
     * The data used to update OrderAttributions.
     */
    data: XOR<OrderAttributionUpdateManyMutationInput, OrderAttributionUncheckedUpdateManyInput>
    /**
     * Filter which OrderAttributions to update
     */
    where?: OrderAttributionWhereInput
    /**
     * Limit how many OrderAttributions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAttributionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderAttribution upsert
   */
  export type OrderAttributionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAttribution
     */
    select?: OrderAttributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAttribution
     */
    omit?: OrderAttributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAttributionInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderAttribution to update in case it exists.
     */
    where: OrderAttributionWhereUniqueInput
    /**
     * In case the OrderAttribution found by the `where` argument doesn't exist, create a new OrderAttribution with this data.
     */
    create: XOR<OrderAttributionCreateInput, OrderAttributionUncheckedCreateInput>
    /**
     * In case the OrderAttribution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderAttributionUpdateInput, OrderAttributionUncheckedUpdateInput>
  }

  /**
   * OrderAttribution delete
   */
  export type OrderAttributionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAttribution
     */
    select?: OrderAttributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAttribution
     */
    omit?: OrderAttributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAttributionInclude<ExtArgs> | null
    /**
     * Filter which OrderAttribution to delete.
     */
    where: OrderAttributionWhereUniqueInput
  }

  /**
   * OrderAttribution deleteMany
   */
  export type OrderAttributionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderAttributions to delete
     */
    where?: OrderAttributionWhereInput
    /**
     * Limit how many OrderAttributions to delete.
     */
    limit?: number
  }

  /**
   * OrderAttribution without action
   */
  export type OrderAttributionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAttribution
     */
    select?: OrderAttributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAttribution
     */
    omit?: OrderAttributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAttributionInclude<ExtArgs> | null
  }


  /**
   * Model DistributorOrderStatus
   */

  export type AggregateDistributorOrderStatus = {
    _count: DistributorOrderStatusCountAggregateOutputType | null
    _min: DistributorOrderStatusMinAggregateOutputType | null
    _max: DistributorOrderStatusMaxAggregateOutputType | null
  }

  export type DistributorOrderStatusMinAggregateOutputType = {
    id: string | null
    shopifyOrderId: string | null
    state: $Enums.DistributorOrderState | null
    region: string | null
    updatedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DistributorOrderStatusMaxAggregateOutputType = {
    id: string | null
    shopifyOrderId: string | null
    state: $Enums.DistributorOrderState | null
    region: string | null
    updatedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DistributorOrderStatusCountAggregateOutputType = {
    id: number
    shopifyOrderId: number
    state: number
    region: number
    updatedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DistributorOrderStatusMinAggregateInputType = {
    id?: true
    shopifyOrderId?: true
    state?: true
    region?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DistributorOrderStatusMaxAggregateInputType = {
    id?: true
    shopifyOrderId?: true
    state?: true
    region?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DistributorOrderStatusCountAggregateInputType = {
    id?: true
    shopifyOrderId?: true
    state?: true
    region?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DistributorOrderStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DistributorOrderStatus to aggregate.
     */
    where?: DistributorOrderStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistributorOrderStatuses to fetch.
     */
    orderBy?: DistributorOrderStatusOrderByWithRelationInput | DistributorOrderStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistributorOrderStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistributorOrderStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistributorOrderStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DistributorOrderStatuses
    **/
    _count?: true | DistributorOrderStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistributorOrderStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistributorOrderStatusMaxAggregateInputType
  }

  export type GetDistributorOrderStatusAggregateType<T extends DistributorOrderStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateDistributorOrderStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistributorOrderStatus[P]>
      : GetScalarType<T[P], AggregateDistributorOrderStatus[P]>
  }




  export type DistributorOrderStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributorOrderStatusWhereInput
    orderBy?: DistributorOrderStatusOrderByWithAggregationInput | DistributorOrderStatusOrderByWithAggregationInput[]
    by: DistributorOrderStatusScalarFieldEnum[] | DistributorOrderStatusScalarFieldEnum
    having?: DistributorOrderStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistributorOrderStatusCountAggregateInputType | true
    _min?: DistributorOrderStatusMinAggregateInputType
    _max?: DistributorOrderStatusMaxAggregateInputType
  }

  export type DistributorOrderStatusGroupByOutputType = {
    id: string
    shopifyOrderId: string
    state: $Enums.DistributorOrderState
    region: string
    updatedById: string | null
    createdAt: Date
    updatedAt: Date
    _count: DistributorOrderStatusCountAggregateOutputType | null
    _min: DistributorOrderStatusMinAggregateOutputType | null
    _max: DistributorOrderStatusMaxAggregateOutputType | null
  }

  type GetDistributorOrderStatusGroupByPayload<T extends DistributorOrderStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistributorOrderStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistributorOrderStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistributorOrderStatusGroupByOutputType[P]>
            : GetScalarType<T[P], DistributorOrderStatusGroupByOutputType[P]>
        }
      >
    >


  export type DistributorOrderStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopifyOrderId?: boolean
    state?: boolean
    region?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["distributorOrderStatus"]>

  export type DistributorOrderStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopifyOrderId?: boolean
    state?: boolean
    region?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["distributorOrderStatus"]>

  export type DistributorOrderStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopifyOrderId?: boolean
    state?: boolean
    region?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["distributorOrderStatus"]>

  export type DistributorOrderStatusSelectScalar = {
    id?: boolean
    shopifyOrderId?: boolean
    state?: boolean
    region?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DistributorOrderStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopifyOrderId" | "state" | "region" | "updatedById" | "createdAt" | "updatedAt", ExtArgs["result"]["distributorOrderStatus"]>

  export type $DistributorOrderStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DistributorOrderStatus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopifyOrderId: string
      state: $Enums.DistributorOrderState
      region: string
      updatedById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["distributorOrderStatus"]>
    composites: {}
  }

  type DistributorOrderStatusGetPayload<S extends boolean | null | undefined | DistributorOrderStatusDefaultArgs> = $Result.GetResult<Prisma.$DistributorOrderStatusPayload, S>

  type DistributorOrderStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistributorOrderStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistributorOrderStatusCountAggregateInputType | true
    }

  export interface DistributorOrderStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DistributorOrderStatus'], meta: { name: 'DistributorOrderStatus' } }
    /**
     * Find zero or one DistributorOrderStatus that matches the filter.
     * @param {DistributorOrderStatusFindUniqueArgs} args - Arguments to find a DistributorOrderStatus
     * @example
     * // Get one DistributorOrderStatus
     * const distributorOrderStatus = await prisma.distributorOrderStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistributorOrderStatusFindUniqueArgs>(args: SelectSubset<T, DistributorOrderStatusFindUniqueArgs<ExtArgs>>): Prisma__DistributorOrderStatusClient<$Result.GetResult<Prisma.$DistributorOrderStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DistributorOrderStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistributorOrderStatusFindUniqueOrThrowArgs} args - Arguments to find a DistributorOrderStatus
     * @example
     * // Get one DistributorOrderStatus
     * const distributorOrderStatus = await prisma.distributorOrderStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistributorOrderStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, DistributorOrderStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistributorOrderStatusClient<$Result.GetResult<Prisma.$DistributorOrderStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DistributorOrderStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderStatusFindFirstArgs} args - Arguments to find a DistributorOrderStatus
     * @example
     * // Get one DistributorOrderStatus
     * const distributorOrderStatus = await prisma.distributorOrderStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistributorOrderStatusFindFirstArgs>(args?: SelectSubset<T, DistributorOrderStatusFindFirstArgs<ExtArgs>>): Prisma__DistributorOrderStatusClient<$Result.GetResult<Prisma.$DistributorOrderStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DistributorOrderStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderStatusFindFirstOrThrowArgs} args - Arguments to find a DistributorOrderStatus
     * @example
     * // Get one DistributorOrderStatus
     * const distributorOrderStatus = await prisma.distributorOrderStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistributorOrderStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, DistributorOrderStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistributorOrderStatusClient<$Result.GetResult<Prisma.$DistributorOrderStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DistributorOrderStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DistributorOrderStatuses
     * const distributorOrderStatuses = await prisma.distributorOrderStatus.findMany()
     * 
     * // Get first 10 DistributorOrderStatuses
     * const distributorOrderStatuses = await prisma.distributorOrderStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const distributorOrderStatusWithIdOnly = await prisma.distributorOrderStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistributorOrderStatusFindManyArgs>(args?: SelectSubset<T, DistributorOrderStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorOrderStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DistributorOrderStatus.
     * @param {DistributorOrderStatusCreateArgs} args - Arguments to create a DistributorOrderStatus.
     * @example
     * // Create one DistributorOrderStatus
     * const DistributorOrderStatus = await prisma.distributorOrderStatus.create({
     *   data: {
     *     // ... data to create a DistributorOrderStatus
     *   }
     * })
     * 
     */
    create<T extends DistributorOrderStatusCreateArgs>(args: SelectSubset<T, DistributorOrderStatusCreateArgs<ExtArgs>>): Prisma__DistributorOrderStatusClient<$Result.GetResult<Prisma.$DistributorOrderStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DistributorOrderStatuses.
     * @param {DistributorOrderStatusCreateManyArgs} args - Arguments to create many DistributorOrderStatuses.
     * @example
     * // Create many DistributorOrderStatuses
     * const distributorOrderStatus = await prisma.distributorOrderStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistributorOrderStatusCreateManyArgs>(args?: SelectSubset<T, DistributorOrderStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DistributorOrderStatuses and returns the data saved in the database.
     * @param {DistributorOrderStatusCreateManyAndReturnArgs} args - Arguments to create many DistributorOrderStatuses.
     * @example
     * // Create many DistributorOrderStatuses
     * const distributorOrderStatus = await prisma.distributorOrderStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DistributorOrderStatuses and only return the `id`
     * const distributorOrderStatusWithIdOnly = await prisma.distributorOrderStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistributorOrderStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, DistributorOrderStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorOrderStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DistributorOrderStatus.
     * @param {DistributorOrderStatusDeleteArgs} args - Arguments to delete one DistributorOrderStatus.
     * @example
     * // Delete one DistributorOrderStatus
     * const DistributorOrderStatus = await prisma.distributorOrderStatus.delete({
     *   where: {
     *     // ... filter to delete one DistributorOrderStatus
     *   }
     * })
     * 
     */
    delete<T extends DistributorOrderStatusDeleteArgs>(args: SelectSubset<T, DistributorOrderStatusDeleteArgs<ExtArgs>>): Prisma__DistributorOrderStatusClient<$Result.GetResult<Prisma.$DistributorOrderStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DistributorOrderStatus.
     * @param {DistributorOrderStatusUpdateArgs} args - Arguments to update one DistributorOrderStatus.
     * @example
     * // Update one DistributorOrderStatus
     * const distributorOrderStatus = await prisma.distributorOrderStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistributorOrderStatusUpdateArgs>(args: SelectSubset<T, DistributorOrderStatusUpdateArgs<ExtArgs>>): Prisma__DistributorOrderStatusClient<$Result.GetResult<Prisma.$DistributorOrderStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DistributorOrderStatuses.
     * @param {DistributorOrderStatusDeleteManyArgs} args - Arguments to filter DistributorOrderStatuses to delete.
     * @example
     * // Delete a few DistributorOrderStatuses
     * const { count } = await prisma.distributorOrderStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistributorOrderStatusDeleteManyArgs>(args?: SelectSubset<T, DistributorOrderStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DistributorOrderStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DistributorOrderStatuses
     * const distributorOrderStatus = await prisma.distributorOrderStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistributorOrderStatusUpdateManyArgs>(args: SelectSubset<T, DistributorOrderStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DistributorOrderStatuses and returns the data updated in the database.
     * @param {DistributorOrderStatusUpdateManyAndReturnArgs} args - Arguments to update many DistributorOrderStatuses.
     * @example
     * // Update many DistributorOrderStatuses
     * const distributorOrderStatus = await prisma.distributorOrderStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DistributorOrderStatuses and only return the `id`
     * const distributorOrderStatusWithIdOnly = await prisma.distributorOrderStatus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DistributorOrderStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, DistributorOrderStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorOrderStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DistributorOrderStatus.
     * @param {DistributorOrderStatusUpsertArgs} args - Arguments to update or create a DistributorOrderStatus.
     * @example
     * // Update or create a DistributorOrderStatus
     * const distributorOrderStatus = await prisma.distributorOrderStatus.upsert({
     *   create: {
     *     // ... data to create a DistributorOrderStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DistributorOrderStatus we want to update
     *   }
     * })
     */
    upsert<T extends DistributorOrderStatusUpsertArgs>(args: SelectSubset<T, DistributorOrderStatusUpsertArgs<ExtArgs>>): Prisma__DistributorOrderStatusClient<$Result.GetResult<Prisma.$DistributorOrderStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DistributorOrderStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderStatusCountArgs} args - Arguments to filter DistributorOrderStatuses to count.
     * @example
     * // Count the number of DistributorOrderStatuses
     * const count = await prisma.distributorOrderStatus.count({
     *   where: {
     *     // ... the filter for the DistributorOrderStatuses we want to count
     *   }
     * })
    **/
    count<T extends DistributorOrderStatusCountArgs>(
      args?: Subset<T, DistributorOrderStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistributorOrderStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DistributorOrderStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DistributorOrderStatusAggregateArgs>(args: Subset<T, DistributorOrderStatusAggregateArgs>): Prisma.PrismaPromise<GetDistributorOrderStatusAggregateType<T>>

    /**
     * Group by DistributorOrderStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DistributorOrderStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistributorOrderStatusGroupByArgs['orderBy'] }
        : { orderBy?: DistributorOrderStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DistributorOrderStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistributorOrderStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DistributorOrderStatus model
   */
  readonly fields: DistributorOrderStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DistributorOrderStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistributorOrderStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DistributorOrderStatus model
   */
  interface DistributorOrderStatusFieldRefs {
    readonly id: FieldRef<"DistributorOrderStatus", 'String'>
    readonly shopifyOrderId: FieldRef<"DistributorOrderStatus", 'String'>
    readonly state: FieldRef<"DistributorOrderStatus", 'DistributorOrderState'>
    readonly region: FieldRef<"DistributorOrderStatus", 'String'>
    readonly updatedById: FieldRef<"DistributorOrderStatus", 'String'>
    readonly createdAt: FieldRef<"DistributorOrderStatus", 'DateTime'>
    readonly updatedAt: FieldRef<"DistributorOrderStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DistributorOrderStatus findUnique
   */
  export type DistributorOrderStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderStatus
     */
    select?: DistributorOrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderStatus
     */
    omit?: DistributorOrderStatusOmit<ExtArgs> | null
    /**
     * Filter, which DistributorOrderStatus to fetch.
     */
    where: DistributorOrderStatusWhereUniqueInput
  }

  /**
   * DistributorOrderStatus findUniqueOrThrow
   */
  export type DistributorOrderStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderStatus
     */
    select?: DistributorOrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderStatus
     */
    omit?: DistributorOrderStatusOmit<ExtArgs> | null
    /**
     * Filter, which DistributorOrderStatus to fetch.
     */
    where: DistributorOrderStatusWhereUniqueInput
  }

  /**
   * DistributorOrderStatus findFirst
   */
  export type DistributorOrderStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderStatus
     */
    select?: DistributorOrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderStatus
     */
    omit?: DistributorOrderStatusOmit<ExtArgs> | null
    /**
     * Filter, which DistributorOrderStatus to fetch.
     */
    where?: DistributorOrderStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistributorOrderStatuses to fetch.
     */
    orderBy?: DistributorOrderStatusOrderByWithRelationInput | DistributorOrderStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DistributorOrderStatuses.
     */
    cursor?: DistributorOrderStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistributorOrderStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistributorOrderStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistributorOrderStatuses.
     */
    distinct?: DistributorOrderStatusScalarFieldEnum | DistributorOrderStatusScalarFieldEnum[]
  }

  /**
   * DistributorOrderStatus findFirstOrThrow
   */
  export type DistributorOrderStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderStatus
     */
    select?: DistributorOrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderStatus
     */
    omit?: DistributorOrderStatusOmit<ExtArgs> | null
    /**
     * Filter, which DistributorOrderStatus to fetch.
     */
    where?: DistributorOrderStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistributorOrderStatuses to fetch.
     */
    orderBy?: DistributorOrderStatusOrderByWithRelationInput | DistributorOrderStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DistributorOrderStatuses.
     */
    cursor?: DistributorOrderStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistributorOrderStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistributorOrderStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistributorOrderStatuses.
     */
    distinct?: DistributorOrderStatusScalarFieldEnum | DistributorOrderStatusScalarFieldEnum[]
  }

  /**
   * DistributorOrderStatus findMany
   */
  export type DistributorOrderStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderStatus
     */
    select?: DistributorOrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderStatus
     */
    omit?: DistributorOrderStatusOmit<ExtArgs> | null
    /**
     * Filter, which DistributorOrderStatuses to fetch.
     */
    where?: DistributorOrderStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistributorOrderStatuses to fetch.
     */
    orderBy?: DistributorOrderStatusOrderByWithRelationInput | DistributorOrderStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DistributorOrderStatuses.
     */
    cursor?: DistributorOrderStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistributorOrderStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistributorOrderStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistributorOrderStatuses.
     */
    distinct?: DistributorOrderStatusScalarFieldEnum | DistributorOrderStatusScalarFieldEnum[]
  }

  /**
   * DistributorOrderStatus create
   */
  export type DistributorOrderStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderStatus
     */
    select?: DistributorOrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderStatus
     */
    omit?: DistributorOrderStatusOmit<ExtArgs> | null
    /**
     * The data needed to create a DistributorOrderStatus.
     */
    data: XOR<DistributorOrderStatusCreateInput, DistributorOrderStatusUncheckedCreateInput>
  }

  /**
   * DistributorOrderStatus createMany
   */
  export type DistributorOrderStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DistributorOrderStatuses.
     */
    data: DistributorOrderStatusCreateManyInput | DistributorOrderStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DistributorOrderStatus createManyAndReturn
   */
  export type DistributorOrderStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderStatus
     */
    select?: DistributorOrderStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderStatus
     */
    omit?: DistributorOrderStatusOmit<ExtArgs> | null
    /**
     * The data used to create many DistributorOrderStatuses.
     */
    data: DistributorOrderStatusCreateManyInput | DistributorOrderStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DistributorOrderStatus update
   */
  export type DistributorOrderStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderStatus
     */
    select?: DistributorOrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderStatus
     */
    omit?: DistributorOrderStatusOmit<ExtArgs> | null
    /**
     * The data needed to update a DistributorOrderStatus.
     */
    data: XOR<DistributorOrderStatusUpdateInput, DistributorOrderStatusUncheckedUpdateInput>
    /**
     * Choose, which DistributorOrderStatus to update.
     */
    where: DistributorOrderStatusWhereUniqueInput
  }

  /**
   * DistributorOrderStatus updateMany
   */
  export type DistributorOrderStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DistributorOrderStatuses.
     */
    data: XOR<DistributorOrderStatusUpdateManyMutationInput, DistributorOrderStatusUncheckedUpdateManyInput>
    /**
     * Filter which DistributorOrderStatuses to update
     */
    where?: DistributorOrderStatusWhereInput
    /**
     * Limit how many DistributorOrderStatuses to update.
     */
    limit?: number
  }

  /**
   * DistributorOrderStatus updateManyAndReturn
   */
  export type DistributorOrderStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderStatus
     */
    select?: DistributorOrderStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderStatus
     */
    omit?: DistributorOrderStatusOmit<ExtArgs> | null
    /**
     * The data used to update DistributorOrderStatuses.
     */
    data: XOR<DistributorOrderStatusUpdateManyMutationInput, DistributorOrderStatusUncheckedUpdateManyInput>
    /**
     * Filter which DistributorOrderStatuses to update
     */
    where?: DistributorOrderStatusWhereInput
    /**
     * Limit how many DistributorOrderStatuses to update.
     */
    limit?: number
  }

  /**
   * DistributorOrderStatus upsert
   */
  export type DistributorOrderStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderStatus
     */
    select?: DistributorOrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderStatus
     */
    omit?: DistributorOrderStatusOmit<ExtArgs> | null
    /**
     * The filter to search for the DistributorOrderStatus to update in case it exists.
     */
    where: DistributorOrderStatusWhereUniqueInput
    /**
     * In case the DistributorOrderStatus found by the `where` argument doesn't exist, create a new DistributorOrderStatus with this data.
     */
    create: XOR<DistributorOrderStatusCreateInput, DistributorOrderStatusUncheckedCreateInput>
    /**
     * In case the DistributorOrderStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistributorOrderStatusUpdateInput, DistributorOrderStatusUncheckedUpdateInput>
  }

  /**
   * DistributorOrderStatus delete
   */
  export type DistributorOrderStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderStatus
     */
    select?: DistributorOrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderStatus
     */
    omit?: DistributorOrderStatusOmit<ExtArgs> | null
    /**
     * Filter which DistributorOrderStatus to delete.
     */
    where: DistributorOrderStatusWhereUniqueInput
  }

  /**
   * DistributorOrderStatus deleteMany
   */
  export type DistributorOrderStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DistributorOrderStatuses to delete
     */
    where?: DistributorOrderStatusWhereInput
    /**
     * Limit how many DistributorOrderStatuses to delete.
     */
    limit?: number
  }

  /**
   * DistributorOrderStatus without action
   */
  export type DistributorOrderStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderStatus
     */
    select?: DistributorOrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderStatus
     */
    omit?: DistributorOrderStatusOmit<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    actorId: string | null
    action: string | null
    target: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    actorId: string | null
    action: string | null
    target: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    actorId: number
    action: number
    target: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    target?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    target?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    target?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    actorId: string | null
    action: string
    target: string
    metadata: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    target?: boolean
    metadata?: boolean
    createdAt?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    target?: boolean
    metadata?: boolean
    createdAt?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    target?: boolean
    metadata?: boolean
    createdAt?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    actorId?: boolean
    action?: boolean
    target?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actorId" | "action" | "target" | "metadata" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      actor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actorId: string | null
      action: string
      target: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actor<T extends AuditLog$actorArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$actorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly actorId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly target: FieldRef<"AuditLog", 'String'>
    readonly metadata: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.actor
   */
  export type AuditLog$actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model WebhookEvent
   */

  export type AggregateWebhookEvent = {
    _count: WebhookEventCountAggregateOutputType | null
    _min: WebhookEventMinAggregateOutputType | null
    _max: WebhookEventMaxAggregateOutputType | null
  }

  export type WebhookEventMinAggregateOutputType = {
    id: string | null
    webhookId: string | null
    topic: string | null
    shop: string | null
    processedAt: Date | null
    createdAt: Date | null
  }

  export type WebhookEventMaxAggregateOutputType = {
    id: string | null
    webhookId: string | null
    topic: string | null
    shop: string | null
    processedAt: Date | null
    createdAt: Date | null
  }

  export type WebhookEventCountAggregateOutputType = {
    id: number
    webhookId: number
    topic: number
    shop: number
    payload: number
    processedAt: number
    createdAt: number
    _all: number
  }


  export type WebhookEventMinAggregateInputType = {
    id?: true
    webhookId?: true
    topic?: true
    shop?: true
    processedAt?: true
    createdAt?: true
  }

  export type WebhookEventMaxAggregateInputType = {
    id?: true
    webhookId?: true
    topic?: true
    shop?: true
    processedAt?: true
    createdAt?: true
  }

  export type WebhookEventCountAggregateInputType = {
    id?: true
    webhookId?: true
    topic?: true
    shop?: true
    payload?: true
    processedAt?: true
    createdAt?: true
    _all?: true
  }

  export type WebhookEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookEvent to aggregate.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookEvents
    **/
    _count?: true | WebhookEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookEventMaxAggregateInputType
  }

  export type GetWebhookEventAggregateType<T extends WebhookEventAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookEvent[P]>
      : GetScalarType<T[P], AggregateWebhookEvent[P]>
  }




  export type WebhookEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookEventWhereInput
    orderBy?: WebhookEventOrderByWithAggregationInput | WebhookEventOrderByWithAggregationInput[]
    by: WebhookEventScalarFieldEnum[] | WebhookEventScalarFieldEnum
    having?: WebhookEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookEventCountAggregateInputType | true
    _min?: WebhookEventMinAggregateInputType
    _max?: WebhookEventMaxAggregateInputType
  }

  export type WebhookEventGroupByOutputType = {
    id: string
    webhookId: string | null
    topic: string
    shop: string
    payload: JsonValue
    processedAt: Date | null
    createdAt: Date
    _count: WebhookEventCountAggregateOutputType | null
    _min: WebhookEventMinAggregateOutputType | null
    _max: WebhookEventMaxAggregateOutputType | null
  }

  type GetWebhookEventGroupByPayload<T extends WebhookEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookEventGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookEventGroupByOutputType[P]>
        }
      >
    >


  export type WebhookEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webhookId?: boolean
    topic?: boolean
    shop?: boolean
    payload?: boolean
    processedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["webhookEvent"]>

  export type WebhookEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webhookId?: boolean
    topic?: boolean
    shop?: boolean
    payload?: boolean
    processedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["webhookEvent"]>

  export type WebhookEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    webhookId?: boolean
    topic?: boolean
    shop?: boolean
    payload?: boolean
    processedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["webhookEvent"]>

  export type WebhookEventSelectScalar = {
    id?: boolean
    webhookId?: boolean
    topic?: boolean
    shop?: boolean
    payload?: boolean
    processedAt?: boolean
    createdAt?: boolean
  }

  export type WebhookEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "webhookId" | "topic" | "shop" | "payload" | "processedAt" | "createdAt", ExtArgs["result"]["webhookEvent"]>

  export type $WebhookEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      webhookId: string | null
      topic: string
      shop: string
      payload: Prisma.JsonValue
      processedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["webhookEvent"]>
    composites: {}
  }

  type WebhookEventGetPayload<S extends boolean | null | undefined | WebhookEventDefaultArgs> = $Result.GetResult<Prisma.$WebhookEventPayload, S>

  type WebhookEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebhookEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookEventCountAggregateInputType | true
    }

  export interface WebhookEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookEvent'], meta: { name: 'WebhookEvent' } }
    /**
     * Find zero or one WebhookEvent that matches the filter.
     * @param {WebhookEventFindUniqueArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookEventFindUniqueArgs>(args: SelectSubset<T, WebhookEventFindUniqueArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebhookEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebhookEventFindUniqueOrThrowArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookEventFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventFindFirstArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookEventFindFirstArgs>(args?: SelectSubset<T, WebhookEventFindFirstArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventFindFirstOrThrowArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookEventFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebhookEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookEvents
     * const webhookEvents = await prisma.webhookEvent.findMany()
     * 
     * // Get first 10 WebhookEvents
     * const webhookEvents = await prisma.webhookEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookEventWithIdOnly = await prisma.webhookEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookEventFindManyArgs>(args?: SelectSubset<T, WebhookEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebhookEvent.
     * @param {WebhookEventCreateArgs} args - Arguments to create a WebhookEvent.
     * @example
     * // Create one WebhookEvent
     * const WebhookEvent = await prisma.webhookEvent.create({
     *   data: {
     *     // ... data to create a WebhookEvent
     *   }
     * })
     * 
     */
    create<T extends WebhookEventCreateArgs>(args: SelectSubset<T, WebhookEventCreateArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebhookEvents.
     * @param {WebhookEventCreateManyArgs} args - Arguments to create many WebhookEvents.
     * @example
     * // Create many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookEventCreateManyArgs>(args?: SelectSubset<T, WebhookEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookEvents and returns the data saved in the database.
     * @param {WebhookEventCreateManyAndReturnArgs} args - Arguments to create many WebhookEvents.
     * @example
     * // Create many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookEvents and only return the `id`
     * const webhookEventWithIdOnly = await prisma.webhookEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookEventCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebhookEvent.
     * @param {WebhookEventDeleteArgs} args - Arguments to delete one WebhookEvent.
     * @example
     * // Delete one WebhookEvent
     * const WebhookEvent = await prisma.webhookEvent.delete({
     *   where: {
     *     // ... filter to delete one WebhookEvent
     *   }
     * })
     * 
     */
    delete<T extends WebhookEventDeleteArgs>(args: SelectSubset<T, WebhookEventDeleteArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebhookEvent.
     * @param {WebhookEventUpdateArgs} args - Arguments to update one WebhookEvent.
     * @example
     * // Update one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookEventUpdateArgs>(args: SelectSubset<T, WebhookEventUpdateArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebhookEvents.
     * @param {WebhookEventDeleteManyArgs} args - Arguments to filter WebhookEvents to delete.
     * @example
     * // Delete a few WebhookEvents
     * const { count } = await prisma.webhookEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookEventDeleteManyArgs>(args?: SelectSubset<T, WebhookEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookEventUpdateManyArgs>(args: SelectSubset<T, WebhookEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookEvents and returns the data updated in the database.
     * @param {WebhookEventUpdateManyAndReturnArgs} args - Arguments to update many WebhookEvents.
     * @example
     * // Update many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebhookEvents and only return the `id`
     * const webhookEventWithIdOnly = await prisma.webhookEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebhookEventUpdateManyAndReturnArgs>(args: SelectSubset<T, WebhookEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebhookEvent.
     * @param {WebhookEventUpsertArgs} args - Arguments to update or create a WebhookEvent.
     * @example
     * // Update or create a WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.upsert({
     *   create: {
     *     // ... data to create a WebhookEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookEvent we want to update
     *   }
     * })
     */
    upsert<T extends WebhookEventUpsertArgs>(args: SelectSubset<T, WebhookEventUpsertArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventCountArgs} args - Arguments to filter WebhookEvents to count.
     * @example
     * // Count the number of WebhookEvents
     * const count = await prisma.webhookEvent.count({
     *   where: {
     *     // ... the filter for the WebhookEvents we want to count
     *   }
     * })
    **/
    count<T extends WebhookEventCountArgs>(
      args?: Subset<T, WebhookEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebhookEventAggregateArgs>(args: Subset<T, WebhookEventAggregateArgs>): Prisma.PrismaPromise<GetWebhookEventAggregateType<T>>

    /**
     * Group by WebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebhookEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookEventGroupByArgs['orderBy'] }
        : { orderBy?: WebhookEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebhookEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookEvent model
   */
  readonly fields: WebhookEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebhookEvent model
   */
  interface WebhookEventFieldRefs {
    readonly id: FieldRef<"WebhookEvent", 'String'>
    readonly webhookId: FieldRef<"WebhookEvent", 'String'>
    readonly topic: FieldRef<"WebhookEvent", 'String'>
    readonly shop: FieldRef<"WebhookEvent", 'String'>
    readonly payload: FieldRef<"WebhookEvent", 'Json'>
    readonly processedAt: FieldRef<"WebhookEvent", 'DateTime'>
    readonly createdAt: FieldRef<"WebhookEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookEvent findUnique
   */
  export type WebhookEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent findUniqueOrThrow
   */
  export type WebhookEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent findFirst
   */
  export type WebhookEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookEvents.
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookEvents.
     */
    distinct?: WebhookEventScalarFieldEnum | WebhookEventScalarFieldEnum[]
  }

  /**
   * WebhookEvent findFirstOrThrow
   */
  export type WebhookEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookEvents.
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookEvents.
     */
    distinct?: WebhookEventScalarFieldEnum | WebhookEventScalarFieldEnum[]
  }

  /**
   * WebhookEvent findMany
   */
  export type WebhookEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvents to fetch.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookEvents.
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookEvents.
     */
    distinct?: WebhookEventScalarFieldEnum | WebhookEventScalarFieldEnum[]
  }

  /**
   * WebhookEvent create
   */
  export type WebhookEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The data needed to create a WebhookEvent.
     */
    data: XOR<WebhookEventCreateInput, WebhookEventUncheckedCreateInput>
  }

  /**
   * WebhookEvent createMany
   */
  export type WebhookEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookEvents.
     */
    data: WebhookEventCreateManyInput | WebhookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookEvent createManyAndReturn
   */
  export type WebhookEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The data used to create many WebhookEvents.
     */
    data: WebhookEventCreateManyInput | WebhookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookEvent update
   */
  export type WebhookEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The data needed to update a WebhookEvent.
     */
    data: XOR<WebhookEventUpdateInput, WebhookEventUncheckedUpdateInput>
    /**
     * Choose, which WebhookEvent to update.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent updateMany
   */
  export type WebhookEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookEvents.
     */
    data: XOR<WebhookEventUpdateManyMutationInput, WebhookEventUncheckedUpdateManyInput>
    /**
     * Filter which WebhookEvents to update
     */
    where?: WebhookEventWhereInput
    /**
     * Limit how many WebhookEvents to update.
     */
    limit?: number
  }

  /**
   * WebhookEvent updateManyAndReturn
   */
  export type WebhookEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The data used to update WebhookEvents.
     */
    data: XOR<WebhookEventUpdateManyMutationInput, WebhookEventUncheckedUpdateManyInput>
    /**
     * Filter which WebhookEvents to update
     */
    where?: WebhookEventWhereInput
    /**
     * Limit how many WebhookEvents to update.
     */
    limit?: number
  }

  /**
   * WebhookEvent upsert
   */
  export type WebhookEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The filter to search for the WebhookEvent to update in case it exists.
     */
    where: WebhookEventWhereUniqueInput
    /**
     * In case the WebhookEvent found by the `where` argument doesn't exist, create a new WebhookEvent with this data.
     */
    create: XOR<WebhookEventCreateInput, WebhookEventUncheckedCreateInput>
    /**
     * In case the WebhookEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookEventUpdateInput, WebhookEventUncheckedUpdateInput>
  }

  /**
   * WebhookEvent delete
   */
  export type WebhookEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter which WebhookEvent to delete.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent deleteMany
   */
  export type WebhookEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookEvents to delete
     */
    where?: WebhookEventWhereInput
    /**
     * Limit how many WebhookEvents to delete.
     */
    limit?: number
  }

  /**
   * WebhookEvent without action
   */
  export type WebhookEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    shopifyCustomerId: 'shopifyCustomerId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DistributorRegionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    country: 'country',
    region: 'region',
    createdAt: 'createdAt'
  };

  export type DistributorRegionScalarFieldEnum = (typeof DistributorRegionScalarFieldEnum)[keyof typeof DistributorRegionScalarFieldEnum]


  export const B2BApplicationScalarFieldEnum: {
    id: 'id',
    shopifyCustomerId: 'shopifyCustomerId',
    email: 'email',
    contactName: 'contactName',
    businessName: 'businessName',
    taxId: 'taxId',
    message: 'message',
    status: 'status',
    reviewedById: 'reviewedById',
    reviewedAt: 'reviewedAt',
    rejectionReason: 'rejectionReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type B2BApplicationScalarFieldEnum = (typeof B2BApplicationScalarFieldEnum)[keyof typeof B2BApplicationScalarFieldEnum]


  export const InfluencerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InfluencerScalarFieldEnum = (typeof InfluencerScalarFieldEnum)[keyof typeof InfluencerScalarFieldEnum]


  export const InfluencerCodeScalarFieldEnum: {
    id: 'id',
    influencerId: 'influencerId',
    code: 'code',
    commissionRate: 'commissionRate',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InfluencerCodeScalarFieldEnum = (typeof InfluencerCodeScalarFieldEnum)[keyof typeof InfluencerCodeScalarFieldEnum]


  export const OrderAttributionScalarFieldEnum: {
    id: 'id',
    shopifyOrderId: 'shopifyOrderId',
    influencerCodeId: 'influencerCodeId',
    subtotalAmount: 'subtotalAmount',
    currencyCode: 'currencyCode',
    createdAt: 'createdAt'
  };

  export type OrderAttributionScalarFieldEnum = (typeof OrderAttributionScalarFieldEnum)[keyof typeof OrderAttributionScalarFieldEnum]


  export const DistributorOrderStatusScalarFieldEnum: {
    id: 'id',
    shopifyOrderId: 'shopifyOrderId',
    state: 'state',
    region: 'region',
    updatedById: 'updatedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DistributorOrderStatusScalarFieldEnum = (typeof DistributorOrderStatusScalarFieldEnum)[keyof typeof DistributorOrderStatusScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    actorId: 'actorId',
    action: 'action',
    target: 'target',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const WebhookEventScalarFieldEnum: {
    id: 'id',
    webhookId: 'webhookId',
    topic: 'topic',
    shop: 'shop',
    payload: 'payload',
    processedAt: 'processedAt',
    createdAt: 'createdAt'
  };

  export type WebhookEventScalarFieldEnum = (typeof WebhookEventScalarFieldEnum)[keyof typeof WebhookEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'RoleName'
   */
  export type EnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName'>
    


  /**
   * Reference to a field of type 'RoleName[]'
   */
  export type ListEnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'B2BApplicationStatus'
   */
  export type EnumB2BApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'B2BApplicationStatus'>
    


  /**
   * Reference to a field of type 'B2BApplicationStatus[]'
   */
  export type ListEnumB2BApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'B2BApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DistributorOrderState'
   */
  export type EnumDistributorOrderStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DistributorOrderState'>
    


  /**
   * Reference to a field of type 'DistributorOrderState[]'
   */
  export type ListEnumDistributorOrderStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DistributorOrderState[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    shopifyCustomerId?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleNameFilter<"User"> | $Enums.RoleName
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    distributorRegions?: DistributorRegionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    shopifyCustomerId?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    distributorRegions?: DistributorRegionOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    shopifyCustomerId?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleNameFilter<"User"> | $Enums.RoleName
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    distributorRegions?: DistributorRegionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    shopifyCustomerId?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    shopifyCustomerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleNameWithAggregatesFilter<"User"> | $Enums.RoleName
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DistributorRegionWhereInput = {
    AND?: DistributorRegionWhereInput | DistributorRegionWhereInput[]
    OR?: DistributorRegionWhereInput[]
    NOT?: DistributorRegionWhereInput | DistributorRegionWhereInput[]
    id?: StringFilter<"DistributorRegion"> | string
    userId?: StringFilter<"DistributorRegion"> | string
    country?: StringFilter<"DistributorRegion"> | string
    region?: StringFilter<"DistributorRegion"> | string
    createdAt?: DateTimeFilter<"DistributorRegion"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DistributorRegionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    country?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DistributorRegionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_country_region?: DistributorRegionUserIdCountryRegionCompoundUniqueInput
    AND?: DistributorRegionWhereInput | DistributorRegionWhereInput[]
    OR?: DistributorRegionWhereInput[]
    NOT?: DistributorRegionWhereInput | DistributorRegionWhereInput[]
    userId?: StringFilter<"DistributorRegion"> | string
    country?: StringFilter<"DistributorRegion"> | string
    region?: StringFilter<"DistributorRegion"> | string
    createdAt?: DateTimeFilter<"DistributorRegion"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_country_region">

  export type DistributorRegionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    country?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    _count?: DistributorRegionCountOrderByAggregateInput
    _max?: DistributorRegionMaxOrderByAggregateInput
    _min?: DistributorRegionMinOrderByAggregateInput
  }

  export type DistributorRegionScalarWhereWithAggregatesInput = {
    AND?: DistributorRegionScalarWhereWithAggregatesInput | DistributorRegionScalarWhereWithAggregatesInput[]
    OR?: DistributorRegionScalarWhereWithAggregatesInput[]
    NOT?: DistributorRegionScalarWhereWithAggregatesInput | DistributorRegionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DistributorRegion"> | string
    userId?: StringWithAggregatesFilter<"DistributorRegion"> | string
    country?: StringWithAggregatesFilter<"DistributorRegion"> | string
    region?: StringWithAggregatesFilter<"DistributorRegion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DistributorRegion"> | Date | string
  }

  export type B2BApplicationWhereInput = {
    AND?: B2BApplicationWhereInput | B2BApplicationWhereInput[]
    OR?: B2BApplicationWhereInput[]
    NOT?: B2BApplicationWhereInput | B2BApplicationWhereInput[]
    id?: StringFilter<"B2BApplication"> | string
    shopifyCustomerId?: StringNullableFilter<"B2BApplication"> | string | null
    email?: StringFilter<"B2BApplication"> | string
    contactName?: StringFilter<"B2BApplication"> | string
    businessName?: StringFilter<"B2BApplication"> | string
    taxId?: StringNullableFilter<"B2BApplication"> | string | null
    message?: StringNullableFilter<"B2BApplication"> | string | null
    status?: EnumB2BApplicationStatusFilter<"B2BApplication"> | $Enums.B2BApplicationStatus
    reviewedById?: StringNullableFilter<"B2BApplication"> | string | null
    reviewedAt?: DateTimeNullableFilter<"B2BApplication"> | Date | string | null
    rejectionReason?: StringNullableFilter<"B2BApplication"> | string | null
    createdAt?: DateTimeFilter<"B2BApplication"> | Date | string
    updatedAt?: DateTimeFilter<"B2BApplication"> | Date | string
  }

  export type B2BApplicationOrderByWithRelationInput = {
    id?: SortOrder
    shopifyCustomerId?: SortOrderInput | SortOrder
    email?: SortOrder
    contactName?: SortOrder
    businessName?: SortOrder
    taxId?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    reviewedById?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type B2BApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: B2BApplicationWhereInput | B2BApplicationWhereInput[]
    OR?: B2BApplicationWhereInput[]
    NOT?: B2BApplicationWhereInput | B2BApplicationWhereInput[]
    shopifyCustomerId?: StringNullableFilter<"B2BApplication"> | string | null
    email?: StringFilter<"B2BApplication"> | string
    contactName?: StringFilter<"B2BApplication"> | string
    businessName?: StringFilter<"B2BApplication"> | string
    taxId?: StringNullableFilter<"B2BApplication"> | string | null
    message?: StringNullableFilter<"B2BApplication"> | string | null
    status?: EnumB2BApplicationStatusFilter<"B2BApplication"> | $Enums.B2BApplicationStatus
    reviewedById?: StringNullableFilter<"B2BApplication"> | string | null
    reviewedAt?: DateTimeNullableFilter<"B2BApplication"> | Date | string | null
    rejectionReason?: StringNullableFilter<"B2BApplication"> | string | null
    createdAt?: DateTimeFilter<"B2BApplication"> | Date | string
    updatedAt?: DateTimeFilter<"B2BApplication"> | Date | string
  }, "id">

  export type B2BApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    shopifyCustomerId?: SortOrderInput | SortOrder
    email?: SortOrder
    contactName?: SortOrder
    businessName?: SortOrder
    taxId?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    reviewedById?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: B2BApplicationCountOrderByAggregateInput
    _max?: B2BApplicationMaxOrderByAggregateInput
    _min?: B2BApplicationMinOrderByAggregateInput
  }

  export type B2BApplicationScalarWhereWithAggregatesInput = {
    AND?: B2BApplicationScalarWhereWithAggregatesInput | B2BApplicationScalarWhereWithAggregatesInput[]
    OR?: B2BApplicationScalarWhereWithAggregatesInput[]
    NOT?: B2BApplicationScalarWhereWithAggregatesInput | B2BApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"B2BApplication"> | string
    shopifyCustomerId?: StringNullableWithAggregatesFilter<"B2BApplication"> | string | null
    email?: StringWithAggregatesFilter<"B2BApplication"> | string
    contactName?: StringWithAggregatesFilter<"B2BApplication"> | string
    businessName?: StringWithAggregatesFilter<"B2BApplication"> | string
    taxId?: StringNullableWithAggregatesFilter<"B2BApplication"> | string | null
    message?: StringNullableWithAggregatesFilter<"B2BApplication"> | string | null
    status?: EnumB2BApplicationStatusWithAggregatesFilter<"B2BApplication"> | $Enums.B2BApplicationStatus
    reviewedById?: StringNullableWithAggregatesFilter<"B2BApplication"> | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"B2BApplication"> | Date | string | null
    rejectionReason?: StringNullableWithAggregatesFilter<"B2BApplication"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"B2BApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"B2BApplication"> | Date | string
  }

  export type InfluencerWhereInput = {
    AND?: InfluencerWhereInput | InfluencerWhereInput[]
    OR?: InfluencerWhereInput[]
    NOT?: InfluencerWhereInput | InfluencerWhereInput[]
    id?: StringFilter<"Influencer"> | string
    name?: StringFilter<"Influencer"> | string
    email?: StringNullableFilter<"Influencer"> | string | null
    createdAt?: DateTimeFilter<"Influencer"> | Date | string
    updatedAt?: DateTimeFilter<"Influencer"> | Date | string
    codes?: InfluencerCodeListRelationFilter
  }

  export type InfluencerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    codes?: InfluencerCodeOrderByRelationAggregateInput
  }

  export type InfluencerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: InfluencerWhereInput | InfluencerWhereInput[]
    OR?: InfluencerWhereInput[]
    NOT?: InfluencerWhereInput | InfluencerWhereInput[]
    name?: StringFilter<"Influencer"> | string
    createdAt?: DateTimeFilter<"Influencer"> | Date | string
    updatedAt?: DateTimeFilter<"Influencer"> | Date | string
    codes?: InfluencerCodeListRelationFilter
  }, "id" | "email">

  export type InfluencerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InfluencerCountOrderByAggregateInput
    _max?: InfluencerMaxOrderByAggregateInput
    _min?: InfluencerMinOrderByAggregateInput
  }

  export type InfluencerScalarWhereWithAggregatesInput = {
    AND?: InfluencerScalarWhereWithAggregatesInput | InfluencerScalarWhereWithAggregatesInput[]
    OR?: InfluencerScalarWhereWithAggregatesInput[]
    NOT?: InfluencerScalarWhereWithAggregatesInput | InfluencerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Influencer"> | string
    name?: StringWithAggregatesFilter<"Influencer"> | string
    email?: StringNullableWithAggregatesFilter<"Influencer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Influencer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Influencer"> | Date | string
  }

  export type InfluencerCodeWhereInput = {
    AND?: InfluencerCodeWhereInput | InfluencerCodeWhereInput[]
    OR?: InfluencerCodeWhereInput[]
    NOT?: InfluencerCodeWhereInput | InfluencerCodeWhereInput[]
    id?: StringFilter<"InfluencerCode"> | string
    influencerId?: StringFilter<"InfluencerCode"> | string
    code?: StringFilter<"InfluencerCode"> | string
    commissionRate?: DecimalNullableFilter<"InfluencerCode"> | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFilter<"InfluencerCode"> | boolean
    createdAt?: DateTimeFilter<"InfluencerCode"> | Date | string
    updatedAt?: DateTimeFilter<"InfluencerCode"> | Date | string
    influencer?: XOR<InfluencerScalarRelationFilter, InfluencerWhereInput>
    attributions?: OrderAttributionListRelationFilter
  }

  export type InfluencerCodeOrderByWithRelationInput = {
    id?: SortOrder
    influencerId?: SortOrder
    code?: SortOrder
    commissionRate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    influencer?: InfluencerOrderByWithRelationInput
    attributions?: OrderAttributionOrderByRelationAggregateInput
  }

  export type InfluencerCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: InfluencerCodeWhereInput | InfluencerCodeWhereInput[]
    OR?: InfluencerCodeWhereInput[]
    NOT?: InfluencerCodeWhereInput | InfluencerCodeWhereInput[]
    influencerId?: StringFilter<"InfluencerCode"> | string
    commissionRate?: DecimalNullableFilter<"InfluencerCode"> | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFilter<"InfluencerCode"> | boolean
    createdAt?: DateTimeFilter<"InfluencerCode"> | Date | string
    updatedAt?: DateTimeFilter<"InfluencerCode"> | Date | string
    influencer?: XOR<InfluencerScalarRelationFilter, InfluencerWhereInput>
    attributions?: OrderAttributionListRelationFilter
  }, "id" | "code">

  export type InfluencerCodeOrderByWithAggregationInput = {
    id?: SortOrder
    influencerId?: SortOrder
    code?: SortOrder
    commissionRate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InfluencerCodeCountOrderByAggregateInput
    _avg?: InfluencerCodeAvgOrderByAggregateInput
    _max?: InfluencerCodeMaxOrderByAggregateInput
    _min?: InfluencerCodeMinOrderByAggregateInput
    _sum?: InfluencerCodeSumOrderByAggregateInput
  }

  export type InfluencerCodeScalarWhereWithAggregatesInput = {
    AND?: InfluencerCodeScalarWhereWithAggregatesInput | InfluencerCodeScalarWhereWithAggregatesInput[]
    OR?: InfluencerCodeScalarWhereWithAggregatesInput[]
    NOT?: InfluencerCodeScalarWhereWithAggregatesInput | InfluencerCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InfluencerCode"> | string
    influencerId?: StringWithAggregatesFilter<"InfluencerCode"> | string
    code?: StringWithAggregatesFilter<"InfluencerCode"> | string
    commissionRate?: DecimalNullableWithAggregatesFilter<"InfluencerCode"> | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolWithAggregatesFilter<"InfluencerCode"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"InfluencerCode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InfluencerCode"> | Date | string
  }

  export type OrderAttributionWhereInput = {
    AND?: OrderAttributionWhereInput | OrderAttributionWhereInput[]
    OR?: OrderAttributionWhereInput[]
    NOT?: OrderAttributionWhereInput | OrderAttributionWhereInput[]
    id?: StringFilter<"OrderAttribution"> | string
    shopifyOrderId?: StringFilter<"OrderAttribution"> | string
    influencerCodeId?: StringFilter<"OrderAttribution"> | string
    subtotalAmount?: DecimalFilter<"OrderAttribution"> | Decimal | DecimalJsLike | number | string
    currencyCode?: StringFilter<"OrderAttribution"> | string
    createdAt?: DateTimeFilter<"OrderAttribution"> | Date | string
    influencerCode?: XOR<InfluencerCodeScalarRelationFilter, InfluencerCodeWhereInput>
  }

  export type OrderAttributionOrderByWithRelationInput = {
    id?: SortOrder
    shopifyOrderId?: SortOrder
    influencerCodeId?: SortOrder
    subtotalAmount?: SortOrder
    currencyCode?: SortOrder
    createdAt?: SortOrder
    influencerCode?: InfluencerCodeOrderByWithRelationInput
  }

  export type OrderAttributionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shopifyOrderId_influencerCodeId?: OrderAttributionShopifyOrderIdInfluencerCodeIdCompoundUniqueInput
    AND?: OrderAttributionWhereInput | OrderAttributionWhereInput[]
    OR?: OrderAttributionWhereInput[]
    NOT?: OrderAttributionWhereInput | OrderAttributionWhereInput[]
    shopifyOrderId?: StringFilter<"OrderAttribution"> | string
    influencerCodeId?: StringFilter<"OrderAttribution"> | string
    subtotalAmount?: DecimalFilter<"OrderAttribution"> | Decimal | DecimalJsLike | number | string
    currencyCode?: StringFilter<"OrderAttribution"> | string
    createdAt?: DateTimeFilter<"OrderAttribution"> | Date | string
    influencerCode?: XOR<InfluencerCodeScalarRelationFilter, InfluencerCodeWhereInput>
  }, "id" | "shopifyOrderId_influencerCodeId">

  export type OrderAttributionOrderByWithAggregationInput = {
    id?: SortOrder
    shopifyOrderId?: SortOrder
    influencerCodeId?: SortOrder
    subtotalAmount?: SortOrder
    currencyCode?: SortOrder
    createdAt?: SortOrder
    _count?: OrderAttributionCountOrderByAggregateInput
    _avg?: OrderAttributionAvgOrderByAggregateInput
    _max?: OrderAttributionMaxOrderByAggregateInput
    _min?: OrderAttributionMinOrderByAggregateInput
    _sum?: OrderAttributionSumOrderByAggregateInput
  }

  export type OrderAttributionScalarWhereWithAggregatesInput = {
    AND?: OrderAttributionScalarWhereWithAggregatesInput | OrderAttributionScalarWhereWithAggregatesInput[]
    OR?: OrderAttributionScalarWhereWithAggregatesInput[]
    NOT?: OrderAttributionScalarWhereWithAggregatesInput | OrderAttributionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderAttribution"> | string
    shopifyOrderId?: StringWithAggregatesFilter<"OrderAttribution"> | string
    influencerCodeId?: StringWithAggregatesFilter<"OrderAttribution"> | string
    subtotalAmount?: DecimalWithAggregatesFilter<"OrderAttribution"> | Decimal | DecimalJsLike | number | string
    currencyCode?: StringWithAggregatesFilter<"OrderAttribution"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OrderAttribution"> | Date | string
  }

  export type DistributorOrderStatusWhereInput = {
    AND?: DistributorOrderStatusWhereInput | DistributorOrderStatusWhereInput[]
    OR?: DistributorOrderStatusWhereInput[]
    NOT?: DistributorOrderStatusWhereInput | DistributorOrderStatusWhereInput[]
    id?: StringFilter<"DistributorOrderStatus"> | string
    shopifyOrderId?: StringFilter<"DistributorOrderStatus"> | string
    state?: EnumDistributorOrderStateFilter<"DistributorOrderStatus"> | $Enums.DistributorOrderState
    region?: StringFilter<"DistributorOrderStatus"> | string
    updatedById?: StringNullableFilter<"DistributorOrderStatus"> | string | null
    createdAt?: DateTimeFilter<"DistributorOrderStatus"> | Date | string
    updatedAt?: DateTimeFilter<"DistributorOrderStatus"> | Date | string
  }

  export type DistributorOrderStatusOrderByWithRelationInput = {
    id?: SortOrder
    shopifyOrderId?: SortOrder
    state?: SortOrder
    region?: SortOrder
    updatedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistributorOrderStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shopifyOrderId?: string
    AND?: DistributorOrderStatusWhereInput | DistributorOrderStatusWhereInput[]
    OR?: DistributorOrderStatusWhereInput[]
    NOT?: DistributorOrderStatusWhereInput | DistributorOrderStatusWhereInput[]
    state?: EnumDistributorOrderStateFilter<"DistributorOrderStatus"> | $Enums.DistributorOrderState
    region?: StringFilter<"DistributorOrderStatus"> | string
    updatedById?: StringNullableFilter<"DistributorOrderStatus"> | string | null
    createdAt?: DateTimeFilter<"DistributorOrderStatus"> | Date | string
    updatedAt?: DateTimeFilter<"DistributorOrderStatus"> | Date | string
  }, "id" | "shopifyOrderId">

  export type DistributorOrderStatusOrderByWithAggregationInput = {
    id?: SortOrder
    shopifyOrderId?: SortOrder
    state?: SortOrder
    region?: SortOrder
    updatedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DistributorOrderStatusCountOrderByAggregateInput
    _max?: DistributorOrderStatusMaxOrderByAggregateInput
    _min?: DistributorOrderStatusMinOrderByAggregateInput
  }

  export type DistributorOrderStatusScalarWhereWithAggregatesInput = {
    AND?: DistributorOrderStatusScalarWhereWithAggregatesInput | DistributorOrderStatusScalarWhereWithAggregatesInput[]
    OR?: DistributorOrderStatusScalarWhereWithAggregatesInput[]
    NOT?: DistributorOrderStatusScalarWhereWithAggregatesInput | DistributorOrderStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DistributorOrderStatus"> | string
    shopifyOrderId?: StringWithAggregatesFilter<"DistributorOrderStatus"> | string
    state?: EnumDistributorOrderStateWithAggregatesFilter<"DistributorOrderStatus"> | $Enums.DistributorOrderState
    region?: StringWithAggregatesFilter<"DistributorOrderStatus"> | string
    updatedById?: StringNullableWithAggregatesFilter<"DistributorOrderStatus"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DistributorOrderStatus"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DistributorOrderStatus"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    target?: StringFilter<"AuditLog"> | string
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    actorId?: SortOrderInput | SortOrder
    action?: SortOrder
    target?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    actor?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    target?: StringFilter<"AuditLog"> | string
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    actorId?: SortOrderInput | SortOrder
    action?: SortOrder
    target?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    actorId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    target?: StringWithAggregatesFilter<"AuditLog"> | string
    metadata?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type WebhookEventWhereInput = {
    AND?: WebhookEventWhereInput | WebhookEventWhereInput[]
    OR?: WebhookEventWhereInput[]
    NOT?: WebhookEventWhereInput | WebhookEventWhereInput[]
    id?: StringFilter<"WebhookEvent"> | string
    webhookId?: StringNullableFilter<"WebhookEvent"> | string | null
    topic?: StringFilter<"WebhookEvent"> | string
    shop?: StringFilter<"WebhookEvent"> | string
    payload?: JsonFilter<"WebhookEvent">
    processedAt?: DateTimeNullableFilter<"WebhookEvent"> | Date | string | null
    createdAt?: DateTimeFilter<"WebhookEvent"> | Date | string
  }

  export type WebhookEventOrderByWithRelationInput = {
    id?: SortOrder
    webhookId?: SortOrderInput | SortOrder
    topic?: SortOrder
    shop?: SortOrder
    payload?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type WebhookEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    webhookId?: string
    AND?: WebhookEventWhereInput | WebhookEventWhereInput[]
    OR?: WebhookEventWhereInput[]
    NOT?: WebhookEventWhereInput | WebhookEventWhereInput[]
    topic?: StringFilter<"WebhookEvent"> | string
    shop?: StringFilter<"WebhookEvent"> | string
    payload?: JsonFilter<"WebhookEvent">
    processedAt?: DateTimeNullableFilter<"WebhookEvent"> | Date | string | null
    createdAt?: DateTimeFilter<"WebhookEvent"> | Date | string
  }, "id" | "webhookId">

  export type WebhookEventOrderByWithAggregationInput = {
    id?: SortOrder
    webhookId?: SortOrderInput | SortOrder
    topic?: SortOrder
    shop?: SortOrder
    payload?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WebhookEventCountOrderByAggregateInput
    _max?: WebhookEventMaxOrderByAggregateInput
    _min?: WebhookEventMinOrderByAggregateInput
  }

  export type WebhookEventScalarWhereWithAggregatesInput = {
    AND?: WebhookEventScalarWhereWithAggregatesInput | WebhookEventScalarWhereWithAggregatesInput[]
    OR?: WebhookEventScalarWhereWithAggregatesInput[]
    NOT?: WebhookEventScalarWhereWithAggregatesInput | WebhookEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookEvent"> | string
    webhookId?: StringNullableWithAggregatesFilter<"WebhookEvent"> | string | null
    topic?: StringWithAggregatesFilter<"WebhookEvent"> | string
    shop?: StringWithAggregatesFilter<"WebhookEvent"> | string
    payload?: JsonWithAggregatesFilter<"WebhookEvent">
    processedAt?: DateTimeNullableWithAggregatesFilter<"WebhookEvent"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WebhookEvent"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    shopifyCustomerId?: string | null
    role?: $Enums.RoleName
    createdAt?: Date | string
    updatedAt?: Date | string
    distributorRegions?: DistributorRegionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    shopifyCustomerId?: string | null
    role?: $Enums.RoleName
    createdAt?: Date | string
    updatedAt?: Date | string
    distributorRegions?: DistributorRegionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    shopifyCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distributorRegions?: DistributorRegionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    shopifyCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distributorRegions?: DistributorRegionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    shopifyCustomerId?: string | null
    role?: $Enums.RoleName
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    shopifyCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    shopifyCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributorRegionCreateInput = {
    id?: string
    country: string
    region: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDistributorRegionsInput
  }

  export type DistributorRegionUncheckedCreateInput = {
    id?: string
    userId: string
    country: string
    region: string
    createdAt?: Date | string
  }

  export type DistributorRegionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDistributorRegionsNestedInput
  }

  export type DistributorRegionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributorRegionCreateManyInput = {
    id?: string
    userId: string
    country: string
    region: string
    createdAt?: Date | string
  }

  export type DistributorRegionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributorRegionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type B2BApplicationCreateInput = {
    id?: string
    shopifyCustomerId?: string | null
    email: string
    contactName: string
    businessName: string
    taxId?: string | null
    message?: string | null
    status?: $Enums.B2BApplicationStatus
    reviewedById?: string | null
    reviewedAt?: Date | string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type B2BApplicationUncheckedCreateInput = {
    id?: string
    shopifyCustomerId?: string | null
    email: string
    contactName: string
    businessName: string
    taxId?: string | null
    message?: string | null
    status?: $Enums.B2BApplicationStatus
    reviewedById?: string | null
    reviewedAt?: Date | string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type B2BApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumB2BApplicationStatusFieldUpdateOperationsInput | $Enums.B2BApplicationStatus
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type B2BApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumB2BApplicationStatusFieldUpdateOperationsInput | $Enums.B2BApplicationStatus
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type B2BApplicationCreateManyInput = {
    id?: string
    shopifyCustomerId?: string | null
    email: string
    contactName: string
    businessName: string
    taxId?: string | null
    message?: string | null
    status?: $Enums.B2BApplicationStatus
    reviewedById?: string | null
    reviewedAt?: Date | string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type B2BApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumB2BApplicationStatusFieldUpdateOperationsInput | $Enums.B2BApplicationStatus
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type B2BApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    businessName?: StringFieldUpdateOperationsInput | string
    taxId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumB2BApplicationStatusFieldUpdateOperationsInput | $Enums.B2BApplicationStatus
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfluencerCreateInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    codes?: InfluencerCodeCreateNestedManyWithoutInfluencerInput
  }

  export type InfluencerUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    codes?: InfluencerCodeUncheckedCreateNestedManyWithoutInfluencerInput
  }

  export type InfluencerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codes?: InfluencerCodeUpdateManyWithoutInfluencerNestedInput
  }

  export type InfluencerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codes?: InfluencerCodeUncheckedUpdateManyWithoutInfluencerNestedInput
  }

  export type InfluencerCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InfluencerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfluencerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfluencerCodeCreateInput = {
    id?: string
    code: string
    commissionRate?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    influencer: InfluencerCreateNestedOneWithoutCodesInput
    attributions?: OrderAttributionCreateNestedManyWithoutInfluencerCodeInput
  }

  export type InfluencerCodeUncheckedCreateInput = {
    id?: string
    influencerId: string
    code: string
    commissionRate?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attributions?: OrderAttributionUncheckedCreateNestedManyWithoutInfluencerCodeInput
  }

  export type InfluencerCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    commissionRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    influencer?: InfluencerUpdateOneRequiredWithoutCodesNestedInput
    attributions?: OrderAttributionUpdateManyWithoutInfluencerCodeNestedInput
  }

  export type InfluencerCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    influencerId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    commissionRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributions?: OrderAttributionUncheckedUpdateManyWithoutInfluencerCodeNestedInput
  }

  export type InfluencerCodeCreateManyInput = {
    id?: string
    influencerId: string
    code: string
    commissionRate?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InfluencerCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    commissionRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfluencerCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    influencerId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    commissionRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderAttributionCreateInput = {
    id?: string
    shopifyOrderId: string
    subtotalAmount: Decimal | DecimalJsLike | number | string
    currencyCode: string
    createdAt?: Date | string
    influencerCode: InfluencerCodeCreateNestedOneWithoutAttributionsInput
  }

  export type OrderAttributionUncheckedCreateInput = {
    id?: string
    shopifyOrderId: string
    influencerCodeId: string
    subtotalAmount: Decimal | DecimalJsLike | number | string
    currencyCode: string
    createdAt?: Date | string
  }

  export type OrderAttributionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyOrderId?: StringFieldUpdateOperationsInput | string
    subtotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    influencerCode?: InfluencerCodeUpdateOneRequiredWithoutAttributionsNestedInput
  }

  export type OrderAttributionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyOrderId?: StringFieldUpdateOperationsInput | string
    influencerCodeId?: StringFieldUpdateOperationsInput | string
    subtotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderAttributionCreateManyInput = {
    id?: string
    shopifyOrderId: string
    influencerCodeId: string
    subtotalAmount: Decimal | DecimalJsLike | number | string
    currencyCode: string
    createdAt?: Date | string
  }

  export type OrderAttributionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyOrderId?: StringFieldUpdateOperationsInput | string
    subtotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderAttributionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyOrderId?: StringFieldUpdateOperationsInput | string
    influencerCodeId?: StringFieldUpdateOperationsInput | string
    subtotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributorOrderStatusCreateInput = {
    id?: string
    shopifyOrderId: string
    state: $Enums.DistributorOrderState
    region: string
    updatedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistributorOrderStatusUncheckedCreateInput = {
    id?: string
    shopifyOrderId: string
    state: $Enums.DistributorOrderState
    region: string
    updatedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistributorOrderStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyOrderId?: StringFieldUpdateOperationsInput | string
    state?: EnumDistributorOrderStateFieldUpdateOperationsInput | $Enums.DistributorOrderState
    region?: StringFieldUpdateOperationsInput | string
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributorOrderStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyOrderId?: StringFieldUpdateOperationsInput | string
    state?: EnumDistributorOrderStateFieldUpdateOperationsInput | $Enums.DistributorOrderState
    region?: StringFieldUpdateOperationsInput | string
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributorOrderStatusCreateManyInput = {
    id?: string
    shopifyOrderId: string
    state: $Enums.DistributorOrderState
    region: string
    updatedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistributorOrderStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyOrderId?: StringFieldUpdateOperationsInput | string
    state?: EnumDistributorOrderStateFieldUpdateOperationsInput | $Enums.DistributorOrderState
    region?: StringFieldUpdateOperationsInput | string
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributorOrderStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyOrderId?: StringFieldUpdateOperationsInput | string
    state?: EnumDistributorOrderStateFieldUpdateOperationsInput | $Enums.DistributorOrderState
    region?: StringFieldUpdateOperationsInput | string
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    target: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    actor?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    actorId?: string | null
    action: string
    target: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    actorId?: string | null
    action: string
    target: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventCreateInput = {
    id?: string
    webhookId?: string | null
    topic: string
    shop: string
    payload: JsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WebhookEventUncheckedCreateInput = {
    id?: string
    webhookId?: string | null
    topic: string
    shop: string
    payload: JsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WebhookEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    shop?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    shop?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventCreateManyInput = {
    id?: string
    webhookId?: string | null
    topic: string
    shop: string
    payload: JsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WebhookEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    shop?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookId?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    shop?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DistributorRegionListRelationFilter = {
    every?: DistributorRegionWhereInput
    some?: DistributorRegionWhereInput
    none?: DistributorRegionWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DistributorRegionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    shopifyCustomerId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    shopifyCustomerId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    shopifyCustomerId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DistributorRegionUserIdCountryRegionCompoundUniqueInput = {
    userId: string
    country: string
    region: string
  }

  export type DistributorRegionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    country?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
  }

  export type DistributorRegionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    country?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
  }

  export type DistributorRegionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    country?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumB2BApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.B2BApplicationStatus | EnumB2BApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.B2BApplicationStatus[] | ListEnumB2BApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.B2BApplicationStatus[] | ListEnumB2BApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumB2BApplicationStatusFilter<$PrismaModel> | $Enums.B2BApplicationStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type B2BApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    shopifyCustomerId?: SortOrder
    email?: SortOrder
    contactName?: SortOrder
    businessName?: SortOrder
    taxId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    reviewedById?: SortOrder
    reviewedAt?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type B2BApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    shopifyCustomerId?: SortOrder
    email?: SortOrder
    contactName?: SortOrder
    businessName?: SortOrder
    taxId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    reviewedById?: SortOrder
    reviewedAt?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type B2BApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    shopifyCustomerId?: SortOrder
    email?: SortOrder
    contactName?: SortOrder
    businessName?: SortOrder
    taxId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    reviewedById?: SortOrder
    reviewedAt?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumB2BApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.B2BApplicationStatus | EnumB2BApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.B2BApplicationStatus[] | ListEnumB2BApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.B2BApplicationStatus[] | ListEnumB2BApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumB2BApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.B2BApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumB2BApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumB2BApplicationStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type InfluencerCodeListRelationFilter = {
    every?: InfluencerCodeWhereInput
    some?: InfluencerCodeWhereInput
    none?: InfluencerCodeWhereInput
  }

  export type InfluencerCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InfluencerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InfluencerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InfluencerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type InfluencerScalarRelationFilter = {
    is?: InfluencerWhereInput
    isNot?: InfluencerWhereInput
  }

  export type OrderAttributionListRelationFilter = {
    every?: OrderAttributionWhereInput
    some?: OrderAttributionWhereInput
    none?: OrderAttributionWhereInput
  }

  export type OrderAttributionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InfluencerCodeCountOrderByAggregateInput = {
    id?: SortOrder
    influencerId?: SortOrder
    code?: SortOrder
    commissionRate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InfluencerCodeAvgOrderByAggregateInput = {
    commissionRate?: SortOrder
  }

  export type InfluencerCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    influencerId?: SortOrder
    code?: SortOrder
    commissionRate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InfluencerCodeMinOrderByAggregateInput = {
    id?: SortOrder
    influencerId?: SortOrder
    code?: SortOrder
    commissionRate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InfluencerCodeSumOrderByAggregateInput = {
    commissionRate?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type InfluencerCodeScalarRelationFilter = {
    is?: InfluencerCodeWhereInput
    isNot?: InfluencerCodeWhereInput
  }

  export type OrderAttributionShopifyOrderIdInfluencerCodeIdCompoundUniqueInput = {
    shopifyOrderId: string
    influencerCodeId: string
  }

  export type OrderAttributionCountOrderByAggregateInput = {
    id?: SortOrder
    shopifyOrderId?: SortOrder
    influencerCodeId?: SortOrder
    subtotalAmount?: SortOrder
    currencyCode?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderAttributionAvgOrderByAggregateInput = {
    subtotalAmount?: SortOrder
  }

  export type OrderAttributionMaxOrderByAggregateInput = {
    id?: SortOrder
    shopifyOrderId?: SortOrder
    influencerCodeId?: SortOrder
    subtotalAmount?: SortOrder
    currencyCode?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderAttributionMinOrderByAggregateInput = {
    id?: SortOrder
    shopifyOrderId?: SortOrder
    influencerCodeId?: SortOrder
    subtotalAmount?: SortOrder
    currencyCode?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderAttributionSumOrderByAggregateInput = {
    subtotalAmount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumDistributorOrderStateFilter<$PrismaModel = never> = {
    equals?: $Enums.DistributorOrderState | EnumDistributorOrderStateFieldRefInput<$PrismaModel>
    in?: $Enums.DistributorOrderState[] | ListEnumDistributorOrderStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.DistributorOrderState[] | ListEnumDistributorOrderStateFieldRefInput<$PrismaModel>
    not?: NestedEnumDistributorOrderStateFilter<$PrismaModel> | $Enums.DistributorOrderState
  }

  export type DistributorOrderStatusCountOrderByAggregateInput = {
    id?: SortOrder
    shopifyOrderId?: SortOrder
    state?: SortOrder
    region?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistributorOrderStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    shopifyOrderId?: SortOrder
    state?: SortOrder
    region?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistributorOrderStatusMinOrderByAggregateInput = {
    id?: SortOrder
    shopifyOrderId?: SortOrder
    state?: SortOrder
    region?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDistributorOrderStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DistributorOrderState | EnumDistributorOrderStateFieldRefInput<$PrismaModel>
    in?: $Enums.DistributorOrderState[] | ListEnumDistributorOrderStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.DistributorOrderState[] | ListEnumDistributorOrderStateFieldRefInput<$PrismaModel>
    not?: NestedEnumDistributorOrderStateWithAggregatesFilter<$PrismaModel> | $Enums.DistributorOrderState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDistributorOrderStateFilter<$PrismaModel>
    _max?: NestedEnumDistributorOrderStateFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    target?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WebhookEventCountOrderByAggregateInput = {
    id?: SortOrder
    webhookId?: SortOrder
    topic?: SortOrder
    shop?: SortOrder
    payload?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookEventMaxOrderByAggregateInput = {
    id?: SortOrder
    webhookId?: SortOrder
    topic?: SortOrder
    shop?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookEventMinOrderByAggregateInput = {
    id?: SortOrder
    webhookId?: SortOrder
    topic?: SortOrder
    shop?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DistributorRegionCreateNestedManyWithoutUserInput = {
    create?: XOR<DistributorRegionCreateWithoutUserInput, DistributorRegionUncheckedCreateWithoutUserInput> | DistributorRegionCreateWithoutUserInput[] | DistributorRegionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DistributorRegionCreateOrConnectWithoutUserInput | DistributorRegionCreateOrConnectWithoutUserInput[]
    createMany?: DistributorRegionCreateManyUserInputEnvelope
    connect?: DistributorRegionWhereUniqueInput | DistributorRegionWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type DistributorRegionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DistributorRegionCreateWithoutUserInput, DistributorRegionUncheckedCreateWithoutUserInput> | DistributorRegionCreateWithoutUserInput[] | DistributorRegionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DistributorRegionCreateOrConnectWithoutUserInput | DistributorRegionCreateOrConnectWithoutUserInput[]
    createMany?: DistributorRegionCreateManyUserInputEnvelope
    connect?: DistributorRegionWhereUniqueInput | DistributorRegionWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleNameFieldUpdateOperationsInput = {
    set?: $Enums.RoleName
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DistributorRegionUpdateManyWithoutUserNestedInput = {
    create?: XOR<DistributorRegionCreateWithoutUserInput, DistributorRegionUncheckedCreateWithoutUserInput> | DistributorRegionCreateWithoutUserInput[] | DistributorRegionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DistributorRegionCreateOrConnectWithoutUserInput | DistributorRegionCreateOrConnectWithoutUserInput[]
    upsert?: DistributorRegionUpsertWithWhereUniqueWithoutUserInput | DistributorRegionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DistributorRegionCreateManyUserInputEnvelope
    set?: DistributorRegionWhereUniqueInput | DistributorRegionWhereUniqueInput[]
    disconnect?: DistributorRegionWhereUniqueInput | DistributorRegionWhereUniqueInput[]
    delete?: DistributorRegionWhereUniqueInput | DistributorRegionWhereUniqueInput[]
    connect?: DistributorRegionWhereUniqueInput | DistributorRegionWhereUniqueInput[]
    update?: DistributorRegionUpdateWithWhereUniqueWithoutUserInput | DistributorRegionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DistributorRegionUpdateManyWithWhereWithoutUserInput | DistributorRegionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DistributorRegionScalarWhereInput | DistributorRegionScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type DistributorRegionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DistributorRegionCreateWithoutUserInput, DistributorRegionUncheckedCreateWithoutUserInput> | DistributorRegionCreateWithoutUserInput[] | DistributorRegionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DistributorRegionCreateOrConnectWithoutUserInput | DistributorRegionCreateOrConnectWithoutUserInput[]
    upsert?: DistributorRegionUpsertWithWhereUniqueWithoutUserInput | DistributorRegionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DistributorRegionCreateManyUserInputEnvelope
    set?: DistributorRegionWhereUniqueInput | DistributorRegionWhereUniqueInput[]
    disconnect?: DistributorRegionWhereUniqueInput | DistributorRegionWhereUniqueInput[]
    delete?: DistributorRegionWhereUniqueInput | DistributorRegionWhereUniqueInput[]
    connect?: DistributorRegionWhereUniqueInput | DistributorRegionWhereUniqueInput[]
    update?: DistributorRegionUpdateWithWhereUniqueWithoutUserInput | DistributorRegionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DistributorRegionUpdateManyWithWhereWithoutUserInput | DistributorRegionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DistributorRegionScalarWhereInput | DistributorRegionScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDistributorRegionsInput = {
    create?: XOR<UserCreateWithoutDistributorRegionsInput, UserUncheckedCreateWithoutDistributorRegionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDistributorRegionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDistributorRegionsNestedInput = {
    create?: XOR<UserCreateWithoutDistributorRegionsInput, UserUncheckedCreateWithoutDistributorRegionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDistributorRegionsInput
    upsert?: UserUpsertWithoutDistributorRegionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDistributorRegionsInput, UserUpdateWithoutDistributorRegionsInput>, UserUncheckedUpdateWithoutDistributorRegionsInput>
  }

  export type EnumB2BApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.B2BApplicationStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type InfluencerCodeCreateNestedManyWithoutInfluencerInput = {
    create?: XOR<InfluencerCodeCreateWithoutInfluencerInput, InfluencerCodeUncheckedCreateWithoutInfluencerInput> | InfluencerCodeCreateWithoutInfluencerInput[] | InfluencerCodeUncheckedCreateWithoutInfluencerInput[]
    connectOrCreate?: InfluencerCodeCreateOrConnectWithoutInfluencerInput | InfluencerCodeCreateOrConnectWithoutInfluencerInput[]
    createMany?: InfluencerCodeCreateManyInfluencerInputEnvelope
    connect?: InfluencerCodeWhereUniqueInput | InfluencerCodeWhereUniqueInput[]
  }

  export type InfluencerCodeUncheckedCreateNestedManyWithoutInfluencerInput = {
    create?: XOR<InfluencerCodeCreateWithoutInfluencerInput, InfluencerCodeUncheckedCreateWithoutInfluencerInput> | InfluencerCodeCreateWithoutInfluencerInput[] | InfluencerCodeUncheckedCreateWithoutInfluencerInput[]
    connectOrCreate?: InfluencerCodeCreateOrConnectWithoutInfluencerInput | InfluencerCodeCreateOrConnectWithoutInfluencerInput[]
    createMany?: InfluencerCodeCreateManyInfluencerInputEnvelope
    connect?: InfluencerCodeWhereUniqueInput | InfluencerCodeWhereUniqueInput[]
  }

  export type InfluencerCodeUpdateManyWithoutInfluencerNestedInput = {
    create?: XOR<InfluencerCodeCreateWithoutInfluencerInput, InfluencerCodeUncheckedCreateWithoutInfluencerInput> | InfluencerCodeCreateWithoutInfluencerInput[] | InfluencerCodeUncheckedCreateWithoutInfluencerInput[]
    connectOrCreate?: InfluencerCodeCreateOrConnectWithoutInfluencerInput | InfluencerCodeCreateOrConnectWithoutInfluencerInput[]
    upsert?: InfluencerCodeUpsertWithWhereUniqueWithoutInfluencerInput | InfluencerCodeUpsertWithWhereUniqueWithoutInfluencerInput[]
    createMany?: InfluencerCodeCreateManyInfluencerInputEnvelope
    set?: InfluencerCodeWhereUniqueInput | InfluencerCodeWhereUniqueInput[]
    disconnect?: InfluencerCodeWhereUniqueInput | InfluencerCodeWhereUniqueInput[]
    delete?: InfluencerCodeWhereUniqueInput | InfluencerCodeWhereUniqueInput[]
    connect?: InfluencerCodeWhereUniqueInput | InfluencerCodeWhereUniqueInput[]
    update?: InfluencerCodeUpdateWithWhereUniqueWithoutInfluencerInput | InfluencerCodeUpdateWithWhereUniqueWithoutInfluencerInput[]
    updateMany?: InfluencerCodeUpdateManyWithWhereWithoutInfluencerInput | InfluencerCodeUpdateManyWithWhereWithoutInfluencerInput[]
    deleteMany?: InfluencerCodeScalarWhereInput | InfluencerCodeScalarWhereInput[]
  }

  export type InfluencerCodeUncheckedUpdateManyWithoutInfluencerNestedInput = {
    create?: XOR<InfluencerCodeCreateWithoutInfluencerInput, InfluencerCodeUncheckedCreateWithoutInfluencerInput> | InfluencerCodeCreateWithoutInfluencerInput[] | InfluencerCodeUncheckedCreateWithoutInfluencerInput[]
    connectOrCreate?: InfluencerCodeCreateOrConnectWithoutInfluencerInput | InfluencerCodeCreateOrConnectWithoutInfluencerInput[]
    upsert?: InfluencerCodeUpsertWithWhereUniqueWithoutInfluencerInput | InfluencerCodeUpsertWithWhereUniqueWithoutInfluencerInput[]
    createMany?: InfluencerCodeCreateManyInfluencerInputEnvelope
    set?: InfluencerCodeWhereUniqueInput | InfluencerCodeWhereUniqueInput[]
    disconnect?: InfluencerCodeWhereUniqueInput | InfluencerCodeWhereUniqueInput[]
    delete?: InfluencerCodeWhereUniqueInput | InfluencerCodeWhereUniqueInput[]
    connect?: InfluencerCodeWhereUniqueInput | InfluencerCodeWhereUniqueInput[]
    update?: InfluencerCodeUpdateWithWhereUniqueWithoutInfluencerInput | InfluencerCodeUpdateWithWhereUniqueWithoutInfluencerInput[]
    updateMany?: InfluencerCodeUpdateManyWithWhereWithoutInfluencerInput | InfluencerCodeUpdateManyWithWhereWithoutInfluencerInput[]
    deleteMany?: InfluencerCodeScalarWhereInput | InfluencerCodeScalarWhereInput[]
  }

  export type InfluencerCreateNestedOneWithoutCodesInput = {
    create?: XOR<InfluencerCreateWithoutCodesInput, InfluencerUncheckedCreateWithoutCodesInput>
    connectOrCreate?: InfluencerCreateOrConnectWithoutCodesInput
    connect?: InfluencerWhereUniqueInput
  }

  export type OrderAttributionCreateNestedManyWithoutInfluencerCodeInput = {
    create?: XOR<OrderAttributionCreateWithoutInfluencerCodeInput, OrderAttributionUncheckedCreateWithoutInfluencerCodeInput> | OrderAttributionCreateWithoutInfluencerCodeInput[] | OrderAttributionUncheckedCreateWithoutInfluencerCodeInput[]
    connectOrCreate?: OrderAttributionCreateOrConnectWithoutInfluencerCodeInput | OrderAttributionCreateOrConnectWithoutInfluencerCodeInput[]
    createMany?: OrderAttributionCreateManyInfluencerCodeInputEnvelope
    connect?: OrderAttributionWhereUniqueInput | OrderAttributionWhereUniqueInput[]
  }

  export type OrderAttributionUncheckedCreateNestedManyWithoutInfluencerCodeInput = {
    create?: XOR<OrderAttributionCreateWithoutInfluencerCodeInput, OrderAttributionUncheckedCreateWithoutInfluencerCodeInput> | OrderAttributionCreateWithoutInfluencerCodeInput[] | OrderAttributionUncheckedCreateWithoutInfluencerCodeInput[]
    connectOrCreate?: OrderAttributionCreateOrConnectWithoutInfluencerCodeInput | OrderAttributionCreateOrConnectWithoutInfluencerCodeInput[]
    createMany?: OrderAttributionCreateManyInfluencerCodeInputEnvelope
    connect?: OrderAttributionWhereUniqueInput | OrderAttributionWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type InfluencerUpdateOneRequiredWithoutCodesNestedInput = {
    create?: XOR<InfluencerCreateWithoutCodesInput, InfluencerUncheckedCreateWithoutCodesInput>
    connectOrCreate?: InfluencerCreateOrConnectWithoutCodesInput
    upsert?: InfluencerUpsertWithoutCodesInput
    connect?: InfluencerWhereUniqueInput
    update?: XOR<XOR<InfluencerUpdateToOneWithWhereWithoutCodesInput, InfluencerUpdateWithoutCodesInput>, InfluencerUncheckedUpdateWithoutCodesInput>
  }

  export type OrderAttributionUpdateManyWithoutInfluencerCodeNestedInput = {
    create?: XOR<OrderAttributionCreateWithoutInfluencerCodeInput, OrderAttributionUncheckedCreateWithoutInfluencerCodeInput> | OrderAttributionCreateWithoutInfluencerCodeInput[] | OrderAttributionUncheckedCreateWithoutInfluencerCodeInput[]
    connectOrCreate?: OrderAttributionCreateOrConnectWithoutInfluencerCodeInput | OrderAttributionCreateOrConnectWithoutInfluencerCodeInput[]
    upsert?: OrderAttributionUpsertWithWhereUniqueWithoutInfluencerCodeInput | OrderAttributionUpsertWithWhereUniqueWithoutInfluencerCodeInput[]
    createMany?: OrderAttributionCreateManyInfluencerCodeInputEnvelope
    set?: OrderAttributionWhereUniqueInput | OrderAttributionWhereUniqueInput[]
    disconnect?: OrderAttributionWhereUniqueInput | OrderAttributionWhereUniqueInput[]
    delete?: OrderAttributionWhereUniqueInput | OrderAttributionWhereUniqueInput[]
    connect?: OrderAttributionWhereUniqueInput | OrderAttributionWhereUniqueInput[]
    update?: OrderAttributionUpdateWithWhereUniqueWithoutInfluencerCodeInput | OrderAttributionUpdateWithWhereUniqueWithoutInfluencerCodeInput[]
    updateMany?: OrderAttributionUpdateManyWithWhereWithoutInfluencerCodeInput | OrderAttributionUpdateManyWithWhereWithoutInfluencerCodeInput[]
    deleteMany?: OrderAttributionScalarWhereInput | OrderAttributionScalarWhereInput[]
  }

  export type OrderAttributionUncheckedUpdateManyWithoutInfluencerCodeNestedInput = {
    create?: XOR<OrderAttributionCreateWithoutInfluencerCodeInput, OrderAttributionUncheckedCreateWithoutInfluencerCodeInput> | OrderAttributionCreateWithoutInfluencerCodeInput[] | OrderAttributionUncheckedCreateWithoutInfluencerCodeInput[]
    connectOrCreate?: OrderAttributionCreateOrConnectWithoutInfluencerCodeInput | OrderAttributionCreateOrConnectWithoutInfluencerCodeInput[]
    upsert?: OrderAttributionUpsertWithWhereUniqueWithoutInfluencerCodeInput | OrderAttributionUpsertWithWhereUniqueWithoutInfluencerCodeInput[]
    createMany?: OrderAttributionCreateManyInfluencerCodeInputEnvelope
    set?: OrderAttributionWhereUniqueInput | OrderAttributionWhereUniqueInput[]
    disconnect?: OrderAttributionWhereUniqueInput | OrderAttributionWhereUniqueInput[]
    delete?: OrderAttributionWhereUniqueInput | OrderAttributionWhereUniqueInput[]
    connect?: OrderAttributionWhereUniqueInput | OrderAttributionWhereUniqueInput[]
    update?: OrderAttributionUpdateWithWhereUniqueWithoutInfluencerCodeInput | OrderAttributionUpdateWithWhereUniqueWithoutInfluencerCodeInput[]
    updateMany?: OrderAttributionUpdateManyWithWhereWithoutInfluencerCodeInput | OrderAttributionUpdateManyWithWhereWithoutInfluencerCodeInput[]
    deleteMany?: OrderAttributionScalarWhereInput | OrderAttributionScalarWhereInput[]
  }

  export type InfluencerCodeCreateNestedOneWithoutAttributionsInput = {
    create?: XOR<InfluencerCodeCreateWithoutAttributionsInput, InfluencerCodeUncheckedCreateWithoutAttributionsInput>
    connectOrCreate?: InfluencerCodeCreateOrConnectWithoutAttributionsInput
    connect?: InfluencerCodeWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type InfluencerCodeUpdateOneRequiredWithoutAttributionsNestedInput = {
    create?: XOR<InfluencerCodeCreateWithoutAttributionsInput, InfluencerCodeUncheckedCreateWithoutAttributionsInput>
    connectOrCreate?: InfluencerCodeCreateOrConnectWithoutAttributionsInput
    upsert?: InfluencerCodeUpsertWithoutAttributionsInput
    connect?: InfluencerCodeWhereUniqueInput
    update?: XOR<XOR<InfluencerCodeUpdateToOneWithWhereWithoutAttributionsInput, InfluencerCodeUpdateWithoutAttributionsInput>, InfluencerCodeUncheckedUpdateWithoutAttributionsInput>
  }

  export type EnumDistributorOrderStateFieldUpdateOperationsInput = {
    set?: $Enums.DistributorOrderState
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumB2BApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.B2BApplicationStatus | EnumB2BApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.B2BApplicationStatus[] | ListEnumB2BApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.B2BApplicationStatus[] | ListEnumB2BApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumB2BApplicationStatusFilter<$PrismaModel> | $Enums.B2BApplicationStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumB2BApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.B2BApplicationStatus | EnumB2BApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.B2BApplicationStatus[] | ListEnumB2BApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.B2BApplicationStatus[] | ListEnumB2BApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumB2BApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.B2BApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumB2BApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumB2BApplicationStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumDistributorOrderStateFilter<$PrismaModel = never> = {
    equals?: $Enums.DistributorOrderState | EnumDistributorOrderStateFieldRefInput<$PrismaModel>
    in?: $Enums.DistributorOrderState[] | ListEnumDistributorOrderStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.DistributorOrderState[] | ListEnumDistributorOrderStateFieldRefInput<$PrismaModel>
    not?: NestedEnumDistributorOrderStateFilter<$PrismaModel> | $Enums.DistributorOrderState
  }

  export type NestedEnumDistributorOrderStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DistributorOrderState | EnumDistributorOrderStateFieldRefInput<$PrismaModel>
    in?: $Enums.DistributorOrderState[] | ListEnumDistributorOrderStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.DistributorOrderState[] | ListEnumDistributorOrderStateFieldRefInput<$PrismaModel>
    not?: NestedEnumDistributorOrderStateWithAggregatesFilter<$PrismaModel> | $Enums.DistributorOrderState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDistributorOrderStateFilter<$PrismaModel>
    _max?: NestedEnumDistributorOrderStateFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DistributorRegionCreateWithoutUserInput = {
    id?: string
    country: string
    region: string
    createdAt?: Date | string
  }

  export type DistributorRegionUncheckedCreateWithoutUserInput = {
    id?: string
    country: string
    region: string
    createdAt?: Date | string
  }

  export type DistributorRegionCreateOrConnectWithoutUserInput = {
    where: DistributorRegionWhereUniqueInput
    create: XOR<DistributorRegionCreateWithoutUserInput, DistributorRegionUncheckedCreateWithoutUserInput>
  }

  export type DistributorRegionCreateManyUserInputEnvelope = {
    data: DistributorRegionCreateManyUserInput | DistributorRegionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutActorInput = {
    id?: string
    action: string
    target: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutActorInput = {
    id?: string
    action: string
    target: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogCreateManyActorInputEnvelope = {
    data: AuditLogCreateManyActorInput | AuditLogCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type DistributorRegionUpsertWithWhereUniqueWithoutUserInput = {
    where: DistributorRegionWhereUniqueInput
    update: XOR<DistributorRegionUpdateWithoutUserInput, DistributorRegionUncheckedUpdateWithoutUserInput>
    create: XOR<DistributorRegionCreateWithoutUserInput, DistributorRegionUncheckedCreateWithoutUserInput>
  }

  export type DistributorRegionUpdateWithWhereUniqueWithoutUserInput = {
    where: DistributorRegionWhereUniqueInput
    data: XOR<DistributorRegionUpdateWithoutUserInput, DistributorRegionUncheckedUpdateWithoutUserInput>
  }

  export type DistributorRegionUpdateManyWithWhereWithoutUserInput = {
    where: DistributorRegionScalarWhereInput
    data: XOR<DistributorRegionUpdateManyMutationInput, DistributorRegionUncheckedUpdateManyWithoutUserInput>
  }

  export type DistributorRegionScalarWhereInput = {
    AND?: DistributorRegionScalarWhereInput | DistributorRegionScalarWhereInput[]
    OR?: DistributorRegionScalarWhereInput[]
    NOT?: DistributorRegionScalarWhereInput | DistributorRegionScalarWhereInput[]
    id?: StringFilter<"DistributorRegion"> | string
    userId?: StringFilter<"DistributorRegion"> | string
    country?: StringFilter<"DistributorRegion"> | string
    region?: StringFilter<"DistributorRegion"> | string
    createdAt?: DateTimeFilter<"DistributorRegion"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutActorInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutActorInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    target?: StringFilter<"AuditLog"> | string
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type UserCreateWithoutDistributorRegionsInput = {
    id?: string
    email: string
    name?: string | null
    shopifyCustomerId?: string | null
    role?: $Enums.RoleName
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutDistributorRegionsInput = {
    id?: string
    email: string
    name?: string | null
    shopifyCustomerId?: string | null
    role?: $Enums.RoleName
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutDistributorRegionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDistributorRegionsInput, UserUncheckedCreateWithoutDistributorRegionsInput>
  }

  export type UserUpsertWithoutDistributorRegionsInput = {
    update: XOR<UserUpdateWithoutDistributorRegionsInput, UserUncheckedUpdateWithoutDistributorRegionsInput>
    create: XOR<UserCreateWithoutDistributorRegionsInput, UserUncheckedCreateWithoutDistributorRegionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDistributorRegionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDistributorRegionsInput, UserUncheckedUpdateWithoutDistributorRegionsInput>
  }

  export type UserUpdateWithoutDistributorRegionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    shopifyCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutDistributorRegionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    shopifyCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type InfluencerCodeCreateWithoutInfluencerInput = {
    id?: string
    code: string
    commissionRate?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attributions?: OrderAttributionCreateNestedManyWithoutInfluencerCodeInput
  }

  export type InfluencerCodeUncheckedCreateWithoutInfluencerInput = {
    id?: string
    code: string
    commissionRate?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attributions?: OrderAttributionUncheckedCreateNestedManyWithoutInfluencerCodeInput
  }

  export type InfluencerCodeCreateOrConnectWithoutInfluencerInput = {
    where: InfluencerCodeWhereUniqueInput
    create: XOR<InfluencerCodeCreateWithoutInfluencerInput, InfluencerCodeUncheckedCreateWithoutInfluencerInput>
  }

  export type InfluencerCodeCreateManyInfluencerInputEnvelope = {
    data: InfluencerCodeCreateManyInfluencerInput | InfluencerCodeCreateManyInfluencerInput[]
    skipDuplicates?: boolean
  }

  export type InfluencerCodeUpsertWithWhereUniqueWithoutInfluencerInput = {
    where: InfluencerCodeWhereUniqueInput
    update: XOR<InfluencerCodeUpdateWithoutInfluencerInput, InfluencerCodeUncheckedUpdateWithoutInfluencerInput>
    create: XOR<InfluencerCodeCreateWithoutInfluencerInput, InfluencerCodeUncheckedCreateWithoutInfluencerInput>
  }

  export type InfluencerCodeUpdateWithWhereUniqueWithoutInfluencerInput = {
    where: InfluencerCodeWhereUniqueInput
    data: XOR<InfluencerCodeUpdateWithoutInfluencerInput, InfluencerCodeUncheckedUpdateWithoutInfluencerInput>
  }

  export type InfluencerCodeUpdateManyWithWhereWithoutInfluencerInput = {
    where: InfluencerCodeScalarWhereInput
    data: XOR<InfluencerCodeUpdateManyMutationInput, InfluencerCodeUncheckedUpdateManyWithoutInfluencerInput>
  }

  export type InfluencerCodeScalarWhereInput = {
    AND?: InfluencerCodeScalarWhereInput | InfluencerCodeScalarWhereInput[]
    OR?: InfluencerCodeScalarWhereInput[]
    NOT?: InfluencerCodeScalarWhereInput | InfluencerCodeScalarWhereInput[]
    id?: StringFilter<"InfluencerCode"> | string
    influencerId?: StringFilter<"InfluencerCode"> | string
    code?: StringFilter<"InfluencerCode"> | string
    commissionRate?: DecimalNullableFilter<"InfluencerCode"> | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFilter<"InfluencerCode"> | boolean
    createdAt?: DateTimeFilter<"InfluencerCode"> | Date | string
    updatedAt?: DateTimeFilter<"InfluencerCode"> | Date | string
  }

  export type InfluencerCreateWithoutCodesInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InfluencerUncheckedCreateWithoutCodesInput = {
    id?: string
    name: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InfluencerCreateOrConnectWithoutCodesInput = {
    where: InfluencerWhereUniqueInput
    create: XOR<InfluencerCreateWithoutCodesInput, InfluencerUncheckedCreateWithoutCodesInput>
  }

  export type OrderAttributionCreateWithoutInfluencerCodeInput = {
    id?: string
    shopifyOrderId: string
    subtotalAmount: Decimal | DecimalJsLike | number | string
    currencyCode: string
    createdAt?: Date | string
  }

  export type OrderAttributionUncheckedCreateWithoutInfluencerCodeInput = {
    id?: string
    shopifyOrderId: string
    subtotalAmount: Decimal | DecimalJsLike | number | string
    currencyCode: string
    createdAt?: Date | string
  }

  export type OrderAttributionCreateOrConnectWithoutInfluencerCodeInput = {
    where: OrderAttributionWhereUniqueInput
    create: XOR<OrderAttributionCreateWithoutInfluencerCodeInput, OrderAttributionUncheckedCreateWithoutInfluencerCodeInput>
  }

  export type OrderAttributionCreateManyInfluencerCodeInputEnvelope = {
    data: OrderAttributionCreateManyInfluencerCodeInput | OrderAttributionCreateManyInfluencerCodeInput[]
    skipDuplicates?: boolean
  }

  export type InfluencerUpsertWithoutCodesInput = {
    update: XOR<InfluencerUpdateWithoutCodesInput, InfluencerUncheckedUpdateWithoutCodesInput>
    create: XOR<InfluencerCreateWithoutCodesInput, InfluencerUncheckedCreateWithoutCodesInput>
    where?: InfluencerWhereInput
  }

  export type InfluencerUpdateToOneWithWhereWithoutCodesInput = {
    where?: InfluencerWhereInput
    data: XOR<InfluencerUpdateWithoutCodesInput, InfluencerUncheckedUpdateWithoutCodesInput>
  }

  export type InfluencerUpdateWithoutCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfluencerUncheckedUpdateWithoutCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderAttributionUpsertWithWhereUniqueWithoutInfluencerCodeInput = {
    where: OrderAttributionWhereUniqueInput
    update: XOR<OrderAttributionUpdateWithoutInfluencerCodeInput, OrderAttributionUncheckedUpdateWithoutInfluencerCodeInput>
    create: XOR<OrderAttributionCreateWithoutInfluencerCodeInput, OrderAttributionUncheckedCreateWithoutInfluencerCodeInput>
  }

  export type OrderAttributionUpdateWithWhereUniqueWithoutInfluencerCodeInput = {
    where: OrderAttributionWhereUniqueInput
    data: XOR<OrderAttributionUpdateWithoutInfluencerCodeInput, OrderAttributionUncheckedUpdateWithoutInfluencerCodeInput>
  }

  export type OrderAttributionUpdateManyWithWhereWithoutInfluencerCodeInput = {
    where: OrderAttributionScalarWhereInput
    data: XOR<OrderAttributionUpdateManyMutationInput, OrderAttributionUncheckedUpdateManyWithoutInfluencerCodeInput>
  }

  export type OrderAttributionScalarWhereInput = {
    AND?: OrderAttributionScalarWhereInput | OrderAttributionScalarWhereInput[]
    OR?: OrderAttributionScalarWhereInput[]
    NOT?: OrderAttributionScalarWhereInput | OrderAttributionScalarWhereInput[]
    id?: StringFilter<"OrderAttribution"> | string
    shopifyOrderId?: StringFilter<"OrderAttribution"> | string
    influencerCodeId?: StringFilter<"OrderAttribution"> | string
    subtotalAmount?: DecimalFilter<"OrderAttribution"> | Decimal | DecimalJsLike | number | string
    currencyCode?: StringFilter<"OrderAttribution"> | string
    createdAt?: DateTimeFilter<"OrderAttribution"> | Date | string
  }

  export type InfluencerCodeCreateWithoutAttributionsInput = {
    id?: string
    code: string
    commissionRate?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    influencer: InfluencerCreateNestedOneWithoutCodesInput
  }

  export type InfluencerCodeUncheckedCreateWithoutAttributionsInput = {
    id?: string
    influencerId: string
    code: string
    commissionRate?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InfluencerCodeCreateOrConnectWithoutAttributionsInput = {
    where: InfluencerCodeWhereUniqueInput
    create: XOR<InfluencerCodeCreateWithoutAttributionsInput, InfluencerCodeUncheckedCreateWithoutAttributionsInput>
  }

  export type InfluencerCodeUpsertWithoutAttributionsInput = {
    update: XOR<InfluencerCodeUpdateWithoutAttributionsInput, InfluencerCodeUncheckedUpdateWithoutAttributionsInput>
    create: XOR<InfluencerCodeCreateWithoutAttributionsInput, InfluencerCodeUncheckedCreateWithoutAttributionsInput>
    where?: InfluencerCodeWhereInput
  }

  export type InfluencerCodeUpdateToOneWithWhereWithoutAttributionsInput = {
    where?: InfluencerCodeWhereInput
    data: XOR<InfluencerCodeUpdateWithoutAttributionsInput, InfluencerCodeUncheckedUpdateWithoutAttributionsInput>
  }

  export type InfluencerCodeUpdateWithoutAttributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    commissionRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    influencer?: InfluencerUpdateOneRequiredWithoutCodesNestedInput
  }

  export type InfluencerCodeUncheckedUpdateWithoutAttributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    influencerId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    commissionRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    name?: string | null
    shopifyCustomerId?: string | null
    role?: $Enums.RoleName
    createdAt?: Date | string
    updatedAt?: Date | string
    distributorRegions?: DistributorRegionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    name?: string | null
    shopifyCustomerId?: string | null
    role?: $Enums.RoleName
    createdAt?: Date | string
    updatedAt?: Date | string
    distributorRegions?: DistributorRegionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    shopifyCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distributorRegions?: DistributorRegionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    shopifyCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distributorRegions?: DistributorRegionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DistributorRegionCreateManyUserInput = {
    id?: string
    country: string
    region: string
    createdAt?: Date | string
  }

  export type AuditLogCreateManyActorInput = {
    id?: string
    action: string
    target: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DistributorRegionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributorRegionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributorRegionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfluencerCodeCreateManyInfluencerInput = {
    id?: string
    code: string
    commissionRate?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InfluencerCodeUpdateWithoutInfluencerInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    commissionRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributions?: OrderAttributionUpdateManyWithoutInfluencerCodeNestedInput
  }

  export type InfluencerCodeUncheckedUpdateWithoutInfluencerInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    commissionRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributions?: OrderAttributionUncheckedUpdateManyWithoutInfluencerCodeNestedInput
  }

  export type InfluencerCodeUncheckedUpdateManyWithoutInfluencerInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    commissionRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderAttributionCreateManyInfluencerCodeInput = {
    id?: string
    shopifyOrderId: string
    subtotalAmount: Decimal | DecimalJsLike | number | string
    currencyCode: string
    createdAt?: Date | string
  }

  export type OrderAttributionUpdateWithoutInfluencerCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyOrderId?: StringFieldUpdateOperationsInput | string
    subtotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderAttributionUncheckedUpdateWithoutInfluencerCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyOrderId?: StringFieldUpdateOperationsInput | string
    subtotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderAttributionUncheckedUpdateManyWithoutInfluencerCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyOrderId?: StringFieldUpdateOperationsInput | string
    subtotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}