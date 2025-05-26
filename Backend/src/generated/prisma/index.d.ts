
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Song
 * 
 */
export type Song = $Result.DefaultSelection<Prisma.$SongPayload>
/**
 * Model Album
 * 
 */
export type Album = $Result.DefaultSelection<Prisma.$AlbumPayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model PlaylistSong
 * 
 */
export type PlaylistSong = $Result.DefaultSelection<Prisma.$PlaylistSongPayload>
/**
 * Model AlbumSong
 * 
 */
export type AlbumSong = $Result.DefaultSelection<Prisma.$AlbumSongPayload>
/**
 * Model starredSong
 * 
 */
export type starredSong = $Result.DefaultSelection<Prisma.$starredSongPayload>
/**
 * Model PricingPackage
 * 
 */
export type PricingPackage = $Result.DefaultSelection<Prisma.$PricingPackagePayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model PaymentTransaction
 * 
 */
export type PaymentTransaction = $Result.DefaultSelection<Prisma.$PaymentTransactionPayload>
/**
 * Model VerificationCodes
 * 
 */
export type VerificationCodes = $Result.DefaultSelection<Prisma.$VerificationCodesPayload>
/**
 * Model Stream
 * 
 */
export type Stream = $Result.DefaultSelection<Prisma.$StreamPayload>
/**
 * Model StreamSong
 * 
 */
export type StreamSong = $Result.DefaultSelection<Prisma.$StreamSongPayload>
/**
 * Model Vote
 * 
 */
export type Vote = $Result.DefaultSelection<Prisma.$VotePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const VoteType: {
  UPVOTE: 'UPVOTE',
  DOWNVOTE: 'DOWNVOTE'
};

export type VoteType = (typeof VoteType)[keyof typeof VoteType]


export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const VerificationCodeType: {
  VERIFY: 'VERIFY',
  FORGOT: 'FORGOT'
};

export type VerificationCodeType = (typeof VerificationCodeType)[keyof typeof VerificationCodeType]

}

export type VoteType = $Enums.VoteType

export const VoteType: typeof $Enums.VoteType

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type VerificationCodeType = $Enums.VerificationCodeType

export const VerificationCodeType: typeof $Enums.VerificationCodeType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.song`: Exposes CRUD operations for the **Song** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Songs
    * const songs = await prisma.song.findMany()
    * ```
    */
  get song(): Prisma.SongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.AlbumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlistSong`: Exposes CRUD operations for the **PlaylistSong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaylistSongs
    * const playlistSongs = await prisma.playlistSong.findMany()
    * ```
    */
  get playlistSong(): Prisma.PlaylistSongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.albumSong`: Exposes CRUD operations for the **AlbumSong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlbumSongs
    * const albumSongs = await prisma.albumSong.findMany()
    * ```
    */
  get albumSong(): Prisma.AlbumSongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.starredSong`: Exposes CRUD operations for the **starredSong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StarredSongs
    * const starredSongs = await prisma.starredSong.findMany()
    * ```
    */
  get starredSong(): Prisma.starredSongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pricingPackage`: Exposes CRUD operations for the **PricingPackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PricingPackages
    * const pricingPackages = await prisma.pricingPackage.findMany()
    * ```
    */
  get pricingPackage(): Prisma.PricingPackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentTransaction`: Exposes CRUD operations for the **PaymentTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentTransactions
    * const paymentTransactions = await prisma.paymentTransaction.findMany()
    * ```
    */
  get paymentTransaction(): Prisma.PaymentTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationCodes`: Exposes CRUD operations for the **VerificationCodes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationCodes
    * const verificationCodes = await prisma.verificationCodes.findMany()
    * ```
    */
  get verificationCodes(): Prisma.VerificationCodesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stream`: Exposes CRUD operations for the **Stream** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Streams
    * const streams = await prisma.stream.findMany()
    * ```
    */
  get stream(): Prisma.StreamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.streamSong`: Exposes CRUD operations for the **StreamSong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StreamSongs
    * const streamSongs = await prisma.streamSong.findMany()
    * ```
    */
  get streamSong(): Prisma.StreamSongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **Vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.vote.findMany()
    * ```
    */
  get vote(): Prisma.VoteDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Song: 'Song',
    Album: 'Album',
    Playlist: 'Playlist',
    PlaylistSong: 'PlaylistSong',
    AlbumSong: 'AlbumSong',
    starredSong: 'starredSong',
    PricingPackage: 'PricingPackage',
    Subscription: 'Subscription',
    PaymentTransaction: 'PaymentTransaction',
    VerificationCodes: 'VerificationCodes',
    Stream: 'Stream',
    StreamSong: 'StreamSong',
    Vote: 'Vote'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "song" | "album" | "playlist" | "playlistSong" | "albumSong" | "starredSong" | "pricingPackage" | "subscription" | "paymentTransaction" | "verificationCodes" | "stream" | "streamSong" | "vote"
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
      Song: {
        payload: Prisma.$SongPayload<ExtArgs>
        fields: Prisma.SongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findFirst: {
            args: Prisma.SongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findMany: {
            args: Prisma.SongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          create: {
            args: Prisma.SongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          createMany: {
            args: Prisma.SongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          delete: {
            args: Prisma.SongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          update: {
            args: Prisma.SongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          deleteMany: {
            args: Prisma.SongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SongUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          upsert: {
            args: Prisma.SongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          aggregate: {
            args: Prisma.SongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSong>
          }
          groupBy: {
            args: Prisma.SongGroupByArgs<ExtArgs>
            result: $Utils.Optional<SongGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongCountArgs<ExtArgs>
            result: $Utils.Optional<SongCountAggregateOutputType> | number
          }
        }
      }
      Album: {
        payload: Prisma.$AlbumPayload<ExtArgs>
        fields: Prisma.AlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findFirst: {
            args: Prisma.AlbumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findMany: {
            args: Prisma.AlbumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          create: {
            args: Prisma.AlbumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          createMany: {
            args: Prisma.AlbumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          delete: {
            args: Prisma.AlbumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          update: {
            args: Prisma.AlbumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          deleteMany: {
            args: Prisma.AlbumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlbumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          upsert: {
            args: Prisma.AlbumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          aggregate: {
            args: Prisma.AlbumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbum>
          }
          groupBy: {
            args: Prisma.AlbumGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      PlaylistSong: {
        payload: Prisma.$PlaylistSongPayload<ExtArgs>
        fields: Prisma.PlaylistSongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistSongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistSongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload>
          }
          findFirst: {
            args: Prisma.PlaylistSongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistSongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload>
          }
          findMany: {
            args: Prisma.PlaylistSongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload>[]
          }
          create: {
            args: Prisma.PlaylistSongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload>
          }
          createMany: {
            args: Prisma.PlaylistSongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistSongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload>[]
          }
          delete: {
            args: Prisma.PlaylistSongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload>
          }
          update: {
            args: Prisma.PlaylistSongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistSongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistSongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistSongUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistSongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistSongPayload>
          }
          aggregate: {
            args: Prisma.PlaylistSongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylistSong>
          }
          groupBy: {
            args: Prisma.PlaylistSongGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistSongGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistSongCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistSongCountAggregateOutputType> | number
          }
        }
      }
      AlbumSong: {
        payload: Prisma.$AlbumSongPayload<ExtArgs>
        fields: Prisma.AlbumSongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumSongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumSongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSongPayload>
          }
          findFirst: {
            args: Prisma.AlbumSongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumSongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSongPayload>
          }
          findMany: {
            args: Prisma.AlbumSongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSongPayload>[]
          }
          create: {
            args: Prisma.AlbumSongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSongPayload>
          }
          createMany: {
            args: Prisma.AlbumSongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumSongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSongPayload>[]
          }
          delete: {
            args: Prisma.AlbumSongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSongPayload>
          }
          update: {
            args: Prisma.AlbumSongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSongPayload>
          }
          deleteMany: {
            args: Prisma.AlbumSongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumSongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlbumSongUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSongPayload>[]
          }
          upsert: {
            args: Prisma.AlbumSongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSongPayload>
          }
          aggregate: {
            args: Prisma.AlbumSongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbumSong>
          }
          groupBy: {
            args: Prisma.AlbumSongGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumSongGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumSongCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumSongCountAggregateOutputType> | number
          }
        }
      }
      starredSong: {
        payload: Prisma.$starredSongPayload<ExtArgs>
        fields: Prisma.starredSongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.starredSongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$starredSongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.starredSongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$starredSongPayload>
          }
          findFirst: {
            args: Prisma.starredSongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$starredSongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.starredSongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$starredSongPayload>
          }
          findMany: {
            args: Prisma.starredSongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$starredSongPayload>[]
          }
          create: {
            args: Prisma.starredSongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$starredSongPayload>
          }
          createMany: {
            args: Prisma.starredSongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.starredSongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$starredSongPayload>[]
          }
          delete: {
            args: Prisma.starredSongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$starredSongPayload>
          }
          update: {
            args: Prisma.starredSongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$starredSongPayload>
          }
          deleteMany: {
            args: Prisma.starredSongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.starredSongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.starredSongUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$starredSongPayload>[]
          }
          upsert: {
            args: Prisma.starredSongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$starredSongPayload>
          }
          aggregate: {
            args: Prisma.StarredSongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStarredSong>
          }
          groupBy: {
            args: Prisma.starredSongGroupByArgs<ExtArgs>
            result: $Utils.Optional<StarredSongGroupByOutputType>[]
          }
          count: {
            args: Prisma.starredSongCountArgs<ExtArgs>
            result: $Utils.Optional<StarredSongCountAggregateOutputType> | number
          }
        }
      }
      PricingPackage: {
        payload: Prisma.$PricingPackagePayload<ExtArgs>
        fields: Prisma.PricingPackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PricingPackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PricingPackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPackagePayload>
          }
          findFirst: {
            args: Prisma.PricingPackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PricingPackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPackagePayload>
          }
          findMany: {
            args: Prisma.PricingPackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPackagePayload>[]
          }
          create: {
            args: Prisma.PricingPackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPackagePayload>
          }
          createMany: {
            args: Prisma.PricingPackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PricingPackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPackagePayload>[]
          }
          delete: {
            args: Prisma.PricingPackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPackagePayload>
          }
          update: {
            args: Prisma.PricingPackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPackagePayload>
          }
          deleteMany: {
            args: Prisma.PricingPackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PricingPackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PricingPackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPackagePayload>[]
          }
          upsert: {
            args: Prisma.PricingPackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPackagePayload>
          }
          aggregate: {
            args: Prisma.PricingPackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePricingPackage>
          }
          groupBy: {
            args: Prisma.PricingPackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PricingPackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PricingPackageCountArgs<ExtArgs>
            result: $Utils.Optional<PricingPackageCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      PaymentTransaction: {
        payload: Prisma.$PaymentTransactionPayload<ExtArgs>
        fields: Prisma.PaymentTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          findFirst: {
            args: Prisma.PaymentTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          findMany: {
            args: Prisma.PaymentTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>[]
          }
          create: {
            args: Prisma.PaymentTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          createMany: {
            args: Prisma.PaymentTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>[]
          }
          delete: {
            args: Prisma.PaymentTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          update: {
            args: Prisma.PaymentTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          deleteMany: {
            args: Prisma.PaymentTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>[]
          }
          upsert: {
            args: Prisma.PaymentTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>
          }
          aggregate: {
            args: Prisma.PaymentTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentTransaction>
          }
          groupBy: {
            args: Prisma.PaymentTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentTransactionCountAggregateOutputType> | number
          }
        }
      }
      VerificationCodes: {
        payload: Prisma.$VerificationCodesPayload<ExtArgs>
        fields: Prisma.VerificationCodesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationCodesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationCodesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>
          }
          findFirst: {
            args: Prisma.VerificationCodesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationCodesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>
          }
          findMany: {
            args: Prisma.VerificationCodesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>[]
          }
          create: {
            args: Prisma.VerificationCodesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>
          }
          createMany: {
            args: Prisma.VerificationCodesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCodesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>[]
          }
          delete: {
            args: Prisma.VerificationCodesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>
          }
          update: {
            args: Prisma.VerificationCodesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>
          }
          deleteMany: {
            args: Prisma.VerificationCodesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationCodesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationCodesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>[]
          }
          upsert: {
            args: Prisma.VerificationCodesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>
          }
          aggregate: {
            args: Prisma.VerificationCodesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationCodes>
          }
          groupBy: {
            args: Prisma.VerificationCodesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodesGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCodesCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodesCountAggregateOutputType> | number
          }
        }
      }
      Stream: {
        payload: Prisma.$StreamPayload<ExtArgs>
        fields: Prisma.StreamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          findFirst: {
            args: Prisma.StreamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          findMany: {
            args: Prisma.StreamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>[]
          }
          create: {
            args: Prisma.StreamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          createMany: {
            args: Prisma.StreamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>[]
          }
          delete: {
            args: Prisma.StreamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          update: {
            args: Prisma.StreamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          deleteMany: {
            args: Prisma.StreamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>[]
          }
          upsert: {
            args: Prisma.StreamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          aggregate: {
            args: Prisma.StreamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStream>
          }
          groupBy: {
            args: Prisma.StreamGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreamCountArgs<ExtArgs>
            result: $Utils.Optional<StreamCountAggregateOutputType> | number
          }
        }
      }
      StreamSong: {
        payload: Prisma.$StreamSongPayload<ExtArgs>
        fields: Prisma.StreamSongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreamSongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreamSongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSongPayload>
          }
          findFirst: {
            args: Prisma.StreamSongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreamSongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSongPayload>
          }
          findMany: {
            args: Prisma.StreamSongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSongPayload>[]
          }
          create: {
            args: Prisma.StreamSongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSongPayload>
          }
          createMany: {
            args: Prisma.StreamSongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreamSongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSongPayload>[]
          }
          delete: {
            args: Prisma.StreamSongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSongPayload>
          }
          update: {
            args: Prisma.StreamSongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSongPayload>
          }
          deleteMany: {
            args: Prisma.StreamSongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreamSongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreamSongUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSongPayload>[]
          }
          upsert: {
            args: Prisma.StreamSongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSongPayload>
          }
          aggregate: {
            args: Prisma.StreamSongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreamSong>
          }
          groupBy: {
            args: Prisma.StreamSongGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamSongGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreamSongCountArgs<ExtArgs>
            result: $Utils.Optional<StreamSongCountAggregateOutputType> | number
          }
        }
      }
      Vote: {
        payload: Prisma.$VotePayload<ExtArgs>
        fields: Prisma.VoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findFirst: {
            args: Prisma.VoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findMany: {
            args: Prisma.VoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          create: {
            args: Prisma.VoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          createMany: {
            args: Prisma.VoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          delete: {
            args: Prisma.VoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          update: {
            args: Prisma.VoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          deleteMany: {
            args: Prisma.VoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          upsert: {
            args: Prisma.VoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote>
          }
          groupBy: {
            args: Prisma.VoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoteCountArgs<ExtArgs>
            result: $Utils.Optional<VoteCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    song?: SongOmit
    album?: AlbumOmit
    playlist?: PlaylistOmit
    playlistSong?: PlaylistSongOmit
    albumSong?: AlbumSongOmit
    starredSong?: starredSongOmit
    pricingPackage?: PricingPackageOmit
    subscription?: SubscriptionOmit
    paymentTransaction?: PaymentTransactionOmit
    verificationCodes?: VerificationCodesOmit
    stream?: StreamOmit
    streamSong?: StreamSongOmit
    vote?: VoteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    Playlist: number
    starredSongs: number
    Subscription: number
    PaymentTransaction: number
    Streams: number
    Votes: number
    StreamSongs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Playlist?: boolean | UserCountOutputTypeCountPlaylistArgs
    starredSongs?: boolean | UserCountOutputTypeCountStarredSongsArgs
    Subscription?: boolean | UserCountOutputTypeCountSubscriptionArgs
    PaymentTransaction?: boolean | UserCountOutputTypeCountPaymentTransactionArgs
    Streams?: boolean | UserCountOutputTypeCountStreamsArgs
    Votes?: boolean | UserCountOutputTypeCountVotesArgs
    StreamSongs?: boolean | UserCountOutputTypeCountStreamSongsArgs
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
  export type UserCountOutputTypeCountPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStarredSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: starredSongWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStreamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStreamSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamSongWhereInput
  }


  /**
   * Count Type SongCountOutputType
   */

  export type SongCountOutputType = {
    PlaylistSong: number
    AlbumSongs: number
    starredSongs: number
  }

  export type SongCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PlaylistSong?: boolean | SongCountOutputTypeCountPlaylistSongArgs
    AlbumSongs?: boolean | SongCountOutputTypeCountAlbumSongsArgs
    starredSongs?: boolean | SongCountOutputTypeCountStarredSongsArgs
  }

  // Custom InputTypes
  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCountOutputType
     */
    select?: SongCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountPlaylistSongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistSongWhereInput
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountAlbumSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumSongWhereInput
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountStarredSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: starredSongWhereInput
  }


  /**
   * Count Type AlbumCountOutputType
   */

  export type AlbumCountOutputType = {
    AlbumSongs: number
  }

  export type AlbumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AlbumSongs?: boolean | AlbumCountOutputTypeCountAlbumSongsArgs
  }

  // Custom InputTypes
  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     */
    select?: AlbumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountAlbumSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumSongWhereInput
  }


  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    PlaylistSong: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PlaylistSong?: boolean | PlaylistCountOutputTypeCountPlaylistSongArgs
  }

  // Custom InputTypes
  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountPlaylistSongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistSongWhereInput
  }


  /**
   * Count Type PricingPackageCountOutputType
   */

  export type PricingPackageCountOutputType = {
    Subscription: number
    PaymentTransaction: number
  }

  export type PricingPackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subscription?: boolean | PricingPackageCountOutputTypeCountSubscriptionArgs
    PaymentTransaction?: boolean | PricingPackageCountOutputTypeCountPaymentTransactionArgs
  }

  // Custom InputTypes
  /**
   * PricingPackageCountOutputType without action
   */
  export type PricingPackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPackageCountOutputType
     */
    select?: PricingPackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PricingPackageCountOutputType without action
   */
  export type PricingPackageCountOutputTypeCountSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * PricingPackageCountOutputType without action
   */
  export type PricingPackageCountOutputTypeCountPaymentTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentTransactionWhereInput
  }


  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    PaymentTransaction: number
  }

  export type SubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PaymentTransaction?: boolean | SubscriptionCountOutputTypeCountPaymentTransactionArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountPaymentTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentTransactionWhereInput
  }


  /**
   * Count Type StreamCountOutputType
   */

  export type StreamCountOutputType = {
    songs: number
  }

  export type StreamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | StreamCountOutputTypeCountSongsArgs
  }

  // Custom InputTypes
  /**
   * StreamCountOutputType without action
   */
  export type StreamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamCountOutputType
     */
    select?: StreamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StreamCountOutputType without action
   */
  export type StreamCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamSongWhereInput
  }


  /**
   * Count Type StreamSongCountOutputType
   */

  export type StreamSongCountOutputType = {
    votes: number
  }

  export type StreamSongCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | StreamSongCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * StreamSongCountOutputType without action
   */
  export type StreamSongCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSongCountOutputType
     */
    select?: StreamSongCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StreamSongCountOutputType without action
   */
  export type StreamSongCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
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
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    socialLogin: boolean | null
    role: $Enums.UserRole | null
    isSubscribed: boolean | null
    avatarUrl: string | null
    publicId: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    socialLogin: boolean | null
    role: $Enums.UserRole | null
    isSubscribed: boolean | null
    avatarUrl: string | null
    publicId: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phoneNumber: number
    password: number
    socialLogin: number
    role: number
    isSubscribed: number
    avatarUrl: number
    publicId: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    password?: true
    socialLogin?: true
    role?: true
    isSubscribed?: true
    avatarUrl?: true
    publicId?: true
    createdAt?: true
    updateAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    password?: true
    socialLogin?: true
    role?: true
    isSubscribed?: true
    avatarUrl?: true
    publicId?: true
    createdAt?: true
    updateAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    password?: true
    socialLogin?: true
    role?: true
    isSubscribed?: true
    avatarUrl?: true
    publicId?: true
    createdAt?: true
    updateAt?: true
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
    firstName: string
    lastName: string
    email: string
    phoneNumber: string | null
    password: string | null
    socialLogin: boolean
    role: $Enums.UserRole
    isSubscribed: boolean
    avatarUrl: string | null
    publicId: string | null
    createdAt: Date
    updateAt: Date
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
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    socialLogin?: boolean
    role?: boolean
    isSubscribed?: boolean
    avatarUrl?: boolean
    publicId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    Playlist?: boolean | User$PlaylistArgs<ExtArgs>
    starredSongs?: boolean | User$starredSongsArgs<ExtArgs>
    Subscription?: boolean | User$SubscriptionArgs<ExtArgs>
    PaymentTransaction?: boolean | User$PaymentTransactionArgs<ExtArgs>
    Streams?: boolean | User$StreamsArgs<ExtArgs>
    Votes?: boolean | User$VotesArgs<ExtArgs>
    StreamSongs?: boolean | User$StreamSongsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    socialLogin?: boolean
    role?: boolean
    isSubscribed?: boolean
    avatarUrl?: boolean
    publicId?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    socialLogin?: boolean
    role?: boolean
    isSubscribed?: boolean
    avatarUrl?: boolean
    publicId?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    socialLogin?: boolean
    role?: boolean
    isSubscribed?: boolean
    avatarUrl?: boolean
    publicId?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phoneNumber" | "password" | "socialLogin" | "role" | "isSubscribed" | "avatarUrl" | "publicId" | "createdAt" | "updateAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Playlist?: boolean | User$PlaylistArgs<ExtArgs>
    starredSongs?: boolean | User$starredSongsArgs<ExtArgs>
    Subscription?: boolean | User$SubscriptionArgs<ExtArgs>
    PaymentTransaction?: boolean | User$PaymentTransactionArgs<ExtArgs>
    Streams?: boolean | User$StreamsArgs<ExtArgs>
    Votes?: boolean | User$VotesArgs<ExtArgs>
    StreamSongs?: boolean | User$StreamSongsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Playlist: Prisma.$PlaylistPayload<ExtArgs>[]
      starredSongs: Prisma.$starredSongPayload<ExtArgs>[]
      Subscription: Prisma.$SubscriptionPayload<ExtArgs>[]
      PaymentTransaction: Prisma.$PaymentTransactionPayload<ExtArgs>[]
      Streams: Prisma.$StreamPayload<ExtArgs>[]
      Votes: Prisma.$VotePayload<ExtArgs>[]
      StreamSongs: Prisma.$StreamSongPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      phoneNumber: string | null
      password: string | null
      socialLogin: boolean
      role: $Enums.UserRole
      isSubscribed: boolean
      avatarUrl: string | null
      publicId: string | null
      createdAt: Date
      updateAt: Date
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
    Playlist<T extends User$PlaylistArgs<ExtArgs> = {}>(args?: Subset<T, User$PlaylistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    starredSongs<T extends User$starredSongsArgs<ExtArgs> = {}>(args?: Subset<T, User$starredSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$starredSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Subscription<T extends User$SubscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$SubscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PaymentTransaction<T extends User$PaymentTransactionArgs<ExtArgs> = {}>(args?: Subset<T, User$PaymentTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Streams<T extends User$StreamsArgs<ExtArgs> = {}>(args?: Subset<T, User$StreamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Votes<T extends User$VotesArgs<ExtArgs> = {}>(args?: Subset<T, User$VotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    StreamSongs<T extends User$StreamSongsArgs<ExtArgs> = {}>(args?: Subset<T, User$StreamSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly socialLogin: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isSubscribed: FieldRef<"User", 'Boolean'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly publicId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
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
   * User.Playlist
   */
  export type User$PlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * User.starredSongs
   */
  export type User$starredSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the starredSong
     */
    select?: starredSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the starredSong
     */
    omit?: starredSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: starredSongInclude<ExtArgs> | null
    where?: starredSongWhereInput
    orderBy?: starredSongOrderByWithRelationInput | starredSongOrderByWithRelationInput[]
    cursor?: starredSongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StarredSongScalarFieldEnum | StarredSongScalarFieldEnum[]
  }

  /**
   * User.Subscription
   */
  export type User$SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * User.PaymentTransaction
   */
  export type User$PaymentTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    where?: PaymentTransactionWhereInput
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    cursor?: PaymentTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentTransactionScalarFieldEnum | PaymentTransactionScalarFieldEnum[]
  }

  /**
   * User.Streams
   */
  export type User$StreamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    where?: StreamWhereInput
    orderBy?: StreamOrderByWithRelationInput | StreamOrderByWithRelationInput[]
    cursor?: StreamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }

  /**
   * User.Votes
   */
  export type User$VotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * User.StreamSongs
   */
  export type User$StreamSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSong
     */
    select?: StreamSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSong
     */
    omit?: StreamSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSongInclude<ExtArgs> | null
    where?: StreamSongWhereInput
    orderBy?: StreamSongOrderByWithRelationInput | StreamSongOrderByWithRelationInput[]
    cursor?: StreamSongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamSongScalarFieldEnum | StreamSongScalarFieldEnum[]
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
   * Model Song
   */

  export type AggregateSong = {
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  export type SongAvgAggregateOutputType = {
    id: number | null
    duration: number | null
  }

  export type SongSumAggregateOutputType = {
    id: number | null
    duration: number | null
  }

  export type SongMinAggregateOutputType = {
    id: number | null
    title: string | null
    artist: string | null
    duration: number | null
    lyrics: string | null
    songUrl: string | null
    coverImage: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type SongMaxAggregateOutputType = {
    id: number | null
    title: string | null
    artist: string | null
    duration: number | null
    lyrics: string | null
    songUrl: string | null
    coverImage: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type SongCountAggregateOutputType = {
    id: number
    title: number
    artist: number
    duration: number
    lyrics: number
    songUrl: number
    coverImage: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type SongAvgAggregateInputType = {
    id?: true
    duration?: true
  }

  export type SongSumAggregateInputType = {
    id?: true
    duration?: true
  }

  export type SongMinAggregateInputType = {
    id?: true
    title?: true
    artist?: true
    duration?: true
    lyrics?: true
    songUrl?: true
    coverImage?: true
    createdAt?: true
    updateAt?: true
  }

  export type SongMaxAggregateInputType = {
    id?: true
    title?: true
    artist?: true
    duration?: true
    lyrics?: true
    songUrl?: true
    coverImage?: true
    createdAt?: true
    updateAt?: true
  }

  export type SongCountAggregateInputType = {
    id?: true
    title?: true
    artist?: true
    duration?: true
    lyrics?: true
    songUrl?: true
    coverImage?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type SongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Song to aggregate.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Songs
    **/
    _count?: true | SongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongMaxAggregateInputType
  }

  export type GetSongAggregateType<T extends SongAggregateArgs> = {
        [P in keyof T & keyof AggregateSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSong[P]>
      : GetScalarType<T[P], AggregateSong[P]>
  }




  export type SongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
    orderBy?: SongOrderByWithAggregationInput | SongOrderByWithAggregationInput[]
    by: SongScalarFieldEnum[] | SongScalarFieldEnum
    having?: SongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongCountAggregateInputType | true
    _avg?: SongAvgAggregateInputType
    _sum?: SongSumAggregateInputType
    _min?: SongMinAggregateInputType
    _max?: SongMaxAggregateInputType
  }

  export type SongGroupByOutputType = {
    id: number
    title: string
    artist: string
    duration: number
    lyrics: string
    songUrl: string
    coverImage: string
    createdAt: Date
    updateAt: Date
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  type GetSongGroupByPayload<T extends SongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongGroupByOutputType[P]>
            : GetScalarType<T[P], SongGroupByOutputType[P]>
        }
      >
    >


  export type SongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    artist?: boolean
    duration?: boolean
    lyrics?: boolean
    songUrl?: boolean
    coverImage?: boolean
    createdAt?: boolean
    updateAt?: boolean
    PlaylistSong?: boolean | Song$PlaylistSongArgs<ExtArgs>
    AlbumSongs?: boolean | Song$AlbumSongsArgs<ExtArgs>
    starredSongs?: boolean | Song$starredSongsArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    artist?: boolean
    duration?: boolean
    lyrics?: boolean
    songUrl?: boolean
    coverImage?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["song"]>

  export type SongSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    artist?: boolean
    duration?: boolean
    lyrics?: boolean
    songUrl?: boolean
    coverImage?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["song"]>

  export type SongSelectScalar = {
    id?: boolean
    title?: boolean
    artist?: boolean
    duration?: boolean
    lyrics?: boolean
    songUrl?: boolean
    coverImage?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type SongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "artist" | "duration" | "lyrics" | "songUrl" | "coverImage" | "createdAt" | "updateAt", ExtArgs["result"]["song"]>
  export type SongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PlaylistSong?: boolean | Song$PlaylistSongArgs<ExtArgs>
    AlbumSongs?: boolean | Song$AlbumSongsArgs<ExtArgs>
    starredSongs?: boolean | Song$starredSongsArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SongIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SongIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Song"
    objects: {
      PlaylistSong: Prisma.$PlaylistSongPayload<ExtArgs>[]
      AlbumSongs: Prisma.$AlbumSongPayload<ExtArgs>[]
      starredSongs: Prisma.$starredSongPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      artist: string
      duration: number
      lyrics: string
      songUrl: string
      coverImage: string
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["song"]>
    composites: {}
  }

  type SongGetPayload<S extends boolean | null | undefined | SongDefaultArgs> = $Result.GetResult<Prisma.$SongPayload, S>

  type SongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SongCountAggregateInputType | true
    }

  export interface SongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Song'], meta: { name: 'Song' } }
    /**
     * Find zero or one Song that matches the filter.
     * @param {SongFindUniqueArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SongFindUniqueArgs>(args: SelectSubset<T, SongFindUniqueArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Song that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SongFindUniqueOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SongFindUniqueOrThrowArgs>(args: SelectSubset<T, SongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Song that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SongFindFirstArgs>(args?: SelectSubset<T, SongFindFirstArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Song that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SongFindFirstOrThrowArgs>(args?: SelectSubset<T, SongFindFirstOrThrowArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Songs
     * const songs = await prisma.song.findMany()
     * 
     * // Get first 10 Songs
     * const songs = await prisma.song.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songWithIdOnly = await prisma.song.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SongFindManyArgs>(args?: SelectSubset<T, SongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Song.
     * @param {SongCreateArgs} args - Arguments to create a Song.
     * @example
     * // Create one Song
     * const Song = await prisma.song.create({
     *   data: {
     *     // ... data to create a Song
     *   }
     * })
     * 
     */
    create<T extends SongCreateArgs>(args: SelectSubset<T, SongCreateArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Songs.
     * @param {SongCreateManyArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SongCreateManyArgs>(args?: SelectSubset<T, SongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Songs and returns the data saved in the database.
     * @param {SongCreateManyAndReturnArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Songs and only return the `id`
     * const songWithIdOnly = await prisma.song.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SongCreateManyAndReturnArgs>(args?: SelectSubset<T, SongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Song.
     * @param {SongDeleteArgs} args - Arguments to delete one Song.
     * @example
     * // Delete one Song
     * const Song = await prisma.song.delete({
     *   where: {
     *     // ... filter to delete one Song
     *   }
     * })
     * 
     */
    delete<T extends SongDeleteArgs>(args: SelectSubset<T, SongDeleteArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Song.
     * @param {SongUpdateArgs} args - Arguments to update one Song.
     * @example
     * // Update one Song
     * const song = await prisma.song.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SongUpdateArgs>(args: SelectSubset<T, SongUpdateArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Songs.
     * @param {SongDeleteManyArgs} args - Arguments to filter Songs to delete.
     * @example
     * // Delete a few Songs
     * const { count } = await prisma.song.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SongDeleteManyArgs>(args?: SelectSubset<T, SongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SongUpdateManyArgs>(args: SelectSubset<T, SongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs and returns the data updated in the database.
     * @param {SongUpdateManyAndReturnArgs} args - Arguments to update many Songs.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Songs and only return the `id`
     * const songWithIdOnly = await prisma.song.updateManyAndReturn({
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
    updateManyAndReturn<T extends SongUpdateManyAndReturnArgs>(args: SelectSubset<T, SongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Song.
     * @param {SongUpsertArgs} args - Arguments to update or create a Song.
     * @example
     * // Update or create a Song
     * const song = await prisma.song.upsert({
     *   create: {
     *     // ... data to create a Song
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Song we want to update
     *   }
     * })
     */
    upsert<T extends SongUpsertArgs>(args: SelectSubset<T, SongUpsertArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCountArgs} args - Arguments to filter Songs to count.
     * @example
     * // Count the number of Songs
     * const count = await prisma.song.count({
     *   where: {
     *     // ... the filter for the Songs we want to count
     *   }
     * })
    **/
    count<T extends SongCountArgs>(
      args?: Subset<T, SongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SongAggregateArgs>(args: Subset<T, SongAggregateArgs>): Prisma.PrismaPromise<GetSongAggregateType<T>>

    /**
     * Group by Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGroupByArgs} args - Group by arguments.
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
      T extends SongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongGroupByArgs['orderBy'] }
        : { orderBy?: SongGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Song model
   */
  readonly fields: SongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Song.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PlaylistSong<T extends Song$PlaylistSongArgs<ExtArgs> = {}>(args?: Subset<T, Song$PlaylistSongArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AlbumSongs<T extends Song$AlbumSongsArgs<ExtArgs> = {}>(args?: Subset<T, Song$AlbumSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    starredSongs<T extends Song$starredSongsArgs<ExtArgs> = {}>(args?: Subset<T, Song$starredSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$starredSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Song model
   */
  interface SongFieldRefs {
    readonly id: FieldRef<"Song", 'Int'>
    readonly title: FieldRef<"Song", 'String'>
    readonly artist: FieldRef<"Song", 'String'>
    readonly duration: FieldRef<"Song", 'Int'>
    readonly lyrics: FieldRef<"Song", 'String'>
    readonly songUrl: FieldRef<"Song", 'String'>
    readonly coverImage: FieldRef<"Song", 'String'>
    readonly createdAt: FieldRef<"Song", 'DateTime'>
    readonly updateAt: FieldRef<"Song", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Song findUnique
   */
  export type SongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song findUniqueOrThrow
   */
  export type SongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song findFirst
   */
  export type SongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song findFirstOrThrow
   */
  export type SongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song findMany
   */
  export type SongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Songs to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song create
   */
  export type SongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to create a Song.
     */
    data: XOR<SongCreateInput, SongUncheckedCreateInput>
  }

  /**
   * Song createMany
   */
  export type SongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Song createManyAndReturn
   */
  export type SongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Song update
   */
  export type SongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to update a Song.
     */
    data: XOR<SongUpdateInput, SongUncheckedUpdateInput>
    /**
     * Choose, which Song to update.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song updateMany
   */
  export type SongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Songs.
     */
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongWhereInput
    /**
     * Limit how many Songs to update.
     */
    limit?: number
  }

  /**
   * Song updateManyAndReturn
   */
  export type SongUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * The data used to update Songs.
     */
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongWhereInput
    /**
     * Limit how many Songs to update.
     */
    limit?: number
  }

  /**
   * Song upsert
   */
  export type SongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The filter to search for the Song to update in case it exists.
     */
    where: SongWhereUniqueInput
    /**
     * In case the Song found by the `where` argument doesn't exist, create a new Song with this data.
     */
    create: XOR<SongCreateInput, SongUncheckedCreateInput>
    /**
     * In case the Song was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongUpdateInput, SongUncheckedUpdateInput>
  }

  /**
   * Song delete
   */
  export type SongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter which Song to delete.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song deleteMany
   */
  export type SongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Songs to delete
     */
    where?: SongWhereInput
    /**
     * Limit how many Songs to delete.
     */
    limit?: number
  }

  /**
   * Song.PlaylistSong
   */
  export type Song$PlaylistSongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    where?: PlaylistSongWhereInput
    orderBy?: PlaylistSongOrderByWithRelationInput | PlaylistSongOrderByWithRelationInput[]
    cursor?: PlaylistSongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistSongScalarFieldEnum | PlaylistSongScalarFieldEnum[]
  }

  /**
   * Song.AlbumSongs
   */
  export type Song$AlbumSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumSong
     */
    select?: AlbumSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSong
     */
    omit?: AlbumSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSongInclude<ExtArgs> | null
    where?: AlbumSongWhereInput
    orderBy?: AlbumSongOrderByWithRelationInput | AlbumSongOrderByWithRelationInput[]
    cursor?: AlbumSongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumSongScalarFieldEnum | AlbumSongScalarFieldEnum[]
  }

  /**
   * Song.starredSongs
   */
  export type Song$starredSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the starredSong
     */
    select?: starredSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the starredSong
     */
    omit?: starredSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: starredSongInclude<ExtArgs> | null
    where?: starredSongWhereInput
    orderBy?: starredSongOrderByWithRelationInput | starredSongOrderByWithRelationInput[]
    cursor?: starredSongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StarredSongScalarFieldEnum | StarredSongScalarFieldEnum[]
  }

  /**
   * Song without action
   */
  export type SongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Song
     */
    omit?: SongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
  }


  /**
   * Model Album
   */

  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumAvgAggregateOutputType = {
    id: number | null
  }

  export type AlbumSumAggregateOutputType = {
    id: number | null
  }

  export type AlbumMinAggregateOutputType = {
    id: number | null
    albumName: string | null
    artist: string | null
    coverImage: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: number | null
    albumName: string | null
    artist: string | null
    coverImage: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    albumName: number
    artist: number
    coverImage: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type AlbumAvgAggregateInputType = {
    id?: true
  }

  export type AlbumSumAggregateInputType = {
    id?: true
  }

  export type AlbumMinAggregateInputType = {
    id?: true
    albumName?: true
    artist?: true
    coverImage?: true
    createdAt?: true
    updateAt?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    albumName?: true
    artist?: true
    coverImage?: true
    createdAt?: true
    updateAt?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    albumName?: true
    artist?: true
    coverImage?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type AlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Album to aggregate.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type AlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithAggregationInput | AlbumOrderByWithAggregationInput[]
    by: AlbumScalarFieldEnum[] | AlbumScalarFieldEnum
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _avg?: AlbumAvgAggregateInputType
    _sum?: AlbumSumAggregateInputType
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    id: number
    albumName: string
    artist: string
    coverImage: string
    createdAt: Date
    updateAt: Date
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    albumName?: boolean
    artist?: boolean
    coverImage?: boolean
    createdAt?: boolean
    updateAt?: boolean
    AlbumSongs?: boolean | Album$AlbumSongsArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    albumName?: boolean
    artist?: boolean
    coverImage?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    albumName?: boolean
    artist?: boolean
    coverImage?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectScalar = {
    id?: boolean
    albumName?: boolean
    artist?: boolean
    coverImage?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type AlbumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "albumName" | "artist" | "coverImage" | "createdAt" | "updateAt", ExtArgs["result"]["album"]>
  export type AlbumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AlbumSongs?: boolean | Album$AlbumSongsArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AlbumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Album"
    objects: {
      AlbumSongs: Prisma.$AlbumSongPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      albumName: string
      artist: string
      coverImage: string
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["album"]>
    composites: {}
  }

  type AlbumGetPayload<S extends boolean | null | undefined | AlbumDefaultArgs> = $Result.GetResult<Prisma.$AlbumPayload, S>

  type AlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlbumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlbumCountAggregateInputType | true
    }

  export interface AlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Album'], meta: { name: 'Album' } }
    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumFindUniqueArgs>(args: SelectSubset<T, AlbumFindUniqueArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Album that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlbumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumFindUniqueOrThrowArgs>(args: SelectSubset<T, AlbumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumFindFirstArgs>(args?: SelectSubset<T, AlbumFindFirstArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumFindFirstOrThrowArgs>(args?: SelectSubset<T, AlbumFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlbumFindManyArgs>(args?: SelectSubset<T, AlbumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
     */
    create<T extends AlbumCreateArgs>(args: SelectSubset<T, AlbumCreateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Albums.
     * @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlbumCreateManyArgs>(args?: SelectSubset<T, AlbumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Albums and returns the data saved in the database.
     * @param {AlbumCreateManyAndReturnArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlbumCreateManyAndReturnArgs>(args?: SelectSubset<T, AlbumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
     */
    delete<T extends AlbumDeleteArgs>(args: SelectSubset<T, AlbumDeleteArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlbumUpdateArgs>(args: SelectSubset<T, AlbumUpdateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlbumDeleteManyArgs>(args?: SelectSubset<T, AlbumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlbumUpdateManyArgs>(args: SelectSubset<T, AlbumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums and returns the data updated in the database.
     * @param {AlbumUpdateManyAndReturnArgs} args - Arguments to update many Albums.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlbumUpdateManyAndReturnArgs>(args: SelectSubset<T, AlbumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
     */
    upsert<T extends AlbumUpsertArgs>(args: SelectSubset<T, AlbumUpsertArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
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
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Album model
   */
  readonly fields: AlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AlbumSongs<T extends Album$AlbumSongsArgs<ExtArgs> = {}>(args?: Subset<T, Album$AlbumSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Album model
   */
  interface AlbumFieldRefs {
    readonly id: FieldRef<"Album", 'Int'>
    readonly albumName: FieldRef<"Album", 'String'>
    readonly artist: FieldRef<"Album", 'String'>
    readonly coverImage: FieldRef<"Album", 'String'>
    readonly createdAt: FieldRef<"Album", 'DateTime'>
    readonly updateAt: FieldRef<"Album", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Album findUnique
   */
  export type AlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findUniqueOrThrow
   */
  export type AlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findFirst
   */
  export type AlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findFirstOrThrow
   */
  export type AlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findMany
   */
  export type AlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album create
   */
  export type AlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to create a Album.
     */
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }

  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Album createManyAndReturn
   */
  export type AlbumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Album update
   */
  export type AlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to update a Album.
     */
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
  }

  /**
   * Album updateManyAndReturn
   */
  export type AlbumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
  }

  /**
   * Album upsert
   */
  export type AlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The filter to search for the Album to update in case it exists.
     */
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     */
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }

  /**
   * Album delete
   */
  export type AlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter which Album to delete.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to delete.
     */
    limit?: number
  }

  /**
   * Album.AlbumSongs
   */
  export type Album$AlbumSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumSong
     */
    select?: AlbumSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSong
     */
    omit?: AlbumSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSongInclude<ExtArgs> | null
    where?: AlbumSongWhereInput
    orderBy?: AlbumSongOrderByWithRelationInput | AlbumSongOrderByWithRelationInput[]
    cursor?: AlbumSongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumSongScalarFieldEnum | AlbumSongScalarFieldEnum[]
  }

  /**
   * Album without action
   */
  export type AlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
  }


  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistAvgAggregateOutputType = {
    id: number | null
  }

  export type PlaylistSumAggregateOutputType = {
    id: number | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: number | null
    playlistName: string | null
    userId: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: number | null
    playlistName: string | null
    userId: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    playlistName: number
    userId: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type PlaylistAvgAggregateInputType = {
    id?: true
  }

  export type PlaylistSumAggregateInputType = {
    id?: true
  }

  export type PlaylistMinAggregateInputType = {
    id?: true
    playlistName?: true
    userId?: true
    createdAt?: true
    updateAt?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    playlistName?: true
    userId?: true
    createdAt?: true
    updateAt?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    playlistName?: true
    userId?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _avg?: PlaylistAvgAggregateInputType
    _sum?: PlaylistSumAggregateInputType
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: number
    playlistName: string
    userId: string
    createdAt: Date
    updateAt: Date
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistName?: boolean
    userId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    userDetails?: boolean | UserDefaultArgs<ExtArgs>
    PlaylistSong?: boolean | Playlist$PlaylistSongArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistName?: boolean
    userId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    userDetails?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistName?: boolean
    userId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    userDetails?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectScalar = {
    id?: boolean
    playlistName?: boolean
    userId?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type PlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playlistName" | "userId" | "createdAt" | "updateAt", ExtArgs["result"]["playlist"]>
  export type PlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDetails?: boolean | UserDefaultArgs<ExtArgs>
    PlaylistSong?: boolean | Playlist$PlaylistSongArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDetails?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDetails?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {
      userDetails: Prisma.$UserPayload<ExtArgs>
      PlaylistSong: Prisma.$PlaylistSongPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      playlistName: string
      userId: string
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }

  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistFindUniqueArgs>(args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistFindFirstArgs>(args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistFindManyArgs>(args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
     */
    create<T extends PlaylistCreateArgs>(args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playlists.
     * @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistCreateManyArgs>(args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {PlaylistCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
     */
    delete<T extends PlaylistDeleteArgs>(args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistUpdateArgs>(args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistDeleteManyArgs>(args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistUpdateManyArgs>(args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists and returns the data updated in the database.
     * @param {PlaylistUpdateManyAndReturnArgs} args - Arguments to update many Playlists.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlaylistUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistUpsertArgs>(args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
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
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userDetails<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PlaylistSong<T extends Playlist$PlaylistSongArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$PlaylistSongArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Playlist model
   */
  interface PlaylistFieldRefs {
    readonly id: FieldRef<"Playlist", 'Int'>
    readonly playlistName: FieldRef<"Playlist", 'String'>
    readonly userId: FieldRef<"Playlist", 'String'>
    readonly createdAt: FieldRef<"Playlist", 'DateTime'>
    readonly updateAt: FieldRef<"Playlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }

  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Playlist createManyAndReturn
   */
  export type PlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
  }

  /**
   * Playlist updateManyAndReturn
   */
  export type PlaylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }

  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to delete.
     */
    limit?: number
  }

  /**
   * Playlist.PlaylistSong
   */
  export type Playlist$PlaylistSongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    where?: PlaylistSongWhereInput
    orderBy?: PlaylistSongOrderByWithRelationInput | PlaylistSongOrderByWithRelationInput[]
    cursor?: PlaylistSongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistSongScalarFieldEnum | PlaylistSongScalarFieldEnum[]
  }

  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
  }


  /**
   * Model PlaylistSong
   */

  export type AggregatePlaylistSong = {
    _count: PlaylistSongCountAggregateOutputType | null
    _avg: PlaylistSongAvgAggregateOutputType | null
    _sum: PlaylistSongSumAggregateOutputType | null
    _min: PlaylistSongMinAggregateOutputType | null
    _max: PlaylistSongMaxAggregateOutputType | null
  }

  export type PlaylistSongAvgAggregateOutputType = {
    id: number | null
    songId: number | null
    playlistId: number | null
  }

  export type PlaylistSongSumAggregateOutputType = {
    id: number | null
    songId: number | null
    playlistId: number | null
  }

  export type PlaylistSongMinAggregateOutputType = {
    id: number | null
    songId: number | null
    playlistId: number | null
    addedAt: Date | null
  }

  export type PlaylistSongMaxAggregateOutputType = {
    id: number | null
    songId: number | null
    playlistId: number | null
    addedAt: Date | null
  }

  export type PlaylistSongCountAggregateOutputType = {
    id: number
    songId: number
    playlistId: number
    addedAt: number
    _all: number
  }


  export type PlaylistSongAvgAggregateInputType = {
    id?: true
    songId?: true
    playlistId?: true
  }

  export type PlaylistSongSumAggregateInputType = {
    id?: true
    songId?: true
    playlistId?: true
  }

  export type PlaylistSongMinAggregateInputType = {
    id?: true
    songId?: true
    playlistId?: true
    addedAt?: true
  }

  export type PlaylistSongMaxAggregateInputType = {
    id?: true
    songId?: true
    playlistId?: true
    addedAt?: true
  }

  export type PlaylistSongCountAggregateInputType = {
    id?: true
    songId?: true
    playlistId?: true
    addedAt?: true
    _all?: true
  }

  export type PlaylistSongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistSong to aggregate.
     */
    where?: PlaylistSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistSongs to fetch.
     */
    orderBy?: PlaylistSongOrderByWithRelationInput | PlaylistSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaylistSongs
    **/
    _count?: true | PlaylistSongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistSongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistSongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistSongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistSongMaxAggregateInputType
  }

  export type GetPlaylistSongAggregateType<T extends PlaylistSongAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylistSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylistSong[P]>
      : GetScalarType<T[P], AggregatePlaylistSong[P]>
  }




  export type PlaylistSongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistSongWhereInput
    orderBy?: PlaylistSongOrderByWithAggregationInput | PlaylistSongOrderByWithAggregationInput[]
    by: PlaylistSongScalarFieldEnum[] | PlaylistSongScalarFieldEnum
    having?: PlaylistSongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistSongCountAggregateInputType | true
    _avg?: PlaylistSongAvgAggregateInputType
    _sum?: PlaylistSongSumAggregateInputType
    _min?: PlaylistSongMinAggregateInputType
    _max?: PlaylistSongMaxAggregateInputType
  }

  export type PlaylistSongGroupByOutputType = {
    id: number
    songId: number
    playlistId: number
    addedAt: Date
    _count: PlaylistSongCountAggregateOutputType | null
    _avg: PlaylistSongAvgAggregateOutputType | null
    _sum: PlaylistSongSumAggregateOutputType | null
    _min: PlaylistSongMinAggregateOutputType | null
    _max: PlaylistSongMaxAggregateOutputType | null
  }

  type GetPlaylistSongGroupByPayload<T extends PlaylistSongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistSongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistSongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistSongGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistSongGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    playlistId?: boolean
    addedAt?: boolean
    songDetails?: boolean | SongDefaultArgs<ExtArgs>
    playlistDetails?: boolean | PlaylistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistSong"]>

  export type PlaylistSongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    playlistId?: boolean
    addedAt?: boolean
    songDetails?: boolean | SongDefaultArgs<ExtArgs>
    playlistDetails?: boolean | PlaylistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistSong"]>

  export type PlaylistSongSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    playlistId?: boolean
    addedAt?: boolean
    songDetails?: boolean | SongDefaultArgs<ExtArgs>
    playlistDetails?: boolean | PlaylistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistSong"]>

  export type PlaylistSongSelectScalar = {
    id?: boolean
    songId?: boolean
    playlistId?: boolean
    addedAt?: boolean
  }

  export type PlaylistSongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "songId" | "playlistId" | "addedAt", ExtArgs["result"]["playlistSong"]>
  export type PlaylistSongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songDetails?: boolean | SongDefaultArgs<ExtArgs>
    playlistDetails?: boolean | PlaylistDefaultArgs<ExtArgs>
  }
  export type PlaylistSongIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songDetails?: boolean | SongDefaultArgs<ExtArgs>
    playlistDetails?: boolean | PlaylistDefaultArgs<ExtArgs>
  }
  export type PlaylistSongIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songDetails?: boolean | SongDefaultArgs<ExtArgs>
    playlistDetails?: boolean | PlaylistDefaultArgs<ExtArgs>
  }

  export type $PlaylistSongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlaylistSong"
    objects: {
      songDetails: Prisma.$SongPayload<ExtArgs>
      playlistDetails: Prisma.$PlaylistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      songId: number
      playlistId: number
      addedAt: Date
    }, ExtArgs["result"]["playlistSong"]>
    composites: {}
  }

  type PlaylistSongGetPayload<S extends boolean | null | undefined | PlaylistSongDefaultArgs> = $Result.GetResult<Prisma.$PlaylistSongPayload, S>

  type PlaylistSongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistSongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistSongCountAggregateInputType | true
    }

  export interface PlaylistSongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlaylistSong'], meta: { name: 'PlaylistSong' } }
    /**
     * Find zero or one PlaylistSong that matches the filter.
     * @param {PlaylistSongFindUniqueArgs} args - Arguments to find a PlaylistSong
     * @example
     * // Get one PlaylistSong
     * const playlistSong = await prisma.playlistSong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistSongFindUniqueArgs>(args: SelectSubset<T, PlaylistSongFindUniqueArgs<ExtArgs>>): Prisma__PlaylistSongClient<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlaylistSong that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistSongFindUniqueOrThrowArgs} args - Arguments to find a PlaylistSong
     * @example
     * // Get one PlaylistSong
     * const playlistSong = await prisma.playlistSong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistSongFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistSongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistSongClient<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaylistSong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongFindFirstArgs} args - Arguments to find a PlaylistSong
     * @example
     * // Get one PlaylistSong
     * const playlistSong = await prisma.playlistSong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistSongFindFirstArgs>(args?: SelectSubset<T, PlaylistSongFindFirstArgs<ExtArgs>>): Prisma__PlaylistSongClient<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaylistSong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongFindFirstOrThrowArgs} args - Arguments to find a PlaylistSong
     * @example
     * // Get one PlaylistSong
     * const playlistSong = await prisma.playlistSong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistSongFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistSongFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistSongClient<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlaylistSongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaylistSongs
     * const playlistSongs = await prisma.playlistSong.findMany()
     * 
     * // Get first 10 PlaylistSongs
     * const playlistSongs = await prisma.playlistSong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistSongWithIdOnly = await prisma.playlistSong.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistSongFindManyArgs>(args?: SelectSubset<T, PlaylistSongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlaylistSong.
     * @param {PlaylistSongCreateArgs} args - Arguments to create a PlaylistSong.
     * @example
     * // Create one PlaylistSong
     * const PlaylistSong = await prisma.playlistSong.create({
     *   data: {
     *     // ... data to create a PlaylistSong
     *   }
     * })
     * 
     */
    create<T extends PlaylistSongCreateArgs>(args: SelectSubset<T, PlaylistSongCreateArgs<ExtArgs>>): Prisma__PlaylistSongClient<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlaylistSongs.
     * @param {PlaylistSongCreateManyArgs} args - Arguments to create many PlaylistSongs.
     * @example
     * // Create many PlaylistSongs
     * const playlistSong = await prisma.playlistSong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistSongCreateManyArgs>(args?: SelectSubset<T, PlaylistSongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlaylistSongs and returns the data saved in the database.
     * @param {PlaylistSongCreateManyAndReturnArgs} args - Arguments to create many PlaylistSongs.
     * @example
     * // Create many PlaylistSongs
     * const playlistSong = await prisma.playlistSong.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlaylistSongs and only return the `id`
     * const playlistSongWithIdOnly = await prisma.playlistSong.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistSongCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistSongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlaylistSong.
     * @param {PlaylistSongDeleteArgs} args - Arguments to delete one PlaylistSong.
     * @example
     * // Delete one PlaylistSong
     * const PlaylistSong = await prisma.playlistSong.delete({
     *   where: {
     *     // ... filter to delete one PlaylistSong
     *   }
     * })
     * 
     */
    delete<T extends PlaylistSongDeleteArgs>(args: SelectSubset<T, PlaylistSongDeleteArgs<ExtArgs>>): Prisma__PlaylistSongClient<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlaylistSong.
     * @param {PlaylistSongUpdateArgs} args - Arguments to update one PlaylistSong.
     * @example
     * // Update one PlaylistSong
     * const playlistSong = await prisma.playlistSong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistSongUpdateArgs>(args: SelectSubset<T, PlaylistSongUpdateArgs<ExtArgs>>): Prisma__PlaylistSongClient<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlaylistSongs.
     * @param {PlaylistSongDeleteManyArgs} args - Arguments to filter PlaylistSongs to delete.
     * @example
     * // Delete a few PlaylistSongs
     * const { count } = await prisma.playlistSong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistSongDeleteManyArgs>(args?: SelectSubset<T, PlaylistSongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaylistSongs
     * const playlistSong = await prisma.playlistSong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistSongUpdateManyArgs>(args: SelectSubset<T, PlaylistSongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistSongs and returns the data updated in the database.
     * @param {PlaylistSongUpdateManyAndReturnArgs} args - Arguments to update many PlaylistSongs.
     * @example
     * // Update many PlaylistSongs
     * const playlistSong = await prisma.playlistSong.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlaylistSongs and only return the `id`
     * const playlistSongWithIdOnly = await prisma.playlistSong.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlaylistSongUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistSongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlaylistSong.
     * @param {PlaylistSongUpsertArgs} args - Arguments to update or create a PlaylistSong.
     * @example
     * // Update or create a PlaylistSong
     * const playlistSong = await prisma.playlistSong.upsert({
     *   create: {
     *     // ... data to create a PlaylistSong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaylistSong we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistSongUpsertArgs>(args: SelectSubset<T, PlaylistSongUpsertArgs<ExtArgs>>): Prisma__PlaylistSongClient<$Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlaylistSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongCountArgs} args - Arguments to filter PlaylistSongs to count.
     * @example
     * // Count the number of PlaylistSongs
     * const count = await prisma.playlistSong.count({
     *   where: {
     *     // ... the filter for the PlaylistSongs we want to count
     *   }
     * })
    **/
    count<T extends PlaylistSongCountArgs>(
      args?: Subset<T, PlaylistSongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistSongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaylistSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlaylistSongAggregateArgs>(args: Subset<T, PlaylistSongAggregateArgs>): Prisma.PrismaPromise<GetPlaylistSongAggregateType<T>>

    /**
     * Group by PlaylistSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistSongGroupByArgs} args - Group by arguments.
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
      T extends PlaylistSongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistSongGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistSongGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlaylistSongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlaylistSong model
   */
  readonly fields: PlaylistSongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaylistSong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistSongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    songDetails<T extends SongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongDefaultArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    playlistDetails<T extends PlaylistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaylistDefaultArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlaylistSong model
   */
  interface PlaylistSongFieldRefs {
    readonly id: FieldRef<"PlaylistSong", 'Int'>
    readonly songId: FieldRef<"PlaylistSong", 'Int'>
    readonly playlistId: FieldRef<"PlaylistSong", 'Int'>
    readonly addedAt: FieldRef<"PlaylistSong", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlaylistSong findUnique
   */
  export type PlaylistSongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistSong to fetch.
     */
    where: PlaylistSongWhereUniqueInput
  }

  /**
   * PlaylistSong findUniqueOrThrow
   */
  export type PlaylistSongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistSong to fetch.
     */
    where: PlaylistSongWhereUniqueInput
  }

  /**
   * PlaylistSong findFirst
   */
  export type PlaylistSongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistSong to fetch.
     */
    where?: PlaylistSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistSongs to fetch.
     */
    orderBy?: PlaylistSongOrderByWithRelationInput | PlaylistSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistSongs.
     */
    cursor?: PlaylistSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistSongs.
     */
    distinct?: PlaylistSongScalarFieldEnum | PlaylistSongScalarFieldEnum[]
  }

  /**
   * PlaylistSong findFirstOrThrow
   */
  export type PlaylistSongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistSong to fetch.
     */
    where?: PlaylistSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistSongs to fetch.
     */
    orderBy?: PlaylistSongOrderByWithRelationInput | PlaylistSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistSongs.
     */
    cursor?: PlaylistSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistSongs.
     */
    distinct?: PlaylistSongScalarFieldEnum | PlaylistSongScalarFieldEnum[]
  }

  /**
   * PlaylistSong findMany
   */
  export type PlaylistSongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistSongs to fetch.
     */
    where?: PlaylistSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistSongs to fetch.
     */
    orderBy?: PlaylistSongOrderByWithRelationInput | PlaylistSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaylistSongs.
     */
    cursor?: PlaylistSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistSongs.
     */
    skip?: number
    distinct?: PlaylistSongScalarFieldEnum | PlaylistSongScalarFieldEnum[]
  }

  /**
   * PlaylistSong create
   */
  export type PlaylistSongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    /**
     * The data needed to create a PlaylistSong.
     */
    data: XOR<PlaylistSongCreateInput, PlaylistSongUncheckedCreateInput>
  }

  /**
   * PlaylistSong createMany
   */
  export type PlaylistSongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlaylistSongs.
     */
    data: PlaylistSongCreateManyInput | PlaylistSongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlaylistSong createManyAndReturn
   */
  export type PlaylistSongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * The data used to create many PlaylistSongs.
     */
    data: PlaylistSongCreateManyInput | PlaylistSongCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaylistSong update
   */
  export type PlaylistSongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    /**
     * The data needed to update a PlaylistSong.
     */
    data: XOR<PlaylistSongUpdateInput, PlaylistSongUncheckedUpdateInput>
    /**
     * Choose, which PlaylistSong to update.
     */
    where: PlaylistSongWhereUniqueInput
  }

  /**
   * PlaylistSong updateMany
   */
  export type PlaylistSongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlaylistSongs.
     */
    data: XOR<PlaylistSongUpdateManyMutationInput, PlaylistSongUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistSongs to update
     */
    where?: PlaylistSongWhereInput
    /**
     * Limit how many PlaylistSongs to update.
     */
    limit?: number
  }

  /**
   * PlaylistSong updateManyAndReturn
   */
  export type PlaylistSongUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * The data used to update PlaylistSongs.
     */
    data: XOR<PlaylistSongUpdateManyMutationInput, PlaylistSongUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistSongs to update
     */
    where?: PlaylistSongWhereInput
    /**
     * Limit how many PlaylistSongs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaylistSong upsert
   */
  export type PlaylistSongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    /**
     * The filter to search for the PlaylistSong to update in case it exists.
     */
    where: PlaylistSongWhereUniqueInput
    /**
     * In case the PlaylistSong found by the `where` argument doesn't exist, create a new PlaylistSong with this data.
     */
    create: XOR<PlaylistSongCreateInput, PlaylistSongUncheckedCreateInput>
    /**
     * In case the PlaylistSong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistSongUpdateInput, PlaylistSongUncheckedUpdateInput>
  }

  /**
   * PlaylistSong delete
   */
  export type PlaylistSongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
    /**
     * Filter which PlaylistSong to delete.
     */
    where: PlaylistSongWhereUniqueInput
  }

  /**
   * PlaylistSong deleteMany
   */
  export type PlaylistSongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistSongs to delete
     */
    where?: PlaylistSongWhereInput
    /**
     * Limit how many PlaylistSongs to delete.
     */
    limit?: number
  }

  /**
   * PlaylistSong without action
   */
  export type PlaylistSongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistSong
     */
    select?: PlaylistSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistSong
     */
    omit?: PlaylistSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistSongInclude<ExtArgs> | null
  }


  /**
   * Model AlbumSong
   */

  export type AggregateAlbumSong = {
    _count: AlbumSongCountAggregateOutputType | null
    _avg: AlbumSongAvgAggregateOutputType | null
    _sum: AlbumSongSumAggregateOutputType | null
    _min: AlbumSongMinAggregateOutputType | null
    _max: AlbumSongMaxAggregateOutputType | null
  }

  export type AlbumSongAvgAggregateOutputType = {
    id: number | null
    albumId: number | null
    songId: number | null
  }

  export type AlbumSongSumAggregateOutputType = {
    id: number | null
    albumId: number | null
    songId: number | null
  }

  export type AlbumSongMinAggregateOutputType = {
    id: number | null
    albumId: number | null
    songId: number | null
  }

  export type AlbumSongMaxAggregateOutputType = {
    id: number | null
    albumId: number | null
    songId: number | null
  }

  export type AlbumSongCountAggregateOutputType = {
    id: number
    albumId: number
    songId: number
    _all: number
  }


  export type AlbumSongAvgAggregateInputType = {
    id?: true
    albumId?: true
    songId?: true
  }

  export type AlbumSongSumAggregateInputType = {
    id?: true
    albumId?: true
    songId?: true
  }

  export type AlbumSongMinAggregateInputType = {
    id?: true
    albumId?: true
    songId?: true
  }

  export type AlbumSongMaxAggregateInputType = {
    id?: true
    albumId?: true
    songId?: true
  }

  export type AlbumSongCountAggregateInputType = {
    id?: true
    albumId?: true
    songId?: true
    _all?: true
  }

  export type AlbumSongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlbumSong to aggregate.
     */
    where?: AlbumSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumSongs to fetch.
     */
    orderBy?: AlbumSongOrderByWithRelationInput | AlbumSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlbumSongs
    **/
    _count?: true | AlbumSongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumSongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumSongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumSongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumSongMaxAggregateInputType
  }

  export type GetAlbumSongAggregateType<T extends AlbumSongAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbumSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbumSong[P]>
      : GetScalarType<T[P], AggregateAlbumSong[P]>
  }




  export type AlbumSongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumSongWhereInput
    orderBy?: AlbumSongOrderByWithAggregationInput | AlbumSongOrderByWithAggregationInput[]
    by: AlbumSongScalarFieldEnum[] | AlbumSongScalarFieldEnum
    having?: AlbumSongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumSongCountAggregateInputType | true
    _avg?: AlbumSongAvgAggregateInputType
    _sum?: AlbumSongSumAggregateInputType
    _min?: AlbumSongMinAggregateInputType
    _max?: AlbumSongMaxAggregateInputType
  }

  export type AlbumSongGroupByOutputType = {
    id: number
    albumId: number
    songId: number
    _count: AlbumSongCountAggregateOutputType | null
    _avg: AlbumSongAvgAggregateOutputType | null
    _sum: AlbumSongSumAggregateOutputType | null
    _min: AlbumSongMinAggregateOutputType | null
    _max: AlbumSongMaxAggregateOutputType | null
  }

  type GetAlbumSongGroupByPayload<T extends AlbumSongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumSongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumSongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumSongGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumSongGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    albumId?: boolean
    songId?: boolean
    albumDetails?: boolean | AlbumDefaultArgs<ExtArgs>
    songDetails?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["albumSong"]>

  export type AlbumSongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    albumId?: boolean
    songId?: boolean
    albumDetails?: boolean | AlbumDefaultArgs<ExtArgs>
    songDetails?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["albumSong"]>

  export type AlbumSongSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    albumId?: boolean
    songId?: boolean
    albumDetails?: boolean | AlbumDefaultArgs<ExtArgs>
    songDetails?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["albumSong"]>

  export type AlbumSongSelectScalar = {
    id?: boolean
    albumId?: boolean
    songId?: boolean
  }

  export type AlbumSongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "albumId" | "songId", ExtArgs["result"]["albumSong"]>
  export type AlbumSongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albumDetails?: boolean | AlbumDefaultArgs<ExtArgs>
    songDetails?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type AlbumSongIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albumDetails?: boolean | AlbumDefaultArgs<ExtArgs>
    songDetails?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type AlbumSongIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albumDetails?: boolean | AlbumDefaultArgs<ExtArgs>
    songDetails?: boolean | SongDefaultArgs<ExtArgs>
  }

  export type $AlbumSongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlbumSong"
    objects: {
      albumDetails: Prisma.$AlbumPayload<ExtArgs>
      songDetails: Prisma.$SongPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      albumId: number
      songId: number
    }, ExtArgs["result"]["albumSong"]>
    composites: {}
  }

  type AlbumSongGetPayload<S extends boolean | null | undefined | AlbumSongDefaultArgs> = $Result.GetResult<Prisma.$AlbumSongPayload, S>

  type AlbumSongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlbumSongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlbumSongCountAggregateInputType | true
    }

  export interface AlbumSongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlbumSong'], meta: { name: 'AlbumSong' } }
    /**
     * Find zero or one AlbumSong that matches the filter.
     * @param {AlbumSongFindUniqueArgs} args - Arguments to find a AlbumSong
     * @example
     * // Get one AlbumSong
     * const albumSong = await prisma.albumSong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumSongFindUniqueArgs>(args: SelectSubset<T, AlbumSongFindUniqueArgs<ExtArgs>>): Prisma__AlbumSongClient<$Result.GetResult<Prisma.$AlbumSongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlbumSong that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlbumSongFindUniqueOrThrowArgs} args - Arguments to find a AlbumSong
     * @example
     * // Get one AlbumSong
     * const albumSong = await prisma.albumSong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumSongFindUniqueOrThrowArgs>(args: SelectSubset<T, AlbumSongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlbumSongClient<$Result.GetResult<Prisma.$AlbumSongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlbumSong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumSongFindFirstArgs} args - Arguments to find a AlbumSong
     * @example
     * // Get one AlbumSong
     * const albumSong = await prisma.albumSong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumSongFindFirstArgs>(args?: SelectSubset<T, AlbumSongFindFirstArgs<ExtArgs>>): Prisma__AlbumSongClient<$Result.GetResult<Prisma.$AlbumSongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlbumSong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumSongFindFirstOrThrowArgs} args - Arguments to find a AlbumSong
     * @example
     * // Get one AlbumSong
     * const albumSong = await prisma.albumSong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumSongFindFirstOrThrowArgs>(args?: SelectSubset<T, AlbumSongFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlbumSongClient<$Result.GetResult<Prisma.$AlbumSongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlbumSongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumSongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlbumSongs
     * const albumSongs = await prisma.albumSong.findMany()
     * 
     * // Get first 10 AlbumSongs
     * const albumSongs = await prisma.albumSong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumSongWithIdOnly = await prisma.albumSong.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlbumSongFindManyArgs>(args?: SelectSubset<T, AlbumSongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlbumSong.
     * @param {AlbumSongCreateArgs} args - Arguments to create a AlbumSong.
     * @example
     * // Create one AlbumSong
     * const AlbumSong = await prisma.albumSong.create({
     *   data: {
     *     // ... data to create a AlbumSong
     *   }
     * })
     * 
     */
    create<T extends AlbumSongCreateArgs>(args: SelectSubset<T, AlbumSongCreateArgs<ExtArgs>>): Prisma__AlbumSongClient<$Result.GetResult<Prisma.$AlbumSongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlbumSongs.
     * @param {AlbumSongCreateManyArgs} args - Arguments to create many AlbumSongs.
     * @example
     * // Create many AlbumSongs
     * const albumSong = await prisma.albumSong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlbumSongCreateManyArgs>(args?: SelectSubset<T, AlbumSongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlbumSongs and returns the data saved in the database.
     * @param {AlbumSongCreateManyAndReturnArgs} args - Arguments to create many AlbumSongs.
     * @example
     * // Create many AlbumSongs
     * const albumSong = await prisma.albumSong.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlbumSongs and only return the `id`
     * const albumSongWithIdOnly = await prisma.albumSong.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlbumSongCreateManyAndReturnArgs>(args?: SelectSubset<T, AlbumSongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumSongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlbumSong.
     * @param {AlbumSongDeleteArgs} args - Arguments to delete one AlbumSong.
     * @example
     * // Delete one AlbumSong
     * const AlbumSong = await prisma.albumSong.delete({
     *   where: {
     *     // ... filter to delete one AlbumSong
     *   }
     * })
     * 
     */
    delete<T extends AlbumSongDeleteArgs>(args: SelectSubset<T, AlbumSongDeleteArgs<ExtArgs>>): Prisma__AlbumSongClient<$Result.GetResult<Prisma.$AlbumSongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlbumSong.
     * @param {AlbumSongUpdateArgs} args - Arguments to update one AlbumSong.
     * @example
     * // Update one AlbumSong
     * const albumSong = await prisma.albumSong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlbumSongUpdateArgs>(args: SelectSubset<T, AlbumSongUpdateArgs<ExtArgs>>): Prisma__AlbumSongClient<$Result.GetResult<Prisma.$AlbumSongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlbumSongs.
     * @param {AlbumSongDeleteManyArgs} args - Arguments to filter AlbumSongs to delete.
     * @example
     * // Delete a few AlbumSongs
     * const { count } = await prisma.albumSong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlbumSongDeleteManyArgs>(args?: SelectSubset<T, AlbumSongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlbumSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumSongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlbumSongs
     * const albumSong = await prisma.albumSong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlbumSongUpdateManyArgs>(args: SelectSubset<T, AlbumSongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlbumSongs and returns the data updated in the database.
     * @param {AlbumSongUpdateManyAndReturnArgs} args - Arguments to update many AlbumSongs.
     * @example
     * // Update many AlbumSongs
     * const albumSong = await prisma.albumSong.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlbumSongs and only return the `id`
     * const albumSongWithIdOnly = await prisma.albumSong.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlbumSongUpdateManyAndReturnArgs>(args: SelectSubset<T, AlbumSongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumSongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlbumSong.
     * @param {AlbumSongUpsertArgs} args - Arguments to update or create a AlbumSong.
     * @example
     * // Update or create a AlbumSong
     * const albumSong = await prisma.albumSong.upsert({
     *   create: {
     *     // ... data to create a AlbumSong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlbumSong we want to update
     *   }
     * })
     */
    upsert<T extends AlbumSongUpsertArgs>(args: SelectSubset<T, AlbumSongUpsertArgs<ExtArgs>>): Prisma__AlbumSongClient<$Result.GetResult<Prisma.$AlbumSongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlbumSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumSongCountArgs} args - Arguments to filter AlbumSongs to count.
     * @example
     * // Count the number of AlbumSongs
     * const count = await prisma.albumSong.count({
     *   where: {
     *     // ... the filter for the AlbumSongs we want to count
     *   }
     * })
    **/
    count<T extends AlbumSongCountArgs>(
      args?: Subset<T, AlbumSongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumSongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlbumSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumSongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlbumSongAggregateArgs>(args: Subset<T, AlbumSongAggregateArgs>): Prisma.PrismaPromise<GetAlbumSongAggregateType<T>>

    /**
     * Group by AlbumSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumSongGroupByArgs} args - Group by arguments.
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
      T extends AlbumSongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumSongGroupByArgs['orderBy'] }
        : { orderBy?: AlbumSongGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlbumSongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlbumSong model
   */
  readonly fields: AlbumSongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlbumSong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumSongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    albumDetails<T extends AlbumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlbumDefaultArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    songDetails<T extends SongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongDefaultArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AlbumSong model
   */
  interface AlbumSongFieldRefs {
    readonly id: FieldRef<"AlbumSong", 'Int'>
    readonly albumId: FieldRef<"AlbumSong", 'Int'>
    readonly songId: FieldRef<"AlbumSong", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AlbumSong findUnique
   */
  export type AlbumSongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumSong
     */
    select?: AlbumSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSong
     */
    omit?: AlbumSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSongInclude<ExtArgs> | null
    /**
     * Filter, which AlbumSong to fetch.
     */
    where: AlbumSongWhereUniqueInput
  }

  /**
   * AlbumSong findUniqueOrThrow
   */
  export type AlbumSongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumSong
     */
    select?: AlbumSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSong
     */
    omit?: AlbumSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSongInclude<ExtArgs> | null
    /**
     * Filter, which AlbumSong to fetch.
     */
    where: AlbumSongWhereUniqueInput
  }

  /**
   * AlbumSong findFirst
   */
  export type AlbumSongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumSong
     */
    select?: AlbumSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSong
     */
    omit?: AlbumSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSongInclude<ExtArgs> | null
    /**
     * Filter, which AlbumSong to fetch.
     */
    where?: AlbumSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumSongs to fetch.
     */
    orderBy?: AlbumSongOrderByWithRelationInput | AlbumSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumSongs.
     */
    cursor?: AlbumSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumSongs.
     */
    distinct?: AlbumSongScalarFieldEnum | AlbumSongScalarFieldEnum[]
  }

  /**
   * AlbumSong findFirstOrThrow
   */
  export type AlbumSongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumSong
     */
    select?: AlbumSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSong
     */
    omit?: AlbumSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSongInclude<ExtArgs> | null
    /**
     * Filter, which AlbumSong to fetch.
     */
    where?: AlbumSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumSongs to fetch.
     */
    orderBy?: AlbumSongOrderByWithRelationInput | AlbumSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumSongs.
     */
    cursor?: AlbumSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumSongs.
     */
    distinct?: AlbumSongScalarFieldEnum | AlbumSongScalarFieldEnum[]
  }

  /**
   * AlbumSong findMany
   */
  export type AlbumSongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumSong
     */
    select?: AlbumSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSong
     */
    omit?: AlbumSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSongInclude<ExtArgs> | null
    /**
     * Filter, which AlbumSongs to fetch.
     */
    where?: AlbumSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumSongs to fetch.
     */
    orderBy?: AlbumSongOrderByWithRelationInput | AlbumSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlbumSongs.
     */
    cursor?: AlbumSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumSongs.
     */
    skip?: number
    distinct?: AlbumSongScalarFieldEnum | AlbumSongScalarFieldEnum[]
  }

  /**
   * AlbumSong create
   */
  export type AlbumSongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumSong
     */
    select?: AlbumSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSong
     */
    omit?: AlbumSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSongInclude<ExtArgs> | null
    /**
     * The data needed to create a AlbumSong.
     */
    data: XOR<AlbumSongCreateInput, AlbumSongUncheckedCreateInput>
  }

  /**
   * AlbumSong createMany
   */
  export type AlbumSongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlbumSongs.
     */
    data: AlbumSongCreateManyInput | AlbumSongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlbumSong createManyAndReturn
   */
  export type AlbumSongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumSong
     */
    select?: AlbumSongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSong
     */
    omit?: AlbumSongOmit<ExtArgs> | null
    /**
     * The data used to create many AlbumSongs.
     */
    data: AlbumSongCreateManyInput | AlbumSongCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSongIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlbumSong update
   */
  export type AlbumSongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumSong
     */
    select?: AlbumSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSong
     */
    omit?: AlbumSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSongInclude<ExtArgs> | null
    /**
     * The data needed to update a AlbumSong.
     */
    data: XOR<AlbumSongUpdateInput, AlbumSongUncheckedUpdateInput>
    /**
     * Choose, which AlbumSong to update.
     */
    where: AlbumSongWhereUniqueInput
  }

  /**
   * AlbumSong updateMany
   */
  export type AlbumSongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlbumSongs.
     */
    data: XOR<AlbumSongUpdateManyMutationInput, AlbumSongUncheckedUpdateManyInput>
    /**
     * Filter which AlbumSongs to update
     */
    where?: AlbumSongWhereInput
    /**
     * Limit how many AlbumSongs to update.
     */
    limit?: number
  }

  /**
   * AlbumSong updateManyAndReturn
   */
  export type AlbumSongUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumSong
     */
    select?: AlbumSongSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSong
     */
    omit?: AlbumSongOmit<ExtArgs> | null
    /**
     * The data used to update AlbumSongs.
     */
    data: XOR<AlbumSongUpdateManyMutationInput, AlbumSongUncheckedUpdateManyInput>
    /**
     * Filter which AlbumSongs to update
     */
    where?: AlbumSongWhereInput
    /**
     * Limit how many AlbumSongs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSongIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlbumSong upsert
   */
  export type AlbumSongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumSong
     */
    select?: AlbumSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSong
     */
    omit?: AlbumSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSongInclude<ExtArgs> | null
    /**
     * The filter to search for the AlbumSong to update in case it exists.
     */
    where: AlbumSongWhereUniqueInput
    /**
     * In case the AlbumSong found by the `where` argument doesn't exist, create a new AlbumSong with this data.
     */
    create: XOR<AlbumSongCreateInput, AlbumSongUncheckedCreateInput>
    /**
     * In case the AlbumSong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumSongUpdateInput, AlbumSongUncheckedUpdateInput>
  }

  /**
   * AlbumSong delete
   */
  export type AlbumSongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumSong
     */
    select?: AlbumSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSong
     */
    omit?: AlbumSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSongInclude<ExtArgs> | null
    /**
     * Filter which AlbumSong to delete.
     */
    where: AlbumSongWhereUniqueInput
  }

  /**
   * AlbumSong deleteMany
   */
  export type AlbumSongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlbumSongs to delete
     */
    where?: AlbumSongWhereInput
    /**
     * Limit how many AlbumSongs to delete.
     */
    limit?: number
  }

  /**
   * AlbumSong without action
   */
  export type AlbumSongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumSong
     */
    select?: AlbumSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSong
     */
    omit?: AlbumSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSongInclude<ExtArgs> | null
  }


  /**
   * Model starredSong
   */

  export type AggregateStarredSong = {
    _count: StarredSongCountAggregateOutputType | null
    _avg: StarredSongAvgAggregateOutputType | null
    _sum: StarredSongSumAggregateOutputType | null
    _min: StarredSongMinAggregateOutputType | null
    _max: StarredSongMaxAggregateOutputType | null
  }

  export type StarredSongAvgAggregateOutputType = {
    id: number | null
    songId: number | null
  }

  export type StarredSongSumAggregateOutputType = {
    id: number | null
    songId: number | null
  }

  export type StarredSongMinAggregateOutputType = {
    id: number | null
    userId: string | null
    songId: number | null
  }

  export type StarredSongMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    songId: number | null
  }

  export type StarredSongCountAggregateOutputType = {
    id: number
    userId: number
    songId: number
    _all: number
  }


  export type StarredSongAvgAggregateInputType = {
    id?: true
    songId?: true
  }

  export type StarredSongSumAggregateInputType = {
    id?: true
    songId?: true
  }

  export type StarredSongMinAggregateInputType = {
    id?: true
    userId?: true
    songId?: true
  }

  export type StarredSongMaxAggregateInputType = {
    id?: true
    userId?: true
    songId?: true
  }

  export type StarredSongCountAggregateInputType = {
    id?: true
    userId?: true
    songId?: true
    _all?: true
  }

  export type StarredSongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which starredSong to aggregate.
     */
    where?: starredSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of starredSongs to fetch.
     */
    orderBy?: starredSongOrderByWithRelationInput | starredSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: starredSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` starredSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` starredSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned starredSongs
    **/
    _count?: true | StarredSongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StarredSongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StarredSongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StarredSongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StarredSongMaxAggregateInputType
  }

  export type GetStarredSongAggregateType<T extends StarredSongAggregateArgs> = {
        [P in keyof T & keyof AggregateStarredSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStarredSong[P]>
      : GetScalarType<T[P], AggregateStarredSong[P]>
  }




  export type starredSongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: starredSongWhereInput
    orderBy?: starredSongOrderByWithAggregationInput | starredSongOrderByWithAggregationInput[]
    by: StarredSongScalarFieldEnum[] | StarredSongScalarFieldEnum
    having?: starredSongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StarredSongCountAggregateInputType | true
    _avg?: StarredSongAvgAggregateInputType
    _sum?: StarredSongSumAggregateInputType
    _min?: StarredSongMinAggregateInputType
    _max?: StarredSongMaxAggregateInputType
  }

  export type StarredSongGroupByOutputType = {
    id: number
    userId: string
    songId: number
    _count: StarredSongCountAggregateOutputType | null
    _avg: StarredSongAvgAggregateOutputType | null
    _sum: StarredSongSumAggregateOutputType | null
    _min: StarredSongMinAggregateOutputType | null
    _max: StarredSongMaxAggregateOutputType | null
  }

  type GetStarredSongGroupByPayload<T extends starredSongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StarredSongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StarredSongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StarredSongGroupByOutputType[P]>
            : GetScalarType<T[P], StarredSongGroupByOutputType[P]>
        }
      >
    >


  export type starredSongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    songId?: boolean
    userDetails?: boolean | UserDefaultArgs<ExtArgs>
    SongDetails?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["starredSong"]>

  export type starredSongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    songId?: boolean
    userDetails?: boolean | UserDefaultArgs<ExtArgs>
    SongDetails?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["starredSong"]>

  export type starredSongSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    songId?: boolean
    userDetails?: boolean | UserDefaultArgs<ExtArgs>
    SongDetails?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["starredSong"]>

  export type starredSongSelectScalar = {
    id?: boolean
    userId?: boolean
    songId?: boolean
  }

  export type starredSongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "songId", ExtArgs["result"]["starredSong"]>
  export type starredSongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDetails?: boolean | UserDefaultArgs<ExtArgs>
    SongDetails?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type starredSongIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDetails?: boolean | UserDefaultArgs<ExtArgs>
    SongDetails?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type starredSongIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDetails?: boolean | UserDefaultArgs<ExtArgs>
    SongDetails?: boolean | SongDefaultArgs<ExtArgs>
  }

  export type $starredSongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "starredSong"
    objects: {
      userDetails: Prisma.$UserPayload<ExtArgs>
      SongDetails: Prisma.$SongPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      songId: number
    }, ExtArgs["result"]["starredSong"]>
    composites: {}
  }

  type starredSongGetPayload<S extends boolean | null | undefined | starredSongDefaultArgs> = $Result.GetResult<Prisma.$starredSongPayload, S>

  type starredSongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<starredSongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StarredSongCountAggregateInputType | true
    }

  export interface starredSongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['starredSong'], meta: { name: 'starredSong' } }
    /**
     * Find zero or one StarredSong that matches the filter.
     * @param {starredSongFindUniqueArgs} args - Arguments to find a StarredSong
     * @example
     * // Get one StarredSong
     * const starredSong = await prisma.starredSong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends starredSongFindUniqueArgs>(args: SelectSubset<T, starredSongFindUniqueArgs<ExtArgs>>): Prisma__starredSongClient<$Result.GetResult<Prisma.$starredSongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StarredSong that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {starredSongFindUniqueOrThrowArgs} args - Arguments to find a StarredSong
     * @example
     * // Get one StarredSong
     * const starredSong = await prisma.starredSong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends starredSongFindUniqueOrThrowArgs>(args: SelectSubset<T, starredSongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__starredSongClient<$Result.GetResult<Prisma.$starredSongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StarredSong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {starredSongFindFirstArgs} args - Arguments to find a StarredSong
     * @example
     * // Get one StarredSong
     * const starredSong = await prisma.starredSong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends starredSongFindFirstArgs>(args?: SelectSubset<T, starredSongFindFirstArgs<ExtArgs>>): Prisma__starredSongClient<$Result.GetResult<Prisma.$starredSongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StarredSong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {starredSongFindFirstOrThrowArgs} args - Arguments to find a StarredSong
     * @example
     * // Get one StarredSong
     * const starredSong = await prisma.starredSong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends starredSongFindFirstOrThrowArgs>(args?: SelectSubset<T, starredSongFindFirstOrThrowArgs<ExtArgs>>): Prisma__starredSongClient<$Result.GetResult<Prisma.$starredSongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StarredSongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {starredSongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StarredSongs
     * const starredSongs = await prisma.starredSong.findMany()
     * 
     * // Get first 10 StarredSongs
     * const starredSongs = await prisma.starredSong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const starredSongWithIdOnly = await prisma.starredSong.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends starredSongFindManyArgs>(args?: SelectSubset<T, starredSongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$starredSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StarredSong.
     * @param {starredSongCreateArgs} args - Arguments to create a StarredSong.
     * @example
     * // Create one StarredSong
     * const StarredSong = await prisma.starredSong.create({
     *   data: {
     *     // ... data to create a StarredSong
     *   }
     * })
     * 
     */
    create<T extends starredSongCreateArgs>(args: SelectSubset<T, starredSongCreateArgs<ExtArgs>>): Prisma__starredSongClient<$Result.GetResult<Prisma.$starredSongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StarredSongs.
     * @param {starredSongCreateManyArgs} args - Arguments to create many StarredSongs.
     * @example
     * // Create many StarredSongs
     * const starredSong = await prisma.starredSong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends starredSongCreateManyArgs>(args?: SelectSubset<T, starredSongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StarredSongs and returns the data saved in the database.
     * @param {starredSongCreateManyAndReturnArgs} args - Arguments to create many StarredSongs.
     * @example
     * // Create many StarredSongs
     * const starredSong = await prisma.starredSong.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StarredSongs and only return the `id`
     * const starredSongWithIdOnly = await prisma.starredSong.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends starredSongCreateManyAndReturnArgs>(args?: SelectSubset<T, starredSongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$starredSongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StarredSong.
     * @param {starredSongDeleteArgs} args - Arguments to delete one StarredSong.
     * @example
     * // Delete one StarredSong
     * const StarredSong = await prisma.starredSong.delete({
     *   where: {
     *     // ... filter to delete one StarredSong
     *   }
     * })
     * 
     */
    delete<T extends starredSongDeleteArgs>(args: SelectSubset<T, starredSongDeleteArgs<ExtArgs>>): Prisma__starredSongClient<$Result.GetResult<Prisma.$starredSongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StarredSong.
     * @param {starredSongUpdateArgs} args - Arguments to update one StarredSong.
     * @example
     * // Update one StarredSong
     * const starredSong = await prisma.starredSong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends starredSongUpdateArgs>(args: SelectSubset<T, starredSongUpdateArgs<ExtArgs>>): Prisma__starredSongClient<$Result.GetResult<Prisma.$starredSongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StarredSongs.
     * @param {starredSongDeleteManyArgs} args - Arguments to filter StarredSongs to delete.
     * @example
     * // Delete a few StarredSongs
     * const { count } = await prisma.starredSong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends starredSongDeleteManyArgs>(args?: SelectSubset<T, starredSongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StarredSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {starredSongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StarredSongs
     * const starredSong = await prisma.starredSong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends starredSongUpdateManyArgs>(args: SelectSubset<T, starredSongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StarredSongs and returns the data updated in the database.
     * @param {starredSongUpdateManyAndReturnArgs} args - Arguments to update many StarredSongs.
     * @example
     * // Update many StarredSongs
     * const starredSong = await prisma.starredSong.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StarredSongs and only return the `id`
     * const starredSongWithIdOnly = await prisma.starredSong.updateManyAndReturn({
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
    updateManyAndReturn<T extends starredSongUpdateManyAndReturnArgs>(args: SelectSubset<T, starredSongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$starredSongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StarredSong.
     * @param {starredSongUpsertArgs} args - Arguments to update or create a StarredSong.
     * @example
     * // Update or create a StarredSong
     * const starredSong = await prisma.starredSong.upsert({
     *   create: {
     *     // ... data to create a StarredSong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StarredSong we want to update
     *   }
     * })
     */
    upsert<T extends starredSongUpsertArgs>(args: SelectSubset<T, starredSongUpsertArgs<ExtArgs>>): Prisma__starredSongClient<$Result.GetResult<Prisma.$starredSongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StarredSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {starredSongCountArgs} args - Arguments to filter StarredSongs to count.
     * @example
     * // Count the number of StarredSongs
     * const count = await prisma.starredSong.count({
     *   where: {
     *     // ... the filter for the StarredSongs we want to count
     *   }
     * })
    **/
    count<T extends starredSongCountArgs>(
      args?: Subset<T, starredSongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StarredSongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StarredSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StarredSongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StarredSongAggregateArgs>(args: Subset<T, StarredSongAggregateArgs>): Prisma.PrismaPromise<GetStarredSongAggregateType<T>>

    /**
     * Group by StarredSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {starredSongGroupByArgs} args - Group by arguments.
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
      T extends starredSongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: starredSongGroupByArgs['orderBy'] }
        : { orderBy?: starredSongGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, starredSongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStarredSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the starredSong model
   */
  readonly fields: starredSongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for starredSong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__starredSongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userDetails<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    SongDetails<T extends SongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongDefaultArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the starredSong model
   */
  interface starredSongFieldRefs {
    readonly id: FieldRef<"starredSong", 'Int'>
    readonly userId: FieldRef<"starredSong", 'String'>
    readonly songId: FieldRef<"starredSong", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * starredSong findUnique
   */
  export type starredSongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the starredSong
     */
    select?: starredSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the starredSong
     */
    omit?: starredSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: starredSongInclude<ExtArgs> | null
    /**
     * Filter, which starredSong to fetch.
     */
    where: starredSongWhereUniqueInput
  }

  /**
   * starredSong findUniqueOrThrow
   */
  export type starredSongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the starredSong
     */
    select?: starredSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the starredSong
     */
    omit?: starredSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: starredSongInclude<ExtArgs> | null
    /**
     * Filter, which starredSong to fetch.
     */
    where: starredSongWhereUniqueInput
  }

  /**
   * starredSong findFirst
   */
  export type starredSongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the starredSong
     */
    select?: starredSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the starredSong
     */
    omit?: starredSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: starredSongInclude<ExtArgs> | null
    /**
     * Filter, which starredSong to fetch.
     */
    where?: starredSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of starredSongs to fetch.
     */
    orderBy?: starredSongOrderByWithRelationInput | starredSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for starredSongs.
     */
    cursor?: starredSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` starredSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` starredSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of starredSongs.
     */
    distinct?: StarredSongScalarFieldEnum | StarredSongScalarFieldEnum[]
  }

  /**
   * starredSong findFirstOrThrow
   */
  export type starredSongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the starredSong
     */
    select?: starredSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the starredSong
     */
    omit?: starredSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: starredSongInclude<ExtArgs> | null
    /**
     * Filter, which starredSong to fetch.
     */
    where?: starredSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of starredSongs to fetch.
     */
    orderBy?: starredSongOrderByWithRelationInput | starredSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for starredSongs.
     */
    cursor?: starredSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` starredSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` starredSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of starredSongs.
     */
    distinct?: StarredSongScalarFieldEnum | StarredSongScalarFieldEnum[]
  }

  /**
   * starredSong findMany
   */
  export type starredSongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the starredSong
     */
    select?: starredSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the starredSong
     */
    omit?: starredSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: starredSongInclude<ExtArgs> | null
    /**
     * Filter, which starredSongs to fetch.
     */
    where?: starredSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of starredSongs to fetch.
     */
    orderBy?: starredSongOrderByWithRelationInput | starredSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing starredSongs.
     */
    cursor?: starredSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` starredSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` starredSongs.
     */
    skip?: number
    distinct?: StarredSongScalarFieldEnum | StarredSongScalarFieldEnum[]
  }

  /**
   * starredSong create
   */
  export type starredSongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the starredSong
     */
    select?: starredSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the starredSong
     */
    omit?: starredSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: starredSongInclude<ExtArgs> | null
    /**
     * The data needed to create a starredSong.
     */
    data: XOR<starredSongCreateInput, starredSongUncheckedCreateInput>
  }

  /**
   * starredSong createMany
   */
  export type starredSongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many starredSongs.
     */
    data: starredSongCreateManyInput | starredSongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * starredSong createManyAndReturn
   */
  export type starredSongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the starredSong
     */
    select?: starredSongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the starredSong
     */
    omit?: starredSongOmit<ExtArgs> | null
    /**
     * The data used to create many starredSongs.
     */
    data: starredSongCreateManyInput | starredSongCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: starredSongIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * starredSong update
   */
  export type starredSongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the starredSong
     */
    select?: starredSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the starredSong
     */
    omit?: starredSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: starredSongInclude<ExtArgs> | null
    /**
     * The data needed to update a starredSong.
     */
    data: XOR<starredSongUpdateInput, starredSongUncheckedUpdateInput>
    /**
     * Choose, which starredSong to update.
     */
    where: starredSongWhereUniqueInput
  }

  /**
   * starredSong updateMany
   */
  export type starredSongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update starredSongs.
     */
    data: XOR<starredSongUpdateManyMutationInput, starredSongUncheckedUpdateManyInput>
    /**
     * Filter which starredSongs to update
     */
    where?: starredSongWhereInput
    /**
     * Limit how many starredSongs to update.
     */
    limit?: number
  }

  /**
   * starredSong updateManyAndReturn
   */
  export type starredSongUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the starredSong
     */
    select?: starredSongSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the starredSong
     */
    omit?: starredSongOmit<ExtArgs> | null
    /**
     * The data used to update starredSongs.
     */
    data: XOR<starredSongUpdateManyMutationInput, starredSongUncheckedUpdateManyInput>
    /**
     * Filter which starredSongs to update
     */
    where?: starredSongWhereInput
    /**
     * Limit how many starredSongs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: starredSongIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * starredSong upsert
   */
  export type starredSongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the starredSong
     */
    select?: starredSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the starredSong
     */
    omit?: starredSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: starredSongInclude<ExtArgs> | null
    /**
     * The filter to search for the starredSong to update in case it exists.
     */
    where: starredSongWhereUniqueInput
    /**
     * In case the starredSong found by the `where` argument doesn't exist, create a new starredSong with this data.
     */
    create: XOR<starredSongCreateInput, starredSongUncheckedCreateInput>
    /**
     * In case the starredSong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<starredSongUpdateInput, starredSongUncheckedUpdateInput>
  }

  /**
   * starredSong delete
   */
  export type starredSongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the starredSong
     */
    select?: starredSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the starredSong
     */
    omit?: starredSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: starredSongInclude<ExtArgs> | null
    /**
     * Filter which starredSong to delete.
     */
    where: starredSongWhereUniqueInput
  }

  /**
   * starredSong deleteMany
   */
  export type starredSongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which starredSongs to delete
     */
    where?: starredSongWhereInput
    /**
     * Limit how many starredSongs to delete.
     */
    limit?: number
  }

  /**
   * starredSong without action
   */
  export type starredSongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the starredSong
     */
    select?: starredSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the starredSong
     */
    omit?: starredSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: starredSongInclude<ExtArgs> | null
  }


  /**
   * Model PricingPackage
   */

  export type AggregatePricingPackage = {
    _count: PricingPackageCountAggregateOutputType | null
    _avg: PricingPackageAvgAggregateOutputType | null
    _sum: PricingPackageSumAggregateOutputType | null
    _min: PricingPackageMinAggregateOutputType | null
    _max: PricingPackageMaxAggregateOutputType | null
  }

  export type PricingPackageAvgAggregateOutputType = {
    id: number | null
    price: number | null
    durationMonth: number | null
  }

  export type PricingPackageSumAggregateOutputType = {
    id: number | null
    price: number | null
    durationMonth: number | null
  }

  export type PricingPackageMinAggregateOutputType = {
    id: number | null
    packageName: string | null
    price: number | null
    durationMonth: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingPackageMaxAggregateOutputType = {
    id: number | null
    packageName: string | null
    price: number | null
    durationMonth: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingPackageCountAggregateOutputType = {
    id: number
    packageName: number
    price: number
    durationMonth: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PricingPackageAvgAggregateInputType = {
    id?: true
    price?: true
    durationMonth?: true
  }

  export type PricingPackageSumAggregateInputType = {
    id?: true
    price?: true
    durationMonth?: true
  }

  export type PricingPackageMinAggregateInputType = {
    id?: true
    packageName?: true
    price?: true
    durationMonth?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingPackageMaxAggregateInputType = {
    id?: true
    packageName?: true
    price?: true
    durationMonth?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingPackageCountAggregateInputType = {
    id?: true
    packageName?: true
    price?: true
    durationMonth?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PricingPackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingPackage to aggregate.
     */
    where?: PricingPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingPackages to fetch.
     */
    orderBy?: PricingPackageOrderByWithRelationInput | PricingPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricingPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PricingPackages
    **/
    _count?: true | PricingPackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PricingPackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PricingPackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricingPackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricingPackageMaxAggregateInputType
  }

  export type GetPricingPackageAggregateType<T extends PricingPackageAggregateArgs> = {
        [P in keyof T & keyof AggregatePricingPackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePricingPackage[P]>
      : GetScalarType<T[P], AggregatePricingPackage[P]>
  }




  export type PricingPackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingPackageWhereInput
    orderBy?: PricingPackageOrderByWithAggregationInput | PricingPackageOrderByWithAggregationInput[]
    by: PricingPackageScalarFieldEnum[] | PricingPackageScalarFieldEnum
    having?: PricingPackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricingPackageCountAggregateInputType | true
    _avg?: PricingPackageAvgAggregateInputType
    _sum?: PricingPackageSumAggregateInputType
    _min?: PricingPackageMinAggregateInputType
    _max?: PricingPackageMaxAggregateInputType
  }

  export type PricingPackageGroupByOutputType = {
    id: number
    packageName: string
    price: number
    durationMonth: number
    description: string
    createdAt: Date
    updatedAt: Date
    _count: PricingPackageCountAggregateOutputType | null
    _avg: PricingPackageAvgAggregateOutputType | null
    _sum: PricingPackageSumAggregateOutputType | null
    _min: PricingPackageMinAggregateOutputType | null
    _max: PricingPackageMaxAggregateOutputType | null
  }

  type GetPricingPackageGroupByPayload<T extends PricingPackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PricingPackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricingPackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricingPackageGroupByOutputType[P]>
            : GetScalarType<T[P], PricingPackageGroupByOutputType[P]>
        }
      >
    >


  export type PricingPackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    packageName?: boolean
    price?: boolean
    durationMonth?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Subscription?: boolean | PricingPackage$SubscriptionArgs<ExtArgs>
    PaymentTransaction?: boolean | PricingPackage$PaymentTransactionArgs<ExtArgs>
    _count?: boolean | PricingPackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingPackage"]>

  export type PricingPackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    packageName?: boolean
    price?: boolean
    durationMonth?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pricingPackage"]>

  export type PricingPackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    packageName?: boolean
    price?: boolean
    durationMonth?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pricingPackage"]>

  export type PricingPackageSelectScalar = {
    id?: boolean
    packageName?: boolean
    price?: boolean
    durationMonth?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PricingPackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "packageName" | "price" | "durationMonth" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["pricingPackage"]>
  export type PricingPackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subscription?: boolean | PricingPackage$SubscriptionArgs<ExtArgs>
    PaymentTransaction?: boolean | PricingPackage$PaymentTransactionArgs<ExtArgs>
    _count?: boolean | PricingPackageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PricingPackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PricingPackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PricingPackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PricingPackage"
    objects: {
      Subscription: Prisma.$SubscriptionPayload<ExtArgs>[]
      PaymentTransaction: Prisma.$PaymentTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      packageName: string
      price: number
      durationMonth: number
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pricingPackage"]>
    composites: {}
  }

  type PricingPackageGetPayload<S extends boolean | null | undefined | PricingPackageDefaultArgs> = $Result.GetResult<Prisma.$PricingPackagePayload, S>

  type PricingPackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PricingPackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PricingPackageCountAggregateInputType | true
    }

  export interface PricingPackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PricingPackage'], meta: { name: 'PricingPackage' } }
    /**
     * Find zero or one PricingPackage that matches the filter.
     * @param {PricingPackageFindUniqueArgs} args - Arguments to find a PricingPackage
     * @example
     * // Get one PricingPackage
     * const pricingPackage = await prisma.pricingPackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PricingPackageFindUniqueArgs>(args: SelectSubset<T, PricingPackageFindUniqueArgs<ExtArgs>>): Prisma__PricingPackageClient<$Result.GetResult<Prisma.$PricingPackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PricingPackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PricingPackageFindUniqueOrThrowArgs} args - Arguments to find a PricingPackage
     * @example
     * // Get one PricingPackage
     * const pricingPackage = await prisma.pricingPackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PricingPackageFindUniqueOrThrowArgs>(args: SelectSubset<T, PricingPackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PricingPackageClient<$Result.GetResult<Prisma.$PricingPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PricingPackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPackageFindFirstArgs} args - Arguments to find a PricingPackage
     * @example
     * // Get one PricingPackage
     * const pricingPackage = await prisma.pricingPackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PricingPackageFindFirstArgs>(args?: SelectSubset<T, PricingPackageFindFirstArgs<ExtArgs>>): Prisma__PricingPackageClient<$Result.GetResult<Prisma.$PricingPackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PricingPackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPackageFindFirstOrThrowArgs} args - Arguments to find a PricingPackage
     * @example
     * // Get one PricingPackage
     * const pricingPackage = await prisma.pricingPackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PricingPackageFindFirstOrThrowArgs>(args?: SelectSubset<T, PricingPackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PricingPackageClient<$Result.GetResult<Prisma.$PricingPackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PricingPackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PricingPackages
     * const pricingPackages = await prisma.pricingPackage.findMany()
     * 
     * // Get first 10 PricingPackages
     * const pricingPackages = await prisma.pricingPackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricingPackageWithIdOnly = await prisma.pricingPackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PricingPackageFindManyArgs>(args?: SelectSubset<T, PricingPackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingPackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PricingPackage.
     * @param {PricingPackageCreateArgs} args - Arguments to create a PricingPackage.
     * @example
     * // Create one PricingPackage
     * const PricingPackage = await prisma.pricingPackage.create({
     *   data: {
     *     // ... data to create a PricingPackage
     *   }
     * })
     * 
     */
    create<T extends PricingPackageCreateArgs>(args: SelectSubset<T, PricingPackageCreateArgs<ExtArgs>>): Prisma__PricingPackageClient<$Result.GetResult<Prisma.$PricingPackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PricingPackages.
     * @param {PricingPackageCreateManyArgs} args - Arguments to create many PricingPackages.
     * @example
     * // Create many PricingPackages
     * const pricingPackage = await prisma.pricingPackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PricingPackageCreateManyArgs>(args?: SelectSubset<T, PricingPackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PricingPackages and returns the data saved in the database.
     * @param {PricingPackageCreateManyAndReturnArgs} args - Arguments to create many PricingPackages.
     * @example
     * // Create many PricingPackages
     * const pricingPackage = await prisma.pricingPackage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PricingPackages and only return the `id`
     * const pricingPackageWithIdOnly = await prisma.pricingPackage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PricingPackageCreateManyAndReturnArgs>(args?: SelectSubset<T, PricingPackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingPackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PricingPackage.
     * @param {PricingPackageDeleteArgs} args - Arguments to delete one PricingPackage.
     * @example
     * // Delete one PricingPackage
     * const PricingPackage = await prisma.pricingPackage.delete({
     *   where: {
     *     // ... filter to delete one PricingPackage
     *   }
     * })
     * 
     */
    delete<T extends PricingPackageDeleteArgs>(args: SelectSubset<T, PricingPackageDeleteArgs<ExtArgs>>): Prisma__PricingPackageClient<$Result.GetResult<Prisma.$PricingPackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PricingPackage.
     * @param {PricingPackageUpdateArgs} args - Arguments to update one PricingPackage.
     * @example
     * // Update one PricingPackage
     * const pricingPackage = await prisma.pricingPackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PricingPackageUpdateArgs>(args: SelectSubset<T, PricingPackageUpdateArgs<ExtArgs>>): Prisma__PricingPackageClient<$Result.GetResult<Prisma.$PricingPackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PricingPackages.
     * @param {PricingPackageDeleteManyArgs} args - Arguments to filter PricingPackages to delete.
     * @example
     * // Delete a few PricingPackages
     * const { count } = await prisma.pricingPackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PricingPackageDeleteManyArgs>(args?: SelectSubset<T, PricingPackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PricingPackages
     * const pricingPackage = await prisma.pricingPackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PricingPackageUpdateManyArgs>(args: SelectSubset<T, PricingPackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingPackages and returns the data updated in the database.
     * @param {PricingPackageUpdateManyAndReturnArgs} args - Arguments to update many PricingPackages.
     * @example
     * // Update many PricingPackages
     * const pricingPackage = await prisma.pricingPackage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PricingPackages and only return the `id`
     * const pricingPackageWithIdOnly = await prisma.pricingPackage.updateManyAndReturn({
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
    updateManyAndReturn<T extends PricingPackageUpdateManyAndReturnArgs>(args: SelectSubset<T, PricingPackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingPackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PricingPackage.
     * @param {PricingPackageUpsertArgs} args - Arguments to update or create a PricingPackage.
     * @example
     * // Update or create a PricingPackage
     * const pricingPackage = await prisma.pricingPackage.upsert({
     *   create: {
     *     // ... data to create a PricingPackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PricingPackage we want to update
     *   }
     * })
     */
    upsert<T extends PricingPackageUpsertArgs>(args: SelectSubset<T, PricingPackageUpsertArgs<ExtArgs>>): Prisma__PricingPackageClient<$Result.GetResult<Prisma.$PricingPackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PricingPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPackageCountArgs} args - Arguments to filter PricingPackages to count.
     * @example
     * // Count the number of PricingPackages
     * const count = await prisma.pricingPackage.count({
     *   where: {
     *     // ... the filter for the PricingPackages we want to count
     *   }
     * })
    **/
    count<T extends PricingPackageCountArgs>(
      args?: Subset<T, PricingPackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricingPackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PricingPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PricingPackageAggregateArgs>(args: Subset<T, PricingPackageAggregateArgs>): Prisma.PrismaPromise<GetPricingPackageAggregateType<T>>

    /**
     * Group by PricingPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPackageGroupByArgs} args - Group by arguments.
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
      T extends PricingPackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricingPackageGroupByArgs['orderBy'] }
        : { orderBy?: PricingPackageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PricingPackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricingPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PricingPackage model
   */
  readonly fields: PricingPackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PricingPackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PricingPackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Subscription<T extends PricingPackage$SubscriptionArgs<ExtArgs> = {}>(args?: Subset<T, PricingPackage$SubscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PaymentTransaction<T extends PricingPackage$PaymentTransactionArgs<ExtArgs> = {}>(args?: Subset<T, PricingPackage$PaymentTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PricingPackage model
   */
  interface PricingPackageFieldRefs {
    readonly id: FieldRef<"PricingPackage", 'Int'>
    readonly packageName: FieldRef<"PricingPackage", 'String'>
    readonly price: FieldRef<"PricingPackage", 'Float'>
    readonly durationMonth: FieldRef<"PricingPackage", 'Int'>
    readonly description: FieldRef<"PricingPackage", 'String'>
    readonly createdAt: FieldRef<"PricingPackage", 'DateTime'>
    readonly updatedAt: FieldRef<"PricingPackage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PricingPackage findUnique
   */
  export type PricingPackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPackage
     */
    select?: PricingPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPackage
     */
    omit?: PricingPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPackageInclude<ExtArgs> | null
    /**
     * Filter, which PricingPackage to fetch.
     */
    where: PricingPackageWhereUniqueInput
  }

  /**
   * PricingPackage findUniqueOrThrow
   */
  export type PricingPackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPackage
     */
    select?: PricingPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPackage
     */
    omit?: PricingPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPackageInclude<ExtArgs> | null
    /**
     * Filter, which PricingPackage to fetch.
     */
    where: PricingPackageWhereUniqueInput
  }

  /**
   * PricingPackage findFirst
   */
  export type PricingPackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPackage
     */
    select?: PricingPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPackage
     */
    omit?: PricingPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPackageInclude<ExtArgs> | null
    /**
     * Filter, which PricingPackage to fetch.
     */
    where?: PricingPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingPackages to fetch.
     */
    orderBy?: PricingPackageOrderByWithRelationInput | PricingPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingPackages.
     */
    cursor?: PricingPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingPackages.
     */
    distinct?: PricingPackageScalarFieldEnum | PricingPackageScalarFieldEnum[]
  }

  /**
   * PricingPackage findFirstOrThrow
   */
  export type PricingPackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPackage
     */
    select?: PricingPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPackage
     */
    omit?: PricingPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPackageInclude<ExtArgs> | null
    /**
     * Filter, which PricingPackage to fetch.
     */
    where?: PricingPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingPackages to fetch.
     */
    orderBy?: PricingPackageOrderByWithRelationInput | PricingPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingPackages.
     */
    cursor?: PricingPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingPackages.
     */
    distinct?: PricingPackageScalarFieldEnum | PricingPackageScalarFieldEnum[]
  }

  /**
   * PricingPackage findMany
   */
  export type PricingPackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPackage
     */
    select?: PricingPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPackage
     */
    omit?: PricingPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPackageInclude<ExtArgs> | null
    /**
     * Filter, which PricingPackages to fetch.
     */
    where?: PricingPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingPackages to fetch.
     */
    orderBy?: PricingPackageOrderByWithRelationInput | PricingPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PricingPackages.
     */
    cursor?: PricingPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingPackages.
     */
    skip?: number
    distinct?: PricingPackageScalarFieldEnum | PricingPackageScalarFieldEnum[]
  }

  /**
   * PricingPackage create
   */
  export type PricingPackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPackage
     */
    select?: PricingPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPackage
     */
    omit?: PricingPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPackageInclude<ExtArgs> | null
    /**
     * The data needed to create a PricingPackage.
     */
    data: XOR<PricingPackageCreateInput, PricingPackageUncheckedCreateInput>
  }

  /**
   * PricingPackage createMany
   */
  export type PricingPackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PricingPackages.
     */
    data: PricingPackageCreateManyInput | PricingPackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PricingPackage createManyAndReturn
   */
  export type PricingPackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPackage
     */
    select?: PricingPackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPackage
     */
    omit?: PricingPackageOmit<ExtArgs> | null
    /**
     * The data used to create many PricingPackages.
     */
    data: PricingPackageCreateManyInput | PricingPackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PricingPackage update
   */
  export type PricingPackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPackage
     */
    select?: PricingPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPackage
     */
    omit?: PricingPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPackageInclude<ExtArgs> | null
    /**
     * The data needed to update a PricingPackage.
     */
    data: XOR<PricingPackageUpdateInput, PricingPackageUncheckedUpdateInput>
    /**
     * Choose, which PricingPackage to update.
     */
    where: PricingPackageWhereUniqueInput
  }

  /**
   * PricingPackage updateMany
   */
  export type PricingPackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PricingPackages.
     */
    data: XOR<PricingPackageUpdateManyMutationInput, PricingPackageUncheckedUpdateManyInput>
    /**
     * Filter which PricingPackages to update
     */
    where?: PricingPackageWhereInput
    /**
     * Limit how many PricingPackages to update.
     */
    limit?: number
  }

  /**
   * PricingPackage updateManyAndReturn
   */
  export type PricingPackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPackage
     */
    select?: PricingPackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPackage
     */
    omit?: PricingPackageOmit<ExtArgs> | null
    /**
     * The data used to update PricingPackages.
     */
    data: XOR<PricingPackageUpdateManyMutationInput, PricingPackageUncheckedUpdateManyInput>
    /**
     * Filter which PricingPackages to update
     */
    where?: PricingPackageWhereInput
    /**
     * Limit how many PricingPackages to update.
     */
    limit?: number
  }

  /**
   * PricingPackage upsert
   */
  export type PricingPackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPackage
     */
    select?: PricingPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPackage
     */
    omit?: PricingPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPackageInclude<ExtArgs> | null
    /**
     * The filter to search for the PricingPackage to update in case it exists.
     */
    where: PricingPackageWhereUniqueInput
    /**
     * In case the PricingPackage found by the `where` argument doesn't exist, create a new PricingPackage with this data.
     */
    create: XOR<PricingPackageCreateInput, PricingPackageUncheckedCreateInput>
    /**
     * In case the PricingPackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricingPackageUpdateInput, PricingPackageUncheckedUpdateInput>
  }

  /**
   * PricingPackage delete
   */
  export type PricingPackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPackage
     */
    select?: PricingPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPackage
     */
    omit?: PricingPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPackageInclude<ExtArgs> | null
    /**
     * Filter which PricingPackage to delete.
     */
    where: PricingPackageWhereUniqueInput
  }

  /**
   * PricingPackage deleteMany
   */
  export type PricingPackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingPackages to delete
     */
    where?: PricingPackageWhereInput
    /**
     * Limit how many PricingPackages to delete.
     */
    limit?: number
  }

  /**
   * PricingPackage.Subscription
   */
  export type PricingPackage$SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * PricingPackage.PaymentTransaction
   */
  export type PricingPackage$PaymentTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    where?: PaymentTransactionWhereInput
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    cursor?: PaymentTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentTransactionScalarFieldEnum | PaymentTransactionScalarFieldEnum[]
  }

  /**
   * PricingPackage without action
   */
  export type PricingPackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPackage
     */
    select?: PricingPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPackage
     */
    omit?: PricingPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPackageInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    id: number | null
    packageId: number | null
    transactionId: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    id: number | null
    packageId: number | null
    transactionId: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: number | null
    startDate: Date | null
    endDate: Date | null
    packageId: number | null
    userId: string | null
    transactionId: number | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: number | null
    startDate: Date | null
    endDate: Date | null
    packageId: number | null
    userId: string | null
    transactionId: number | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    packageId: number
    userId: number
    transactionId: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    id?: true
    packageId?: true
    transactionId?: true
  }

  export type SubscriptionSumAggregateInputType = {
    id?: true
    packageId?: true
    transactionId?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    packageId?: true
    userId?: true
    transactionId?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    packageId?: true
    userId?: true
    transactionId?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    packageId?: true
    userId?: true
    transactionId?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: number
    startDate: Date
    endDate: Date
    packageId: number
    userId: string
    transactionId: number
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    packageId?: boolean
    userId?: boolean
    transactionId?: boolean
    userDetails?: boolean | UserDefaultArgs<ExtArgs>
    packageDetails?: boolean | PricingPackageDefaultArgs<ExtArgs>
    PaymentTransaction?: boolean | Subscription$PaymentTransactionArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    packageId?: boolean
    userId?: boolean
    transactionId?: boolean
    userDetails?: boolean | UserDefaultArgs<ExtArgs>
    packageDetails?: boolean | PricingPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    packageId?: boolean
    userId?: boolean
    transactionId?: boolean
    userDetails?: boolean | UserDefaultArgs<ExtArgs>
    packageDetails?: boolean | PricingPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    packageId?: boolean
    userId?: boolean
    transactionId?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startDate" | "endDate" | "packageId" | "userId" | "transactionId", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDetails?: boolean | UserDefaultArgs<ExtArgs>
    packageDetails?: boolean | PricingPackageDefaultArgs<ExtArgs>
    PaymentTransaction?: boolean | Subscription$PaymentTransactionArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDetails?: boolean | UserDefaultArgs<ExtArgs>
    packageDetails?: boolean | PricingPackageDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDetails?: boolean | UserDefaultArgs<ExtArgs>
    packageDetails?: boolean | PricingPackageDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      userDetails: Prisma.$UserPayload<ExtArgs>
      packageDetails: Prisma.$PricingPackagePayload<ExtArgs>
      PaymentTransaction: Prisma.$PaymentTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startDate: Date
      endDate: Date
      packageId: number
      userId: string
      transactionId: number
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userDetails<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    packageDetails<T extends PricingPackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PricingPackageDefaultArgs<ExtArgs>>): Prisma__PricingPackageClient<$Result.GetResult<Prisma.$PricingPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PaymentTransaction<T extends Subscription$PaymentTransactionArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$PaymentTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'Int'>
    readonly startDate: FieldRef<"Subscription", 'DateTime'>
    readonly endDate: FieldRef<"Subscription", 'DateTime'>
    readonly packageId: FieldRef<"Subscription", 'Int'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly transactionId: FieldRef<"Subscription", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription.PaymentTransaction
   */
  export type Subscription$PaymentTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    where?: PaymentTransactionWhereInput
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    cursor?: PaymentTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentTransactionScalarFieldEnum | PaymentTransactionScalarFieldEnum[]
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model PaymentTransaction
   */

  export type AggregatePaymentTransaction = {
    _count: PaymentTransactionCountAggregateOutputType | null
    _avg: PaymentTransactionAvgAggregateOutputType | null
    _sum: PaymentTransactionSumAggregateOutputType | null
    _min: PaymentTransactionMinAggregateOutputType | null
    _max: PaymentTransactionMaxAggregateOutputType | null
  }

  export type PaymentTransactionAvgAggregateOutputType = {
    id: number | null
    packageId: number | null
    subscriptionId: number | null
    amount: number | null
  }

  export type PaymentTransactionSumAggregateOutputType = {
    id: number | null
    packageId: number | null
    subscriptionId: number | null
    amount: number | null
  }

  export type PaymentTransactionMinAggregateOutputType = {
    id: number | null
    userId: string | null
    packageId: number | null
    subscriptionId: number | null
    amount: number | null
    currency: string | null
    paymentMethod: string | null
    status: string | null
    paymentProvider: string | null
    providerTransactionId: string | null
    createdAt: Date | null
  }

  export type PaymentTransactionMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    packageId: number | null
    subscriptionId: number | null
    amount: number | null
    currency: string | null
    paymentMethod: string | null
    status: string | null
    paymentProvider: string | null
    providerTransactionId: string | null
    createdAt: Date | null
  }

  export type PaymentTransactionCountAggregateOutputType = {
    id: number
    userId: number
    packageId: number
    subscriptionId: number
    amount: number
    currency: number
    paymentMethod: number
    status: number
    paymentProvider: number
    providerTransactionId: number
    createdAt: number
    _all: number
  }


  export type PaymentTransactionAvgAggregateInputType = {
    id?: true
    packageId?: true
    subscriptionId?: true
    amount?: true
  }

  export type PaymentTransactionSumAggregateInputType = {
    id?: true
    packageId?: true
    subscriptionId?: true
    amount?: true
  }

  export type PaymentTransactionMinAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    subscriptionId?: true
    amount?: true
    currency?: true
    paymentMethod?: true
    status?: true
    paymentProvider?: true
    providerTransactionId?: true
    createdAt?: true
  }

  export type PaymentTransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    subscriptionId?: true
    amount?: true
    currency?: true
    paymentMethod?: true
    status?: true
    paymentProvider?: true
    providerTransactionId?: true
    createdAt?: true
  }

  export type PaymentTransactionCountAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    subscriptionId?: true
    amount?: true
    currency?: true
    paymentMethod?: true
    status?: true
    paymentProvider?: true
    providerTransactionId?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentTransaction to aggregate.
     */
    where?: PaymentTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTransactions to fetch.
     */
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentTransactions
    **/
    _count?: true | PaymentTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentTransactionMaxAggregateInputType
  }

  export type GetPaymentTransactionAggregateType<T extends PaymentTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentTransaction[P]>
      : GetScalarType<T[P], AggregatePaymentTransaction[P]>
  }




  export type PaymentTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentTransactionWhereInput
    orderBy?: PaymentTransactionOrderByWithAggregationInput | PaymentTransactionOrderByWithAggregationInput[]
    by: PaymentTransactionScalarFieldEnum[] | PaymentTransactionScalarFieldEnum
    having?: PaymentTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentTransactionCountAggregateInputType | true
    _avg?: PaymentTransactionAvgAggregateInputType
    _sum?: PaymentTransactionSumAggregateInputType
    _min?: PaymentTransactionMinAggregateInputType
    _max?: PaymentTransactionMaxAggregateInputType
  }

  export type PaymentTransactionGroupByOutputType = {
    id: number
    userId: string
    packageId: number
    subscriptionId: number
    amount: number
    currency: string
    paymentMethod: string
    status: string
    paymentProvider: string
    providerTransactionId: string
    createdAt: Date
    _count: PaymentTransactionCountAggregateOutputType | null
    _avg: PaymentTransactionAvgAggregateOutputType | null
    _sum: PaymentTransactionSumAggregateOutputType | null
    _min: PaymentTransactionMinAggregateOutputType | null
    _max: PaymentTransactionMaxAggregateOutputType | null
  }

  type GetPaymentTransactionGroupByPayload<T extends PaymentTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentTransactionGroupByOutputType[P]>
        }
      >
    >


  export type PaymentTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    packageId?: boolean
    subscriptionId?: boolean
    amount?: boolean
    currency?: boolean
    paymentMethod?: boolean
    status?: boolean
    paymentProvider?: boolean
    providerTransactionId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | PricingPackageDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentTransaction"]>

  export type PaymentTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    packageId?: boolean
    subscriptionId?: boolean
    amount?: boolean
    currency?: boolean
    paymentMethod?: boolean
    status?: boolean
    paymentProvider?: boolean
    providerTransactionId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | PricingPackageDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentTransaction"]>

  export type PaymentTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    packageId?: boolean
    subscriptionId?: boolean
    amount?: boolean
    currency?: boolean
    paymentMethod?: boolean
    status?: boolean
    paymentProvider?: boolean
    providerTransactionId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | PricingPackageDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentTransaction"]>

  export type PaymentTransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    packageId?: boolean
    subscriptionId?: boolean
    amount?: boolean
    currency?: boolean
    paymentMethod?: boolean
    status?: boolean
    paymentProvider?: boolean
    providerTransactionId?: boolean
    createdAt?: boolean
  }

  export type PaymentTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "packageId" | "subscriptionId" | "amount" | "currency" | "paymentMethod" | "status" | "paymentProvider" | "providerTransactionId" | "createdAt", ExtArgs["result"]["paymentTransaction"]>
  export type PaymentTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | PricingPackageDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }
  export type PaymentTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | PricingPackageDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }
  export type PaymentTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | PricingPackageDefaultArgs<ExtArgs>
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }

  export type $PaymentTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      package: Prisma.$PricingPackagePayload<ExtArgs>
      subscription: Prisma.$SubscriptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      packageId: number
      subscriptionId: number
      amount: number
      currency: string
      paymentMethod: string
      status: string
      paymentProvider: string
      providerTransactionId: string
      createdAt: Date
    }, ExtArgs["result"]["paymentTransaction"]>
    composites: {}
  }

  type PaymentTransactionGetPayload<S extends boolean | null | undefined | PaymentTransactionDefaultArgs> = $Result.GetResult<Prisma.$PaymentTransactionPayload, S>

  type PaymentTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentTransactionCountAggregateInputType | true
    }

  export interface PaymentTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentTransaction'], meta: { name: 'PaymentTransaction' } }
    /**
     * Find zero or one PaymentTransaction that matches the filter.
     * @param {PaymentTransactionFindUniqueArgs} args - Arguments to find a PaymentTransaction
     * @example
     * // Get one PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentTransactionFindUniqueArgs>(args: SelectSubset<T, PaymentTransactionFindUniqueArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentTransactionFindUniqueOrThrowArgs} args - Arguments to find a PaymentTransaction
     * @example
     * // Get one PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionFindFirstArgs} args - Arguments to find a PaymentTransaction
     * @example
     * // Get one PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentTransactionFindFirstArgs>(args?: SelectSubset<T, PaymentTransactionFindFirstArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionFindFirstOrThrowArgs} args - Arguments to find a PaymentTransaction
     * @example
     * // Get one PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentTransactions
     * const paymentTransactions = await prisma.paymentTransaction.findMany()
     * 
     * // Get first 10 PaymentTransactions
     * const paymentTransactions = await prisma.paymentTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentTransactionWithIdOnly = await prisma.paymentTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentTransactionFindManyArgs>(args?: SelectSubset<T, PaymentTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentTransaction.
     * @param {PaymentTransactionCreateArgs} args - Arguments to create a PaymentTransaction.
     * @example
     * // Create one PaymentTransaction
     * const PaymentTransaction = await prisma.paymentTransaction.create({
     *   data: {
     *     // ... data to create a PaymentTransaction
     *   }
     * })
     * 
     */
    create<T extends PaymentTransactionCreateArgs>(args: SelectSubset<T, PaymentTransactionCreateArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentTransactions.
     * @param {PaymentTransactionCreateManyArgs} args - Arguments to create many PaymentTransactions.
     * @example
     * // Create many PaymentTransactions
     * const paymentTransaction = await prisma.paymentTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentTransactionCreateManyArgs>(args?: SelectSubset<T, PaymentTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentTransactions and returns the data saved in the database.
     * @param {PaymentTransactionCreateManyAndReturnArgs} args - Arguments to create many PaymentTransactions.
     * @example
     * // Create many PaymentTransactions
     * const paymentTransaction = await prisma.paymentTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentTransactions and only return the `id`
     * const paymentTransactionWithIdOnly = await prisma.paymentTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentTransaction.
     * @param {PaymentTransactionDeleteArgs} args - Arguments to delete one PaymentTransaction.
     * @example
     * // Delete one PaymentTransaction
     * const PaymentTransaction = await prisma.paymentTransaction.delete({
     *   where: {
     *     // ... filter to delete one PaymentTransaction
     *   }
     * })
     * 
     */
    delete<T extends PaymentTransactionDeleteArgs>(args: SelectSubset<T, PaymentTransactionDeleteArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentTransaction.
     * @param {PaymentTransactionUpdateArgs} args - Arguments to update one PaymentTransaction.
     * @example
     * // Update one PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentTransactionUpdateArgs>(args: SelectSubset<T, PaymentTransactionUpdateArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentTransactions.
     * @param {PaymentTransactionDeleteManyArgs} args - Arguments to filter PaymentTransactions to delete.
     * @example
     * // Delete a few PaymentTransactions
     * const { count } = await prisma.paymentTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentTransactionDeleteManyArgs>(args?: SelectSubset<T, PaymentTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentTransactions
     * const paymentTransaction = await prisma.paymentTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentTransactionUpdateManyArgs>(args: SelectSubset<T, PaymentTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentTransactions and returns the data updated in the database.
     * @param {PaymentTransactionUpdateManyAndReturnArgs} args - Arguments to update many PaymentTransactions.
     * @example
     * // Update many PaymentTransactions
     * const paymentTransaction = await prisma.paymentTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentTransactions and only return the `id`
     * const paymentTransactionWithIdOnly = await prisma.paymentTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentTransaction.
     * @param {PaymentTransactionUpsertArgs} args - Arguments to update or create a PaymentTransaction.
     * @example
     * // Update or create a PaymentTransaction
     * const paymentTransaction = await prisma.paymentTransaction.upsert({
     *   create: {
     *     // ... data to create a PaymentTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentTransaction we want to update
     *   }
     * })
     */
    upsert<T extends PaymentTransactionUpsertArgs>(args: SelectSubset<T, PaymentTransactionUpsertArgs<ExtArgs>>): Prisma__PaymentTransactionClient<$Result.GetResult<Prisma.$PaymentTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionCountArgs} args - Arguments to filter PaymentTransactions to count.
     * @example
     * // Count the number of PaymentTransactions
     * const count = await prisma.paymentTransaction.count({
     *   where: {
     *     // ... the filter for the PaymentTransactions we want to count
     *   }
     * })
    **/
    count<T extends PaymentTransactionCountArgs>(
      args?: Subset<T, PaymentTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentTransactionAggregateArgs>(args: Subset<T, PaymentTransactionAggregateArgs>): Prisma.PrismaPromise<GetPaymentTransactionAggregateType<T>>

    /**
     * Group by PaymentTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTransactionGroupByArgs} args - Group by arguments.
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
      T extends PaymentTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentTransactionGroupByArgs['orderBy'] }
        : { orderBy?: PaymentTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentTransaction model
   */
  readonly fields: PaymentTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    package<T extends PricingPackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PricingPackageDefaultArgs<ExtArgs>>): Prisma__PricingPackageClient<$Result.GetResult<Prisma.$PricingPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subscription<T extends SubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionDefaultArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PaymentTransaction model
   */
  interface PaymentTransactionFieldRefs {
    readonly id: FieldRef<"PaymentTransaction", 'Int'>
    readonly userId: FieldRef<"PaymentTransaction", 'String'>
    readonly packageId: FieldRef<"PaymentTransaction", 'Int'>
    readonly subscriptionId: FieldRef<"PaymentTransaction", 'Int'>
    readonly amount: FieldRef<"PaymentTransaction", 'Float'>
    readonly currency: FieldRef<"PaymentTransaction", 'String'>
    readonly paymentMethod: FieldRef<"PaymentTransaction", 'String'>
    readonly status: FieldRef<"PaymentTransaction", 'String'>
    readonly paymentProvider: FieldRef<"PaymentTransaction", 'String'>
    readonly providerTransactionId: FieldRef<"PaymentTransaction", 'String'>
    readonly createdAt: FieldRef<"PaymentTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentTransaction findUnique
   */
  export type PaymentTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransaction to fetch.
     */
    where: PaymentTransactionWhereUniqueInput
  }

  /**
   * PaymentTransaction findUniqueOrThrow
   */
  export type PaymentTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransaction to fetch.
     */
    where: PaymentTransactionWhereUniqueInput
  }

  /**
   * PaymentTransaction findFirst
   */
  export type PaymentTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransaction to fetch.
     */
    where?: PaymentTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTransactions to fetch.
     */
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentTransactions.
     */
    cursor?: PaymentTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTransactions.
     */
    distinct?: PaymentTransactionScalarFieldEnum | PaymentTransactionScalarFieldEnum[]
  }

  /**
   * PaymentTransaction findFirstOrThrow
   */
  export type PaymentTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransaction to fetch.
     */
    where?: PaymentTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTransactions to fetch.
     */
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentTransactions.
     */
    cursor?: PaymentTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTransactions.
     */
    distinct?: PaymentTransactionScalarFieldEnum | PaymentTransactionScalarFieldEnum[]
  }

  /**
   * PaymentTransaction findMany
   */
  export type PaymentTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTransactions to fetch.
     */
    where?: PaymentTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTransactions to fetch.
     */
    orderBy?: PaymentTransactionOrderByWithRelationInput | PaymentTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentTransactions.
     */
    cursor?: PaymentTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTransactions.
     */
    skip?: number
    distinct?: PaymentTransactionScalarFieldEnum | PaymentTransactionScalarFieldEnum[]
  }

  /**
   * PaymentTransaction create
   */
  export type PaymentTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentTransaction.
     */
    data: XOR<PaymentTransactionCreateInput, PaymentTransactionUncheckedCreateInput>
  }

  /**
   * PaymentTransaction createMany
   */
  export type PaymentTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentTransactions.
     */
    data: PaymentTransactionCreateManyInput | PaymentTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentTransaction createManyAndReturn
   */
  export type PaymentTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentTransactions.
     */
    data: PaymentTransactionCreateManyInput | PaymentTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentTransaction update
   */
  export type PaymentTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentTransaction.
     */
    data: XOR<PaymentTransactionUpdateInput, PaymentTransactionUncheckedUpdateInput>
    /**
     * Choose, which PaymentTransaction to update.
     */
    where: PaymentTransactionWhereUniqueInput
  }

  /**
   * PaymentTransaction updateMany
   */
  export type PaymentTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentTransactions.
     */
    data: XOR<PaymentTransactionUpdateManyMutationInput, PaymentTransactionUncheckedUpdateManyInput>
    /**
     * Filter which PaymentTransactions to update
     */
    where?: PaymentTransactionWhereInput
    /**
     * Limit how many PaymentTransactions to update.
     */
    limit?: number
  }

  /**
   * PaymentTransaction updateManyAndReturn
   */
  export type PaymentTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * The data used to update PaymentTransactions.
     */
    data: XOR<PaymentTransactionUpdateManyMutationInput, PaymentTransactionUncheckedUpdateManyInput>
    /**
     * Filter which PaymentTransactions to update
     */
    where?: PaymentTransactionWhereInput
    /**
     * Limit how many PaymentTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentTransaction upsert
   */
  export type PaymentTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentTransaction to update in case it exists.
     */
    where: PaymentTransactionWhereUniqueInput
    /**
     * In case the PaymentTransaction found by the `where` argument doesn't exist, create a new PaymentTransaction with this data.
     */
    create: XOR<PaymentTransactionCreateInput, PaymentTransactionUncheckedCreateInput>
    /**
     * In case the PaymentTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentTransactionUpdateInput, PaymentTransactionUncheckedUpdateInput>
  }

  /**
   * PaymentTransaction delete
   */
  export type PaymentTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
    /**
     * Filter which PaymentTransaction to delete.
     */
    where: PaymentTransactionWhereUniqueInput
  }

  /**
   * PaymentTransaction deleteMany
   */
  export type PaymentTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentTransactions to delete
     */
    where?: PaymentTransactionWhereInput
    /**
     * Limit how many PaymentTransactions to delete.
     */
    limit?: number
  }

  /**
   * PaymentTransaction without action
   */
  export type PaymentTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTransaction
     */
    select?: PaymentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTransaction
     */
    omit?: PaymentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTransactionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationCodes
   */

  export type AggregateVerificationCodes = {
    _count: VerificationCodesCountAggregateOutputType | null
    _avg: VerificationCodesAvgAggregateOutputType | null
    _sum: VerificationCodesSumAggregateOutputType | null
    _min: VerificationCodesMinAggregateOutputType | null
    _max: VerificationCodesMaxAggregateOutputType | null
  }

  export type VerificationCodesAvgAggregateOutputType = {
    id: number | null
  }

  export type VerificationCodesSumAggregateOutputType = {
    id: number | null
  }

  export type VerificationCodesMinAggregateOutputType = {
    id: number | null
    email: string | null
    otp: string | null
    isVerified: boolean | null
    type: $Enums.VerificationCodeType | null
    expiry: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCodesMaxAggregateOutputType = {
    id: number | null
    email: string | null
    otp: string | null
    isVerified: boolean | null
    type: $Enums.VerificationCodeType | null
    expiry: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCodesCountAggregateOutputType = {
    id: number
    email: number
    otp: number
    isVerified: number
    type: number
    expiry: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationCodesAvgAggregateInputType = {
    id?: true
  }

  export type VerificationCodesSumAggregateInputType = {
    id?: true
  }

  export type VerificationCodesMinAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    isVerified?: true
    type?: true
    expiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCodesMaxAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    isVerified?: true
    type?: true
    expiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCodesCountAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    isVerified?: true
    type?: true
    expiry?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationCodesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCodes to aggregate.
     */
    where?: VerificationCodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodesOrderByWithRelationInput | VerificationCodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationCodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationCodes
    **/
    _count?: true | VerificationCodesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerificationCodesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerificationCodesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationCodesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationCodesMaxAggregateInputType
  }

  export type GetVerificationCodesAggregateType<T extends VerificationCodesAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationCodes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationCodes[P]>
      : GetScalarType<T[P], AggregateVerificationCodes[P]>
  }




  export type VerificationCodesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationCodesWhereInput
    orderBy?: VerificationCodesOrderByWithAggregationInput | VerificationCodesOrderByWithAggregationInput[]
    by: VerificationCodesScalarFieldEnum[] | VerificationCodesScalarFieldEnum
    having?: VerificationCodesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCodesCountAggregateInputType | true
    _avg?: VerificationCodesAvgAggregateInputType
    _sum?: VerificationCodesSumAggregateInputType
    _min?: VerificationCodesMinAggregateInputType
    _max?: VerificationCodesMaxAggregateInputType
  }

  export type VerificationCodesGroupByOutputType = {
    id: number
    email: string
    otp: string | null
    isVerified: boolean
    type: $Enums.VerificationCodeType
    expiry: string
    createdAt: Date
    updatedAt: Date
    _count: VerificationCodesCountAggregateOutputType | null
    _avg: VerificationCodesAvgAggregateOutputType | null
    _sum: VerificationCodesSumAggregateOutputType | null
    _min: VerificationCodesMinAggregateOutputType | null
    _max: VerificationCodesMaxAggregateOutputType | null
  }

  type GetVerificationCodesGroupByPayload<T extends VerificationCodesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationCodesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationCodesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationCodesGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationCodesGroupByOutputType[P]>
        }
      >
    >


  export type VerificationCodesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    isVerified?: boolean
    type?: boolean
    expiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verificationCodes"]>

  export type VerificationCodesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    isVerified?: boolean
    type?: boolean
    expiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verificationCodes"]>

  export type VerificationCodesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    isVerified?: boolean
    type?: boolean
    expiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verificationCodes"]>

  export type VerificationCodesSelectScalar = {
    id?: boolean
    email?: boolean
    otp?: boolean
    isVerified?: boolean
    type?: boolean
    expiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationCodesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "otp" | "isVerified" | "type" | "expiry" | "createdAt" | "updatedAt", ExtArgs["result"]["verificationCodes"]>

  export type $VerificationCodesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationCodes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      otp: string | null
      isVerified: boolean
      type: $Enums.VerificationCodeType
      expiry: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verificationCodes"]>
    composites: {}
  }

  type VerificationCodesGetPayload<S extends boolean | null | undefined | VerificationCodesDefaultArgs> = $Result.GetResult<Prisma.$VerificationCodesPayload, S>

  type VerificationCodesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationCodesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCodesCountAggregateInputType | true
    }

  export interface VerificationCodesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationCodes'], meta: { name: 'VerificationCodes' } }
    /**
     * Find zero or one VerificationCodes that matches the filter.
     * @param {VerificationCodesFindUniqueArgs} args - Arguments to find a VerificationCodes
     * @example
     * // Get one VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationCodesFindUniqueArgs>(args: SelectSubset<T, VerificationCodesFindUniqueArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationCodes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationCodesFindUniqueOrThrowArgs} args - Arguments to find a VerificationCodes
     * @example
     * // Get one VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationCodesFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationCodesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesFindFirstArgs} args - Arguments to find a VerificationCodes
     * @example
     * // Get one VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationCodesFindFirstArgs>(args?: SelectSubset<T, VerificationCodesFindFirstArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCodes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesFindFirstOrThrowArgs} args - Arguments to find a VerificationCodes
     * @example
     * // Get one VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationCodesFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationCodesFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.findMany()
     * 
     * // Get first 10 VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationCodesWithIdOnly = await prisma.verificationCodes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationCodesFindManyArgs>(args?: SelectSubset<T, VerificationCodesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationCodes.
     * @param {VerificationCodesCreateArgs} args - Arguments to create a VerificationCodes.
     * @example
     * // Create one VerificationCodes
     * const VerificationCodes = await prisma.verificationCodes.create({
     *   data: {
     *     // ... data to create a VerificationCodes
     *   }
     * })
     * 
     */
    create<T extends VerificationCodesCreateArgs>(args: SelectSubset<T, VerificationCodesCreateArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationCodes.
     * @param {VerificationCodesCreateManyArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCodesCreateManyArgs>(args?: SelectSubset<T, VerificationCodesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationCodes and returns the data saved in the database.
     * @param {VerificationCodesCreateManyAndReturnArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationCodes and only return the `id`
     * const verificationCodesWithIdOnly = await prisma.verificationCodes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCodesCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCodesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationCodes.
     * @param {VerificationCodesDeleteArgs} args - Arguments to delete one VerificationCodes.
     * @example
     * // Delete one VerificationCodes
     * const VerificationCodes = await prisma.verificationCodes.delete({
     *   where: {
     *     // ... filter to delete one VerificationCodes
     *   }
     * })
     * 
     */
    delete<T extends VerificationCodesDeleteArgs>(args: SelectSubset<T, VerificationCodesDeleteArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationCodes.
     * @param {VerificationCodesUpdateArgs} args - Arguments to update one VerificationCodes.
     * @example
     * // Update one VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationCodesUpdateArgs>(args: SelectSubset<T, VerificationCodesUpdateArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationCodes.
     * @param {VerificationCodesDeleteManyArgs} args - Arguments to filter VerificationCodes to delete.
     * @example
     * // Delete a few VerificationCodes
     * const { count } = await prisma.verificationCodes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationCodesDeleteManyArgs>(args?: SelectSubset<T, VerificationCodesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationCodesUpdateManyArgs>(args: SelectSubset<T, VerificationCodesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes and returns the data updated in the database.
     * @param {VerificationCodesUpdateManyAndReturnArgs} args - Arguments to update many VerificationCodes.
     * @example
     * // Update many VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationCodes and only return the `id`
     * const verificationCodesWithIdOnly = await prisma.verificationCodes.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationCodesUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationCodesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationCodes.
     * @param {VerificationCodesUpsertArgs} args - Arguments to update or create a VerificationCodes.
     * @example
     * // Update or create a VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.upsert({
     *   create: {
     *     // ... data to create a VerificationCodes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationCodes we want to update
     *   }
     * })
     */
    upsert<T extends VerificationCodesUpsertArgs>(args: SelectSubset<T, VerificationCodesUpsertArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesCountArgs} args - Arguments to filter VerificationCodes to count.
     * @example
     * // Count the number of VerificationCodes
     * const count = await prisma.verificationCodes.count({
     *   where: {
     *     // ... the filter for the VerificationCodes we want to count
     *   }
     * })
    **/
    count<T extends VerificationCodesCountArgs>(
      args?: Subset<T, VerificationCodesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCodesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationCodesAggregateArgs>(args: Subset<T, VerificationCodesAggregateArgs>): Prisma.PrismaPromise<GetVerificationCodesAggregateType<T>>

    /**
     * Group by VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesGroupByArgs} args - Group by arguments.
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
      T extends VerificationCodesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationCodesGroupByArgs['orderBy'] }
        : { orderBy?: VerificationCodesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationCodesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationCodesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationCodes model
   */
  readonly fields: VerificationCodesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationCodes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationCodesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationCodes model
   */
  interface VerificationCodesFieldRefs {
    readonly id: FieldRef<"VerificationCodes", 'Int'>
    readonly email: FieldRef<"VerificationCodes", 'String'>
    readonly otp: FieldRef<"VerificationCodes", 'String'>
    readonly isVerified: FieldRef<"VerificationCodes", 'Boolean'>
    readonly type: FieldRef<"VerificationCodes", 'VerificationCodeType'>
    readonly expiry: FieldRef<"VerificationCodes", 'String'>
    readonly createdAt: FieldRef<"VerificationCodes", 'DateTime'>
    readonly updatedAt: FieldRef<"VerificationCodes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationCodes findUnique
   */
  export type VerificationCodesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where: VerificationCodesWhereUniqueInput
  }

  /**
   * VerificationCodes findUniqueOrThrow
   */
  export type VerificationCodesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where: VerificationCodesWhereUniqueInput
  }

  /**
   * VerificationCodes findFirst
   */
  export type VerificationCodesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where?: VerificationCodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodesOrderByWithRelationInput | VerificationCodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodesScalarFieldEnum | VerificationCodesScalarFieldEnum[]
  }

  /**
   * VerificationCodes findFirstOrThrow
   */
  export type VerificationCodesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where?: VerificationCodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodesOrderByWithRelationInput | VerificationCodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodesScalarFieldEnum | VerificationCodesScalarFieldEnum[]
  }

  /**
   * VerificationCodes findMany
   */
  export type VerificationCodesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where?: VerificationCodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodesOrderByWithRelationInput | VerificationCodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationCodes.
     */
    cursor?: VerificationCodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    distinct?: VerificationCodesScalarFieldEnum | VerificationCodesScalarFieldEnum[]
  }

  /**
   * VerificationCodes create
   */
  export type VerificationCodesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationCodes.
     */
    data: XOR<VerificationCodesCreateInput, VerificationCodesUncheckedCreateInput>
  }

  /**
   * VerificationCodes createMany
   */
  export type VerificationCodesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodesCreateManyInput | VerificationCodesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationCodes createManyAndReturn
   */
  export type VerificationCodesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodesCreateManyInput | VerificationCodesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationCodes update
   */
  export type VerificationCodesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationCodes.
     */
    data: XOR<VerificationCodesUpdateInput, VerificationCodesUncheckedUpdateInput>
    /**
     * Choose, which VerificationCodes to update.
     */
    where: VerificationCodesWhereUniqueInput
  }

  /**
   * VerificationCodes updateMany
   */
  export type VerificationCodesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodesUpdateManyMutationInput, VerificationCodesUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodesWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
  }

  /**
   * VerificationCodes updateManyAndReturn
   */
  export type VerificationCodesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodesUpdateManyMutationInput, VerificationCodesUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodesWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
  }

  /**
   * VerificationCodes upsert
   */
  export type VerificationCodesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationCodes to update in case it exists.
     */
    where: VerificationCodesWhereUniqueInput
    /**
     * In case the VerificationCodes found by the `where` argument doesn't exist, create a new VerificationCodes with this data.
     */
    create: XOR<VerificationCodesCreateInput, VerificationCodesUncheckedCreateInput>
    /**
     * In case the VerificationCodes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationCodesUpdateInput, VerificationCodesUncheckedUpdateInput>
  }

  /**
   * VerificationCodes delete
   */
  export type VerificationCodesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Filter which VerificationCodes to delete.
     */
    where: VerificationCodesWhereUniqueInput
  }

  /**
   * VerificationCodes deleteMany
   */
  export type VerificationCodesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCodes to delete
     */
    where?: VerificationCodesWhereInput
    /**
     * Limit how many VerificationCodes to delete.
     */
    limit?: number
  }

  /**
   * VerificationCodes without action
   */
  export type VerificationCodesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
  }


  /**
   * Model Stream
   */

  export type AggregateStream = {
    _count: StreamCountAggregateOutputType | null
    _min: StreamMinAggregateOutputType | null
    _max: StreamMaxAggregateOutputType | null
  }

  export type StreamMinAggregateOutputType = {
    id: string | null
    streamName: string | null
    hostId: string | null
    createdAt: Date | null
    active: boolean | null
  }

  export type StreamMaxAggregateOutputType = {
    id: string | null
    streamName: string | null
    hostId: string | null
    createdAt: Date | null
    active: boolean | null
  }

  export type StreamCountAggregateOutputType = {
    id: number
    streamName: number
    hostId: number
    createdAt: number
    active: number
    _all: number
  }


  export type StreamMinAggregateInputType = {
    id?: true
    streamName?: true
    hostId?: true
    createdAt?: true
    active?: true
  }

  export type StreamMaxAggregateInputType = {
    id?: true
    streamName?: true
    hostId?: true
    createdAt?: true
    active?: true
  }

  export type StreamCountAggregateInputType = {
    id?: true
    streamName?: true
    hostId?: true
    createdAt?: true
    active?: true
    _all?: true
  }

  export type StreamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stream to aggregate.
     */
    where?: StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamOrderByWithRelationInput | StreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Streams
    **/
    _count?: true | StreamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamMaxAggregateInputType
  }

  export type GetStreamAggregateType<T extends StreamAggregateArgs> = {
        [P in keyof T & keyof AggregateStream]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStream[P]>
      : GetScalarType<T[P], AggregateStream[P]>
  }




  export type StreamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamWhereInput
    orderBy?: StreamOrderByWithAggregationInput | StreamOrderByWithAggregationInput[]
    by: StreamScalarFieldEnum[] | StreamScalarFieldEnum
    having?: StreamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamCountAggregateInputType | true
    _min?: StreamMinAggregateInputType
    _max?: StreamMaxAggregateInputType
  }

  export type StreamGroupByOutputType = {
    id: string
    streamName: string
    hostId: string
    createdAt: Date
    active: boolean
    _count: StreamCountAggregateOutputType | null
    _min: StreamMinAggregateOutputType | null
    _max: StreamMaxAggregateOutputType | null
  }

  type GetStreamGroupByPayload<T extends StreamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamGroupByOutputType[P]>
            : GetScalarType<T[P], StreamGroupByOutputType[P]>
        }
      >
    >


  export type StreamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    streamName?: boolean
    hostId?: boolean
    createdAt?: boolean
    active?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
    songs?: boolean | Stream$songsArgs<ExtArgs>
    _count?: boolean | StreamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stream"]>

  export type StreamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    streamName?: boolean
    hostId?: boolean
    createdAt?: boolean
    active?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stream"]>

  export type StreamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    streamName?: boolean
    hostId?: boolean
    createdAt?: boolean
    active?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stream"]>

  export type StreamSelectScalar = {
    id?: boolean
    streamName?: boolean
    hostId?: boolean
    createdAt?: boolean
    active?: boolean
  }

  export type StreamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "streamName" | "hostId" | "createdAt" | "active", ExtArgs["result"]["stream"]>
  export type StreamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
    songs?: boolean | Stream$songsArgs<ExtArgs>
    _count?: boolean | StreamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StreamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StreamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StreamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stream"
    objects: {
      host: Prisma.$UserPayload<ExtArgs>
      songs: Prisma.$StreamSongPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      streamName: string
      hostId: string
      createdAt: Date
      active: boolean
    }, ExtArgs["result"]["stream"]>
    composites: {}
  }

  type StreamGetPayload<S extends boolean | null | undefined | StreamDefaultArgs> = $Result.GetResult<Prisma.$StreamPayload, S>

  type StreamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreamCountAggregateInputType | true
    }

  export interface StreamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stream'], meta: { name: 'Stream' } }
    /**
     * Find zero or one Stream that matches the filter.
     * @param {StreamFindUniqueArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreamFindUniqueArgs>(args: SelectSubset<T, StreamFindUniqueArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stream that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreamFindUniqueOrThrowArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreamFindUniqueOrThrowArgs>(args: SelectSubset<T, StreamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stream that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamFindFirstArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreamFindFirstArgs>(args?: SelectSubset<T, StreamFindFirstArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stream that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamFindFirstOrThrowArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreamFindFirstOrThrowArgs>(args?: SelectSubset<T, StreamFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Streams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Streams
     * const streams = await prisma.stream.findMany()
     * 
     * // Get first 10 Streams
     * const streams = await prisma.stream.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamWithIdOnly = await prisma.stream.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreamFindManyArgs>(args?: SelectSubset<T, StreamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stream.
     * @param {StreamCreateArgs} args - Arguments to create a Stream.
     * @example
     * // Create one Stream
     * const Stream = await prisma.stream.create({
     *   data: {
     *     // ... data to create a Stream
     *   }
     * })
     * 
     */
    create<T extends StreamCreateArgs>(args: SelectSubset<T, StreamCreateArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Streams.
     * @param {StreamCreateManyArgs} args - Arguments to create many Streams.
     * @example
     * // Create many Streams
     * const stream = await prisma.stream.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreamCreateManyArgs>(args?: SelectSubset<T, StreamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Streams and returns the data saved in the database.
     * @param {StreamCreateManyAndReturnArgs} args - Arguments to create many Streams.
     * @example
     * // Create many Streams
     * const stream = await prisma.stream.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Streams and only return the `id`
     * const streamWithIdOnly = await prisma.stream.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreamCreateManyAndReturnArgs>(args?: SelectSubset<T, StreamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stream.
     * @param {StreamDeleteArgs} args - Arguments to delete one Stream.
     * @example
     * // Delete one Stream
     * const Stream = await prisma.stream.delete({
     *   where: {
     *     // ... filter to delete one Stream
     *   }
     * })
     * 
     */
    delete<T extends StreamDeleteArgs>(args: SelectSubset<T, StreamDeleteArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stream.
     * @param {StreamUpdateArgs} args - Arguments to update one Stream.
     * @example
     * // Update one Stream
     * const stream = await prisma.stream.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreamUpdateArgs>(args: SelectSubset<T, StreamUpdateArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Streams.
     * @param {StreamDeleteManyArgs} args - Arguments to filter Streams to delete.
     * @example
     * // Delete a few Streams
     * const { count } = await prisma.stream.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreamDeleteManyArgs>(args?: SelectSubset<T, StreamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Streams
     * const stream = await prisma.stream.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreamUpdateManyArgs>(args: SelectSubset<T, StreamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streams and returns the data updated in the database.
     * @param {StreamUpdateManyAndReturnArgs} args - Arguments to update many Streams.
     * @example
     * // Update many Streams
     * const stream = await prisma.stream.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Streams and only return the `id`
     * const streamWithIdOnly = await prisma.stream.updateManyAndReturn({
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
    updateManyAndReturn<T extends StreamUpdateManyAndReturnArgs>(args: SelectSubset<T, StreamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stream.
     * @param {StreamUpsertArgs} args - Arguments to update or create a Stream.
     * @example
     * // Update or create a Stream
     * const stream = await prisma.stream.upsert({
     *   create: {
     *     // ... data to create a Stream
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stream we want to update
     *   }
     * })
     */
    upsert<T extends StreamUpsertArgs>(args: SelectSubset<T, StreamUpsertArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamCountArgs} args - Arguments to filter Streams to count.
     * @example
     * // Count the number of Streams
     * const count = await prisma.stream.count({
     *   where: {
     *     // ... the filter for the Streams we want to count
     *   }
     * })
    **/
    count<T extends StreamCountArgs>(
      args?: Subset<T, StreamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stream.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StreamAggregateArgs>(args: Subset<T, StreamAggregateArgs>): Prisma.PrismaPromise<GetStreamAggregateType<T>>

    /**
     * Group by Stream.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamGroupByArgs} args - Group by arguments.
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
      T extends StreamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamGroupByArgs['orderBy'] }
        : { orderBy?: StreamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StreamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stream model
   */
  readonly fields: StreamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stream.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    host<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    songs<T extends Stream$songsArgs<ExtArgs> = {}>(args?: Subset<T, Stream$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Stream model
   */
  interface StreamFieldRefs {
    readonly id: FieldRef<"Stream", 'String'>
    readonly streamName: FieldRef<"Stream", 'String'>
    readonly hostId: FieldRef<"Stream", 'String'>
    readonly createdAt: FieldRef<"Stream", 'DateTime'>
    readonly active: FieldRef<"Stream", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Stream findUnique
   */
  export type StreamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter, which Stream to fetch.
     */
    where: StreamWhereUniqueInput
  }

  /**
   * Stream findUniqueOrThrow
   */
  export type StreamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter, which Stream to fetch.
     */
    where: StreamWhereUniqueInput
  }

  /**
   * Stream findFirst
   */
  export type StreamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter, which Stream to fetch.
     */
    where?: StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamOrderByWithRelationInput | StreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streams.
     */
    cursor?: StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streams.
     */
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }

  /**
   * Stream findFirstOrThrow
   */
  export type StreamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter, which Stream to fetch.
     */
    where?: StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamOrderByWithRelationInput | StreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streams.
     */
    cursor?: StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streams.
     */
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }

  /**
   * Stream findMany
   */
  export type StreamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter, which Streams to fetch.
     */
    where?: StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamOrderByWithRelationInput | StreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Streams.
     */
    cursor?: StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }

  /**
   * Stream create
   */
  export type StreamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * The data needed to create a Stream.
     */
    data: XOR<StreamCreateInput, StreamUncheckedCreateInput>
  }

  /**
   * Stream createMany
   */
  export type StreamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Streams.
     */
    data: StreamCreateManyInput | StreamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stream createManyAndReturn
   */
  export type StreamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * The data used to create many Streams.
     */
    data: StreamCreateManyInput | StreamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stream update
   */
  export type StreamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * The data needed to update a Stream.
     */
    data: XOR<StreamUpdateInput, StreamUncheckedUpdateInput>
    /**
     * Choose, which Stream to update.
     */
    where: StreamWhereUniqueInput
  }

  /**
   * Stream updateMany
   */
  export type StreamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Streams.
     */
    data: XOR<StreamUpdateManyMutationInput, StreamUncheckedUpdateManyInput>
    /**
     * Filter which Streams to update
     */
    where?: StreamWhereInput
    /**
     * Limit how many Streams to update.
     */
    limit?: number
  }

  /**
   * Stream updateManyAndReturn
   */
  export type StreamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * The data used to update Streams.
     */
    data: XOR<StreamUpdateManyMutationInput, StreamUncheckedUpdateManyInput>
    /**
     * Filter which Streams to update
     */
    where?: StreamWhereInput
    /**
     * Limit how many Streams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stream upsert
   */
  export type StreamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * The filter to search for the Stream to update in case it exists.
     */
    where: StreamWhereUniqueInput
    /**
     * In case the Stream found by the `where` argument doesn't exist, create a new Stream with this data.
     */
    create: XOR<StreamCreateInput, StreamUncheckedCreateInput>
    /**
     * In case the Stream was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamUpdateInput, StreamUncheckedUpdateInput>
  }

  /**
   * Stream delete
   */
  export type StreamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter which Stream to delete.
     */
    where: StreamWhereUniqueInput
  }

  /**
   * Stream deleteMany
   */
  export type StreamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streams to delete
     */
    where?: StreamWhereInput
    /**
     * Limit how many Streams to delete.
     */
    limit?: number
  }

  /**
   * Stream.songs
   */
  export type Stream$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSong
     */
    select?: StreamSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSong
     */
    omit?: StreamSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSongInclude<ExtArgs> | null
    where?: StreamSongWhereInput
    orderBy?: StreamSongOrderByWithRelationInput | StreamSongOrderByWithRelationInput[]
    cursor?: StreamSongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamSongScalarFieldEnum | StreamSongScalarFieldEnum[]
  }

  /**
   * Stream without action
   */
  export type StreamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
  }


  /**
   * Model StreamSong
   */

  export type AggregateStreamSong = {
    _count: StreamSongCountAggregateOutputType | null
    _min: StreamSongMinAggregateOutputType | null
    _max: StreamSongMaxAggregateOutputType | null
  }

  export type StreamSongMinAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    streamId: string | null
    userId: string | null
    addedAt: Date | null
  }

  export type StreamSongMaxAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    streamId: string | null
    userId: string | null
    addedAt: Date | null
  }

  export type StreamSongCountAggregateOutputType = {
    id: number
    url: number
    title: number
    streamId: number
    userId: number
    addedAt: number
    _all: number
  }


  export type StreamSongMinAggregateInputType = {
    id?: true
    url?: true
    title?: true
    streamId?: true
    userId?: true
    addedAt?: true
  }

  export type StreamSongMaxAggregateInputType = {
    id?: true
    url?: true
    title?: true
    streamId?: true
    userId?: true
    addedAt?: true
  }

  export type StreamSongCountAggregateInputType = {
    id?: true
    url?: true
    title?: true
    streamId?: true
    userId?: true
    addedAt?: true
    _all?: true
  }

  export type StreamSongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamSong to aggregate.
     */
    where?: StreamSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamSongs to fetch.
     */
    orderBy?: StreamSongOrderByWithRelationInput | StreamSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StreamSongs
    **/
    _count?: true | StreamSongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamSongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamSongMaxAggregateInputType
  }

  export type GetStreamSongAggregateType<T extends StreamSongAggregateArgs> = {
        [P in keyof T & keyof AggregateStreamSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreamSong[P]>
      : GetScalarType<T[P], AggregateStreamSong[P]>
  }




  export type StreamSongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamSongWhereInput
    orderBy?: StreamSongOrderByWithAggregationInput | StreamSongOrderByWithAggregationInput[]
    by: StreamSongScalarFieldEnum[] | StreamSongScalarFieldEnum
    having?: StreamSongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamSongCountAggregateInputType | true
    _min?: StreamSongMinAggregateInputType
    _max?: StreamSongMaxAggregateInputType
  }

  export type StreamSongGroupByOutputType = {
    id: string
    url: string
    title: string | null
    streamId: string
    userId: string
    addedAt: Date
    _count: StreamSongCountAggregateOutputType | null
    _min: StreamSongMinAggregateOutputType | null
    _max: StreamSongMaxAggregateOutputType | null
  }

  type GetStreamSongGroupByPayload<T extends StreamSongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamSongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamSongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamSongGroupByOutputType[P]>
            : GetScalarType<T[P], StreamSongGroupByOutputType[P]>
        }
      >
    >


  export type StreamSongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    streamId?: boolean
    userId?: boolean
    addedAt?: boolean
    stream?: boolean | StreamDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    votes?: boolean | StreamSong$votesArgs<ExtArgs>
    _count?: boolean | StreamSongCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamSong"]>

  export type StreamSongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    streamId?: boolean
    userId?: boolean
    addedAt?: boolean
    stream?: boolean | StreamDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamSong"]>

  export type StreamSongSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    streamId?: boolean
    userId?: boolean
    addedAt?: boolean
    stream?: boolean | StreamDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamSong"]>

  export type StreamSongSelectScalar = {
    id?: boolean
    url?: boolean
    title?: boolean
    streamId?: boolean
    userId?: boolean
    addedAt?: boolean
  }

  export type StreamSongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "title" | "streamId" | "userId" | "addedAt", ExtArgs["result"]["streamSong"]>
  export type StreamSongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stream?: boolean | StreamDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    votes?: boolean | StreamSong$votesArgs<ExtArgs>
    _count?: boolean | StreamSongCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StreamSongIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stream?: boolean | StreamDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StreamSongIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stream?: boolean | StreamDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StreamSongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StreamSong"
    objects: {
      stream: Prisma.$StreamPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      title: string | null
      streamId: string
      userId: string
      addedAt: Date
    }, ExtArgs["result"]["streamSong"]>
    composites: {}
  }

  type StreamSongGetPayload<S extends boolean | null | undefined | StreamSongDefaultArgs> = $Result.GetResult<Prisma.$StreamSongPayload, S>

  type StreamSongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreamSongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreamSongCountAggregateInputType | true
    }

  export interface StreamSongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StreamSong'], meta: { name: 'StreamSong' } }
    /**
     * Find zero or one StreamSong that matches the filter.
     * @param {StreamSongFindUniqueArgs} args - Arguments to find a StreamSong
     * @example
     * // Get one StreamSong
     * const streamSong = await prisma.streamSong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreamSongFindUniqueArgs>(args: SelectSubset<T, StreamSongFindUniqueArgs<ExtArgs>>): Prisma__StreamSongClient<$Result.GetResult<Prisma.$StreamSongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StreamSong that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreamSongFindUniqueOrThrowArgs} args - Arguments to find a StreamSong
     * @example
     * // Get one StreamSong
     * const streamSong = await prisma.streamSong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreamSongFindUniqueOrThrowArgs>(args: SelectSubset<T, StreamSongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreamSongClient<$Result.GetResult<Prisma.$StreamSongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreamSong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSongFindFirstArgs} args - Arguments to find a StreamSong
     * @example
     * // Get one StreamSong
     * const streamSong = await prisma.streamSong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreamSongFindFirstArgs>(args?: SelectSubset<T, StreamSongFindFirstArgs<ExtArgs>>): Prisma__StreamSongClient<$Result.GetResult<Prisma.$StreamSongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreamSong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSongFindFirstOrThrowArgs} args - Arguments to find a StreamSong
     * @example
     * // Get one StreamSong
     * const streamSong = await prisma.streamSong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreamSongFindFirstOrThrowArgs>(args?: SelectSubset<T, StreamSongFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreamSongClient<$Result.GetResult<Prisma.$StreamSongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StreamSongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StreamSongs
     * const streamSongs = await prisma.streamSong.findMany()
     * 
     * // Get first 10 StreamSongs
     * const streamSongs = await prisma.streamSong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamSongWithIdOnly = await prisma.streamSong.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreamSongFindManyArgs>(args?: SelectSubset<T, StreamSongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StreamSong.
     * @param {StreamSongCreateArgs} args - Arguments to create a StreamSong.
     * @example
     * // Create one StreamSong
     * const StreamSong = await prisma.streamSong.create({
     *   data: {
     *     // ... data to create a StreamSong
     *   }
     * })
     * 
     */
    create<T extends StreamSongCreateArgs>(args: SelectSubset<T, StreamSongCreateArgs<ExtArgs>>): Prisma__StreamSongClient<$Result.GetResult<Prisma.$StreamSongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StreamSongs.
     * @param {StreamSongCreateManyArgs} args - Arguments to create many StreamSongs.
     * @example
     * // Create many StreamSongs
     * const streamSong = await prisma.streamSong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreamSongCreateManyArgs>(args?: SelectSubset<T, StreamSongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StreamSongs and returns the data saved in the database.
     * @param {StreamSongCreateManyAndReturnArgs} args - Arguments to create many StreamSongs.
     * @example
     * // Create many StreamSongs
     * const streamSong = await prisma.streamSong.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StreamSongs and only return the `id`
     * const streamSongWithIdOnly = await prisma.streamSong.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreamSongCreateManyAndReturnArgs>(args?: SelectSubset<T, StreamSongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamSongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StreamSong.
     * @param {StreamSongDeleteArgs} args - Arguments to delete one StreamSong.
     * @example
     * // Delete one StreamSong
     * const StreamSong = await prisma.streamSong.delete({
     *   where: {
     *     // ... filter to delete one StreamSong
     *   }
     * })
     * 
     */
    delete<T extends StreamSongDeleteArgs>(args: SelectSubset<T, StreamSongDeleteArgs<ExtArgs>>): Prisma__StreamSongClient<$Result.GetResult<Prisma.$StreamSongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StreamSong.
     * @param {StreamSongUpdateArgs} args - Arguments to update one StreamSong.
     * @example
     * // Update one StreamSong
     * const streamSong = await prisma.streamSong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreamSongUpdateArgs>(args: SelectSubset<T, StreamSongUpdateArgs<ExtArgs>>): Prisma__StreamSongClient<$Result.GetResult<Prisma.$StreamSongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StreamSongs.
     * @param {StreamSongDeleteManyArgs} args - Arguments to filter StreamSongs to delete.
     * @example
     * // Delete a few StreamSongs
     * const { count } = await prisma.streamSong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreamSongDeleteManyArgs>(args?: SelectSubset<T, StreamSongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StreamSongs
     * const streamSong = await prisma.streamSong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreamSongUpdateManyArgs>(args: SelectSubset<T, StreamSongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamSongs and returns the data updated in the database.
     * @param {StreamSongUpdateManyAndReturnArgs} args - Arguments to update many StreamSongs.
     * @example
     * // Update many StreamSongs
     * const streamSong = await prisma.streamSong.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StreamSongs and only return the `id`
     * const streamSongWithIdOnly = await prisma.streamSong.updateManyAndReturn({
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
    updateManyAndReturn<T extends StreamSongUpdateManyAndReturnArgs>(args: SelectSubset<T, StreamSongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamSongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StreamSong.
     * @param {StreamSongUpsertArgs} args - Arguments to update or create a StreamSong.
     * @example
     * // Update or create a StreamSong
     * const streamSong = await prisma.streamSong.upsert({
     *   create: {
     *     // ... data to create a StreamSong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StreamSong we want to update
     *   }
     * })
     */
    upsert<T extends StreamSongUpsertArgs>(args: SelectSubset<T, StreamSongUpsertArgs<ExtArgs>>): Prisma__StreamSongClient<$Result.GetResult<Prisma.$StreamSongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StreamSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSongCountArgs} args - Arguments to filter StreamSongs to count.
     * @example
     * // Count the number of StreamSongs
     * const count = await prisma.streamSong.count({
     *   where: {
     *     // ... the filter for the StreamSongs we want to count
     *   }
     * })
    **/
    count<T extends StreamSongCountArgs>(
      args?: Subset<T, StreamSongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamSongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StreamSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StreamSongAggregateArgs>(args: Subset<T, StreamSongAggregateArgs>): Prisma.PrismaPromise<GetStreamSongAggregateType<T>>

    /**
     * Group by StreamSong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSongGroupByArgs} args - Group by arguments.
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
      T extends StreamSongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamSongGroupByArgs['orderBy'] }
        : { orderBy?: StreamSongGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StreamSongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StreamSong model
   */
  readonly fields: StreamSongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StreamSong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreamSongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stream<T extends StreamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StreamDefaultArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votes<T extends StreamSong$votesArgs<ExtArgs> = {}>(args?: Subset<T, StreamSong$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the StreamSong model
   */
  interface StreamSongFieldRefs {
    readonly id: FieldRef<"StreamSong", 'String'>
    readonly url: FieldRef<"StreamSong", 'String'>
    readonly title: FieldRef<"StreamSong", 'String'>
    readonly streamId: FieldRef<"StreamSong", 'String'>
    readonly userId: FieldRef<"StreamSong", 'String'>
    readonly addedAt: FieldRef<"StreamSong", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StreamSong findUnique
   */
  export type StreamSongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSong
     */
    select?: StreamSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSong
     */
    omit?: StreamSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSongInclude<ExtArgs> | null
    /**
     * Filter, which StreamSong to fetch.
     */
    where: StreamSongWhereUniqueInput
  }

  /**
   * StreamSong findUniqueOrThrow
   */
  export type StreamSongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSong
     */
    select?: StreamSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSong
     */
    omit?: StreamSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSongInclude<ExtArgs> | null
    /**
     * Filter, which StreamSong to fetch.
     */
    where: StreamSongWhereUniqueInput
  }

  /**
   * StreamSong findFirst
   */
  export type StreamSongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSong
     */
    select?: StreamSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSong
     */
    omit?: StreamSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSongInclude<ExtArgs> | null
    /**
     * Filter, which StreamSong to fetch.
     */
    where?: StreamSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamSongs to fetch.
     */
    orderBy?: StreamSongOrderByWithRelationInput | StreamSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamSongs.
     */
    cursor?: StreamSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamSongs.
     */
    distinct?: StreamSongScalarFieldEnum | StreamSongScalarFieldEnum[]
  }

  /**
   * StreamSong findFirstOrThrow
   */
  export type StreamSongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSong
     */
    select?: StreamSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSong
     */
    omit?: StreamSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSongInclude<ExtArgs> | null
    /**
     * Filter, which StreamSong to fetch.
     */
    where?: StreamSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamSongs to fetch.
     */
    orderBy?: StreamSongOrderByWithRelationInput | StreamSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamSongs.
     */
    cursor?: StreamSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamSongs.
     */
    distinct?: StreamSongScalarFieldEnum | StreamSongScalarFieldEnum[]
  }

  /**
   * StreamSong findMany
   */
  export type StreamSongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSong
     */
    select?: StreamSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSong
     */
    omit?: StreamSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSongInclude<ExtArgs> | null
    /**
     * Filter, which StreamSongs to fetch.
     */
    where?: StreamSongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamSongs to fetch.
     */
    orderBy?: StreamSongOrderByWithRelationInput | StreamSongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StreamSongs.
     */
    cursor?: StreamSongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamSongs.
     */
    skip?: number
    distinct?: StreamSongScalarFieldEnum | StreamSongScalarFieldEnum[]
  }

  /**
   * StreamSong create
   */
  export type StreamSongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSong
     */
    select?: StreamSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSong
     */
    omit?: StreamSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSongInclude<ExtArgs> | null
    /**
     * The data needed to create a StreamSong.
     */
    data: XOR<StreamSongCreateInput, StreamSongUncheckedCreateInput>
  }

  /**
   * StreamSong createMany
   */
  export type StreamSongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StreamSongs.
     */
    data: StreamSongCreateManyInput | StreamSongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StreamSong createManyAndReturn
   */
  export type StreamSongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSong
     */
    select?: StreamSongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSong
     */
    omit?: StreamSongOmit<ExtArgs> | null
    /**
     * The data used to create many StreamSongs.
     */
    data: StreamSongCreateManyInput | StreamSongCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSongIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreamSong update
   */
  export type StreamSongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSong
     */
    select?: StreamSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSong
     */
    omit?: StreamSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSongInclude<ExtArgs> | null
    /**
     * The data needed to update a StreamSong.
     */
    data: XOR<StreamSongUpdateInput, StreamSongUncheckedUpdateInput>
    /**
     * Choose, which StreamSong to update.
     */
    where: StreamSongWhereUniqueInput
  }

  /**
   * StreamSong updateMany
   */
  export type StreamSongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StreamSongs.
     */
    data: XOR<StreamSongUpdateManyMutationInput, StreamSongUncheckedUpdateManyInput>
    /**
     * Filter which StreamSongs to update
     */
    where?: StreamSongWhereInput
    /**
     * Limit how many StreamSongs to update.
     */
    limit?: number
  }

  /**
   * StreamSong updateManyAndReturn
   */
  export type StreamSongUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSong
     */
    select?: StreamSongSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSong
     */
    omit?: StreamSongOmit<ExtArgs> | null
    /**
     * The data used to update StreamSongs.
     */
    data: XOR<StreamSongUpdateManyMutationInput, StreamSongUncheckedUpdateManyInput>
    /**
     * Filter which StreamSongs to update
     */
    where?: StreamSongWhereInput
    /**
     * Limit how many StreamSongs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSongIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreamSong upsert
   */
  export type StreamSongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSong
     */
    select?: StreamSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSong
     */
    omit?: StreamSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSongInclude<ExtArgs> | null
    /**
     * The filter to search for the StreamSong to update in case it exists.
     */
    where: StreamSongWhereUniqueInput
    /**
     * In case the StreamSong found by the `where` argument doesn't exist, create a new StreamSong with this data.
     */
    create: XOR<StreamSongCreateInput, StreamSongUncheckedCreateInput>
    /**
     * In case the StreamSong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamSongUpdateInput, StreamSongUncheckedUpdateInput>
  }

  /**
   * StreamSong delete
   */
  export type StreamSongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSong
     */
    select?: StreamSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSong
     */
    omit?: StreamSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSongInclude<ExtArgs> | null
    /**
     * Filter which StreamSong to delete.
     */
    where: StreamSongWhereUniqueInput
  }

  /**
   * StreamSong deleteMany
   */
  export type StreamSongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamSongs to delete
     */
    where?: StreamSongWhereInput
    /**
     * Limit how many StreamSongs to delete.
     */
    limit?: number
  }

  /**
   * StreamSong.votes
   */
  export type StreamSong$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * StreamSong without action
   */
  export type StreamSongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSong
     */
    select?: StreamSongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSong
     */
    omit?: StreamSongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSongInclude<ExtArgs> | null
  }


  /**
   * Model Vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  export type VoteMinAggregateOutputType = {
    id: string | null
    songId: string | null
    userId: string | null
    type: $Enums.VoteType | null
  }

  export type VoteMaxAggregateOutputType = {
    id: string | null
    songId: string | null
    userId: string | null
    type: $Enums.VoteType | null
  }

  export type VoteCountAggregateOutputType = {
    id: number
    songId: number
    userId: number
    type: number
    _all: number
  }


  export type VoteMinAggregateInputType = {
    id?: true
    songId?: true
    userId?: true
    type?: true
  }

  export type VoteMaxAggregateInputType = {
    id?: true
    songId?: true
    userId?: true
    type?: true
  }

  export type VoteCountAggregateInputType = {
    id?: true
    songId?: true
    userId?: true
    type?: true
    _all?: true
  }

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vote to aggregate.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votes
    **/
    _count?: true | VoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteMaxAggregateInputType
  }

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>
  }




  export type VoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithAggregationInput | VoteOrderByWithAggregationInput[]
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum
    having?: VoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteCountAggregateInputType | true
    _min?: VoteMinAggregateInputType
    _max?: VoteMaxAggregateInputType
  }

  export type VoteGroupByOutputType = {
    id: string
    songId: string
    userId: string
    type: $Enums.VoteType
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  type GetVoteGroupByPayload<T extends VoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteGroupByOutputType[P]>
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
        }
      >
    >


  export type VoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    userId?: boolean
    type?: boolean
    song?: boolean | StreamSongDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    userId?: boolean
    type?: boolean
    song?: boolean | StreamSongDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    userId?: boolean
    type?: boolean
    song?: boolean | StreamSongDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectScalar = {
    id?: boolean
    songId?: boolean
    userId?: boolean
    type?: boolean
  }

  export type VoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "songId" | "userId" | "type", ExtArgs["result"]["vote"]>
  export type VoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | StreamSongDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | StreamSongDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | StreamSongDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vote"
    objects: {
      song: Prisma.$StreamSongPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      songId: string
      userId: string
      type: $Enums.VoteType
    }, ExtArgs["result"]["vote"]>
    composites: {}
  }

  type VoteGetPayload<S extends boolean | null | undefined | VoteDefaultArgs> = $Result.GetResult<Prisma.$VotePayload, S>

  type VoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoteCountAggregateInputType | true
    }

  export interface VoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vote'], meta: { name: 'Vote' } }
    /**
     * Find zero or one Vote that matches the filter.
     * @param {VoteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoteFindUniqueArgs>(args: SelectSubset<T, VoteFindUniqueArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoteFindUniqueOrThrowArgs>(args: SelectSubset<T, VoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoteFindFirstArgs>(args?: SelectSubset<T, VoteFindFirstArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoteFindFirstOrThrowArgs>(args?: SelectSubset<T, VoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voteWithIdOnly = await prisma.vote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoteFindManyArgs>(args?: SelectSubset<T, VoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vote.
     * @param {VoteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     * 
     */
    create<T extends VoteCreateArgs>(args: SelectSubset<T, VoteCreateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {VoteCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoteCreateManyArgs>(args?: SelectSubset<T, VoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Votes and returns the data saved in the database.
     * @param {VoteCreateManyAndReturnArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoteCreateManyAndReturnArgs>(args?: SelectSubset<T, VoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vote.
     * @param {VoteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     * 
     */
    delete<T extends VoteDeleteArgs>(args: SelectSubset<T, VoteDeleteArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vote.
     * @param {VoteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoteUpdateArgs>(args: SelectSubset<T, VoteUpdateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {VoteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoteDeleteManyArgs>(args?: SelectSubset<T, VoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoteUpdateManyArgs>(args: SelectSubset<T, VoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes and returns the data updated in the database.
     * @param {VoteUpdateManyAndReturnArgs} args - Arguments to update many Votes.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.updateManyAndReturn({
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
    updateManyAndReturn<T extends VoteUpdateManyAndReturnArgs>(args: SelectSubset<T, VoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vote.
     * @param {VoteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     */
    upsert<T extends VoteUpsertArgs>(args: SelectSubset<T, VoteUpsertArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends VoteCountArgs>(
      args?: Subset<T, VoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoteAggregateArgs>(args: Subset<T, VoteAggregateArgs>): Prisma.PrismaPromise<GetVoteAggregateType<T>>

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteGroupByArgs} args - Group by arguments.
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
      T extends VoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteGroupByArgs['orderBy'] }
        : { orderBy?: VoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vote model
   */
  readonly fields: VoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    song<T extends StreamSongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StreamSongDefaultArgs<ExtArgs>>): Prisma__StreamSongClient<$Result.GetResult<Prisma.$StreamSongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Vote model
   */
  interface VoteFieldRefs {
    readonly id: FieldRef<"Vote", 'String'>
    readonly songId: FieldRef<"Vote", 'String'>
    readonly userId: FieldRef<"Vote", 'String'>
    readonly type: FieldRef<"Vote", 'VoteType'>
  }
    

  // Custom InputTypes
  /**
   * Vote findUnique
   */
  export type VoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findUniqueOrThrow
   */
  export type VoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findFirst
   */
  export type VoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findFirstOrThrow
   */
  export type VoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findMany
   */
  export type VoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote create
   */
  export type VoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Vote.
     */
    data: XOR<VoteCreateInput, VoteUncheckedCreateInput>
  }

  /**
   * Vote createMany
   */
  export type VoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vote createManyAndReturn
   */
  export type VoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote update
   */
  export type VoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Vote.
     */
    data: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
    /**
     * Choose, which Vote to update.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote updateMany
   */
  export type VoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
  }

  /**
   * Vote updateManyAndReturn
   */
  export type VoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote upsert
   */
  export type VoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Vote to update in case it exists.
     */
    where: VoteWhereUniqueInput
    /**
     * In case the Vote found by the `where` argument doesn't exist, create a new Vote with this data.
     */
    create: XOR<VoteCreateInput, VoteUncheckedCreateInput>
    /**
     * In case the Vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
  }

  /**
   * Vote delete
   */
  export type VoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter which Vote to delete.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote deleteMany
   */
  export type VoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to delete
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to delete.
     */
    limit?: number
  }

  /**
   * Vote without action
   */
  export type VoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
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
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    password: 'password',
    socialLogin: 'socialLogin',
    role: 'role',
    isSubscribed: 'isSubscribed',
    avatarUrl: 'avatarUrl',
    publicId: 'publicId',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SongScalarFieldEnum: {
    id: 'id',
    title: 'title',
    artist: 'artist',
    duration: 'duration',
    lyrics: 'lyrics',
    songUrl: 'songUrl',
    coverImage: 'coverImage',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type SongScalarFieldEnum = (typeof SongScalarFieldEnum)[keyof typeof SongScalarFieldEnum]


  export const AlbumScalarFieldEnum: {
    id: 'id',
    albumName: 'albumName',
    artist: 'artist',
    coverImage: 'coverImage',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    playlistName: 'playlistName',
    userId: 'userId',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const PlaylistSongScalarFieldEnum: {
    id: 'id',
    songId: 'songId',
    playlistId: 'playlistId',
    addedAt: 'addedAt'
  };

  export type PlaylistSongScalarFieldEnum = (typeof PlaylistSongScalarFieldEnum)[keyof typeof PlaylistSongScalarFieldEnum]


  export const AlbumSongScalarFieldEnum: {
    id: 'id',
    albumId: 'albumId',
    songId: 'songId'
  };

  export type AlbumSongScalarFieldEnum = (typeof AlbumSongScalarFieldEnum)[keyof typeof AlbumSongScalarFieldEnum]


  export const StarredSongScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    songId: 'songId'
  };

  export type StarredSongScalarFieldEnum = (typeof StarredSongScalarFieldEnum)[keyof typeof StarredSongScalarFieldEnum]


  export const PricingPackageScalarFieldEnum: {
    id: 'id',
    packageName: 'packageName',
    price: 'price',
    durationMonth: 'durationMonth',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PricingPackageScalarFieldEnum = (typeof PricingPackageScalarFieldEnum)[keyof typeof PricingPackageScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    packageId: 'packageId',
    userId: 'userId',
    transactionId: 'transactionId'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const PaymentTransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    packageId: 'packageId',
    subscriptionId: 'subscriptionId',
    amount: 'amount',
    currency: 'currency',
    paymentMethod: 'paymentMethod',
    status: 'status',
    paymentProvider: 'paymentProvider',
    providerTransactionId: 'providerTransactionId',
    createdAt: 'createdAt'
  };

  export type PaymentTransactionScalarFieldEnum = (typeof PaymentTransactionScalarFieldEnum)[keyof typeof PaymentTransactionScalarFieldEnum]


  export const VerificationCodesScalarFieldEnum: {
    id: 'id',
    email: 'email',
    otp: 'otp',
    isVerified: 'isVerified',
    type: 'type',
    expiry: 'expiry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationCodesScalarFieldEnum = (typeof VerificationCodesScalarFieldEnum)[keyof typeof VerificationCodesScalarFieldEnum]


  export const StreamScalarFieldEnum: {
    id: 'id',
    streamName: 'streamName',
    hostId: 'hostId',
    createdAt: 'createdAt',
    active: 'active'
  };

  export type StreamScalarFieldEnum = (typeof StreamScalarFieldEnum)[keyof typeof StreamScalarFieldEnum]


  export const StreamSongScalarFieldEnum: {
    id: 'id',
    url: 'url',
    title: 'title',
    streamId: 'streamId',
    userId: 'userId',
    addedAt: 'addedAt'
  };

  export type StreamSongScalarFieldEnum = (typeof StreamSongScalarFieldEnum)[keyof typeof StreamSongScalarFieldEnum]


  export const VoteScalarFieldEnum: {
    id: 'id',
    songId: 'songId',
    userId: 'userId',
    type: 'type'
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'VerificationCodeType'
   */
  export type EnumVerificationCodeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationCodeType'>
    


  /**
   * Reference to a field of type 'VerificationCodeType[]'
   */
  export type ListEnumVerificationCodeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationCodeType[]'>
    


  /**
   * Reference to a field of type 'VoteType'
   */
  export type EnumVoteTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VoteType'>
    


  /**
   * Reference to a field of type 'VoteType[]'
   */
  export type ListEnumVoteTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VoteType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    socialLogin?: BoolFilter<"User"> | boolean
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isSubscribed?: BoolFilter<"User"> | boolean
    avatarUrl?: StringNullableFilter<"User"> | string | null
    publicId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    Playlist?: PlaylistListRelationFilter
    starredSongs?: StarredSongListRelationFilter
    Subscription?: SubscriptionListRelationFilter
    PaymentTransaction?: PaymentTransactionListRelationFilter
    Streams?: StreamListRelationFilter
    Votes?: VoteListRelationFilter
    StreamSongs?: StreamSongListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    socialLogin?: SortOrder
    role?: SortOrder
    isSubscribed?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    publicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    Playlist?: PlaylistOrderByRelationAggregateInput
    starredSongs?: starredSongOrderByRelationAggregateInput
    Subscription?: SubscriptionOrderByRelationAggregateInput
    PaymentTransaction?: PaymentTransactionOrderByRelationAggregateInput
    Streams?: StreamOrderByRelationAggregateInput
    Votes?: VoteOrderByRelationAggregateInput
    StreamSongs?: StreamSongOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    socialLogin?: BoolFilter<"User"> | boolean
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isSubscribed?: BoolFilter<"User"> | boolean
    avatarUrl?: StringNullableFilter<"User"> | string | null
    publicId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    Playlist?: PlaylistListRelationFilter
    starredSongs?: StarredSongListRelationFilter
    Subscription?: SubscriptionListRelationFilter
    PaymentTransaction?: PaymentTransactionListRelationFilter
    Streams?: StreamListRelationFilter
    Votes?: VoteListRelationFilter
    StreamSongs?: StreamSongListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    socialLogin?: SortOrder
    role?: SortOrder
    isSubscribed?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    publicId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    socialLogin?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isSubscribed?: BoolWithAggregatesFilter<"User"> | boolean
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    publicId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SongWhereInput = {
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    id?: IntFilter<"Song"> | number
    title?: StringFilter<"Song"> | string
    artist?: StringFilter<"Song"> | string
    duration?: IntFilter<"Song"> | number
    lyrics?: StringFilter<"Song"> | string
    songUrl?: StringFilter<"Song"> | string
    coverImage?: StringFilter<"Song"> | string
    createdAt?: DateTimeFilter<"Song"> | Date | string
    updateAt?: DateTimeFilter<"Song"> | Date | string
    PlaylistSong?: PlaylistSongListRelationFilter
    AlbumSongs?: AlbumSongListRelationFilter
    starredSongs?: StarredSongListRelationFilter
  }

  export type SongOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    duration?: SortOrder
    lyrics?: SortOrder
    songUrl?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    PlaylistSong?: PlaylistSongOrderByRelationAggregateInput
    AlbumSongs?: AlbumSongOrderByRelationAggregateInput
    starredSongs?: starredSongOrderByRelationAggregateInput
  }

  export type SongWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    title?: StringFilter<"Song"> | string
    artist?: StringFilter<"Song"> | string
    duration?: IntFilter<"Song"> | number
    lyrics?: StringFilter<"Song"> | string
    songUrl?: StringFilter<"Song"> | string
    coverImage?: StringFilter<"Song"> | string
    createdAt?: DateTimeFilter<"Song"> | Date | string
    updateAt?: DateTimeFilter<"Song"> | Date | string
    PlaylistSong?: PlaylistSongListRelationFilter
    AlbumSongs?: AlbumSongListRelationFilter
    starredSongs?: StarredSongListRelationFilter
  }, "id">

  export type SongOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    duration?: SortOrder
    lyrics?: SortOrder
    songUrl?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: SongCountOrderByAggregateInput
    _avg?: SongAvgOrderByAggregateInput
    _max?: SongMaxOrderByAggregateInput
    _min?: SongMinOrderByAggregateInput
    _sum?: SongSumOrderByAggregateInput
  }

  export type SongScalarWhereWithAggregatesInput = {
    AND?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    OR?: SongScalarWhereWithAggregatesInput[]
    NOT?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Song"> | number
    title?: StringWithAggregatesFilter<"Song"> | string
    artist?: StringWithAggregatesFilter<"Song"> | string
    duration?: IntWithAggregatesFilter<"Song"> | number
    lyrics?: StringWithAggregatesFilter<"Song"> | string
    songUrl?: StringWithAggregatesFilter<"Song"> | string
    coverImage?: StringWithAggregatesFilter<"Song"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Song"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Song"> | Date | string
  }

  export type AlbumWhereInput = {
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    id?: IntFilter<"Album"> | number
    albumName?: StringFilter<"Album"> | string
    artist?: StringFilter<"Album"> | string
    coverImage?: StringFilter<"Album"> | string
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updateAt?: DateTimeFilter<"Album"> | Date | string
    AlbumSongs?: AlbumSongListRelationFilter
  }

  export type AlbumOrderByWithRelationInput = {
    id?: SortOrder
    albumName?: SortOrder
    artist?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    AlbumSongs?: AlbumSongOrderByRelationAggregateInput
  }

  export type AlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    albumName?: StringFilter<"Album"> | string
    artist?: StringFilter<"Album"> | string
    coverImage?: StringFilter<"Album"> | string
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updateAt?: DateTimeFilter<"Album"> | Date | string
    AlbumSongs?: AlbumSongListRelationFilter
  }, "id">

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    albumName?: SortOrder
    artist?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _avg?: AlbumAvgOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
    _sum?: AlbumSumOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    OR?: AlbumScalarWhereWithAggregatesInput[]
    NOT?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Album"> | number
    albumName?: StringWithAggregatesFilter<"Album"> | string
    artist?: StringWithAggregatesFilter<"Album"> | string
    coverImage?: StringWithAggregatesFilter<"Album"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Album"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Album"> | Date | string
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    id?: IntFilter<"Playlist"> | number
    playlistName?: StringFilter<"Playlist"> | string
    userId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updateAt?: DateTimeFilter<"Playlist"> | Date | string
    userDetails?: XOR<UserScalarRelationFilter, UserWhereInput>
    PlaylistSong?: PlaylistSongListRelationFilter
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    playlistName?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    userDetails?: UserOrderByWithRelationInput
    PlaylistSong?: PlaylistSongOrderByRelationAggregateInput
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    playlistName?: StringFilter<"Playlist"> | string
    userId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updateAt?: DateTimeFilter<"Playlist"> | Date | string
    userDetails?: XOR<UserScalarRelationFilter, UserWhereInput>
    PlaylistSong?: PlaylistSongListRelationFilter
  }, "id">

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    playlistName?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _avg?: PlaylistAvgOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
    _sum?: PlaylistSumOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Playlist"> | number
    playlistName?: StringWithAggregatesFilter<"Playlist"> | string
    userId?: StringWithAggregatesFilter<"Playlist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
  }

  export type PlaylistSongWhereInput = {
    AND?: PlaylistSongWhereInput | PlaylistSongWhereInput[]
    OR?: PlaylistSongWhereInput[]
    NOT?: PlaylistSongWhereInput | PlaylistSongWhereInput[]
    id?: IntFilter<"PlaylistSong"> | number
    songId?: IntFilter<"PlaylistSong"> | number
    playlistId?: IntFilter<"PlaylistSong"> | number
    addedAt?: DateTimeFilter<"PlaylistSong"> | Date | string
    songDetails?: XOR<SongScalarRelationFilter, SongWhereInput>
    playlistDetails?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
  }

  export type PlaylistSongOrderByWithRelationInput = {
    id?: SortOrder
    songId?: SortOrder
    playlistId?: SortOrder
    addedAt?: SortOrder
    songDetails?: SongOrderByWithRelationInput
    playlistDetails?: PlaylistOrderByWithRelationInput
  }

  export type PlaylistSongWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlaylistSongWhereInput | PlaylistSongWhereInput[]
    OR?: PlaylistSongWhereInput[]
    NOT?: PlaylistSongWhereInput | PlaylistSongWhereInput[]
    songId?: IntFilter<"PlaylistSong"> | number
    playlistId?: IntFilter<"PlaylistSong"> | number
    addedAt?: DateTimeFilter<"PlaylistSong"> | Date | string
    songDetails?: XOR<SongScalarRelationFilter, SongWhereInput>
    playlistDetails?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
  }, "id">

  export type PlaylistSongOrderByWithAggregationInput = {
    id?: SortOrder
    songId?: SortOrder
    playlistId?: SortOrder
    addedAt?: SortOrder
    _count?: PlaylistSongCountOrderByAggregateInput
    _avg?: PlaylistSongAvgOrderByAggregateInput
    _max?: PlaylistSongMaxOrderByAggregateInput
    _min?: PlaylistSongMinOrderByAggregateInput
    _sum?: PlaylistSongSumOrderByAggregateInput
  }

  export type PlaylistSongScalarWhereWithAggregatesInput = {
    AND?: PlaylistSongScalarWhereWithAggregatesInput | PlaylistSongScalarWhereWithAggregatesInput[]
    OR?: PlaylistSongScalarWhereWithAggregatesInput[]
    NOT?: PlaylistSongScalarWhereWithAggregatesInput | PlaylistSongScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlaylistSong"> | number
    songId?: IntWithAggregatesFilter<"PlaylistSong"> | number
    playlistId?: IntWithAggregatesFilter<"PlaylistSong"> | number
    addedAt?: DateTimeWithAggregatesFilter<"PlaylistSong"> | Date | string
  }

  export type AlbumSongWhereInput = {
    AND?: AlbumSongWhereInput | AlbumSongWhereInput[]
    OR?: AlbumSongWhereInput[]
    NOT?: AlbumSongWhereInput | AlbumSongWhereInput[]
    id?: IntFilter<"AlbumSong"> | number
    albumId?: IntFilter<"AlbumSong"> | number
    songId?: IntFilter<"AlbumSong"> | number
    albumDetails?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
    songDetails?: XOR<SongScalarRelationFilter, SongWhereInput>
  }

  export type AlbumSongOrderByWithRelationInput = {
    id?: SortOrder
    albumId?: SortOrder
    songId?: SortOrder
    albumDetails?: AlbumOrderByWithRelationInput
    songDetails?: SongOrderByWithRelationInput
  }

  export type AlbumSongWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlbumSongWhereInput | AlbumSongWhereInput[]
    OR?: AlbumSongWhereInput[]
    NOT?: AlbumSongWhereInput | AlbumSongWhereInput[]
    albumId?: IntFilter<"AlbumSong"> | number
    songId?: IntFilter<"AlbumSong"> | number
    albumDetails?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
    songDetails?: XOR<SongScalarRelationFilter, SongWhereInput>
  }, "id">

  export type AlbumSongOrderByWithAggregationInput = {
    id?: SortOrder
    albumId?: SortOrder
    songId?: SortOrder
    _count?: AlbumSongCountOrderByAggregateInput
    _avg?: AlbumSongAvgOrderByAggregateInput
    _max?: AlbumSongMaxOrderByAggregateInput
    _min?: AlbumSongMinOrderByAggregateInput
    _sum?: AlbumSongSumOrderByAggregateInput
  }

  export type AlbumSongScalarWhereWithAggregatesInput = {
    AND?: AlbumSongScalarWhereWithAggregatesInput | AlbumSongScalarWhereWithAggregatesInput[]
    OR?: AlbumSongScalarWhereWithAggregatesInput[]
    NOT?: AlbumSongScalarWhereWithAggregatesInput | AlbumSongScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AlbumSong"> | number
    albumId?: IntWithAggregatesFilter<"AlbumSong"> | number
    songId?: IntWithAggregatesFilter<"AlbumSong"> | number
  }

  export type starredSongWhereInput = {
    AND?: starredSongWhereInput | starredSongWhereInput[]
    OR?: starredSongWhereInput[]
    NOT?: starredSongWhereInput | starredSongWhereInput[]
    id?: IntFilter<"starredSong"> | number
    userId?: StringFilter<"starredSong"> | string
    songId?: IntFilter<"starredSong"> | number
    userDetails?: XOR<UserScalarRelationFilter, UserWhereInput>
    SongDetails?: XOR<SongScalarRelationFilter, SongWhereInput>
  }

  export type starredSongOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    userDetails?: UserOrderByWithRelationInput
    SongDetails?: SongOrderByWithRelationInput
  }

  export type starredSongWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: starredSongWhereInput | starredSongWhereInput[]
    OR?: starredSongWhereInput[]
    NOT?: starredSongWhereInput | starredSongWhereInput[]
    userId?: StringFilter<"starredSong"> | string
    songId?: IntFilter<"starredSong"> | number
    userDetails?: XOR<UserScalarRelationFilter, UserWhereInput>
    SongDetails?: XOR<SongScalarRelationFilter, SongWhereInput>
  }, "id">

  export type starredSongOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
    _count?: starredSongCountOrderByAggregateInput
    _avg?: starredSongAvgOrderByAggregateInput
    _max?: starredSongMaxOrderByAggregateInput
    _min?: starredSongMinOrderByAggregateInput
    _sum?: starredSongSumOrderByAggregateInput
  }

  export type starredSongScalarWhereWithAggregatesInput = {
    AND?: starredSongScalarWhereWithAggregatesInput | starredSongScalarWhereWithAggregatesInput[]
    OR?: starredSongScalarWhereWithAggregatesInput[]
    NOT?: starredSongScalarWhereWithAggregatesInput | starredSongScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"starredSong"> | number
    userId?: StringWithAggregatesFilter<"starredSong"> | string
    songId?: IntWithAggregatesFilter<"starredSong"> | number
  }

  export type PricingPackageWhereInput = {
    AND?: PricingPackageWhereInput | PricingPackageWhereInput[]
    OR?: PricingPackageWhereInput[]
    NOT?: PricingPackageWhereInput | PricingPackageWhereInput[]
    id?: IntFilter<"PricingPackage"> | number
    packageName?: StringFilter<"PricingPackage"> | string
    price?: FloatFilter<"PricingPackage"> | number
    durationMonth?: IntFilter<"PricingPackage"> | number
    description?: StringFilter<"PricingPackage"> | string
    createdAt?: DateTimeFilter<"PricingPackage"> | Date | string
    updatedAt?: DateTimeFilter<"PricingPackage"> | Date | string
    Subscription?: SubscriptionListRelationFilter
    PaymentTransaction?: PaymentTransactionListRelationFilter
  }

  export type PricingPackageOrderByWithRelationInput = {
    id?: SortOrder
    packageName?: SortOrder
    price?: SortOrder
    durationMonth?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Subscription?: SubscriptionOrderByRelationAggregateInput
    PaymentTransaction?: PaymentTransactionOrderByRelationAggregateInput
  }

  export type PricingPackageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PricingPackageWhereInput | PricingPackageWhereInput[]
    OR?: PricingPackageWhereInput[]
    NOT?: PricingPackageWhereInput | PricingPackageWhereInput[]
    packageName?: StringFilter<"PricingPackage"> | string
    price?: FloatFilter<"PricingPackage"> | number
    durationMonth?: IntFilter<"PricingPackage"> | number
    description?: StringFilter<"PricingPackage"> | string
    createdAt?: DateTimeFilter<"PricingPackage"> | Date | string
    updatedAt?: DateTimeFilter<"PricingPackage"> | Date | string
    Subscription?: SubscriptionListRelationFilter
    PaymentTransaction?: PaymentTransactionListRelationFilter
  }, "id">

  export type PricingPackageOrderByWithAggregationInput = {
    id?: SortOrder
    packageName?: SortOrder
    price?: SortOrder
    durationMonth?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PricingPackageCountOrderByAggregateInput
    _avg?: PricingPackageAvgOrderByAggregateInput
    _max?: PricingPackageMaxOrderByAggregateInput
    _min?: PricingPackageMinOrderByAggregateInput
    _sum?: PricingPackageSumOrderByAggregateInput
  }

  export type PricingPackageScalarWhereWithAggregatesInput = {
    AND?: PricingPackageScalarWhereWithAggregatesInput | PricingPackageScalarWhereWithAggregatesInput[]
    OR?: PricingPackageScalarWhereWithAggregatesInput[]
    NOT?: PricingPackageScalarWhereWithAggregatesInput | PricingPackageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PricingPackage"> | number
    packageName?: StringWithAggregatesFilter<"PricingPackage"> | string
    price?: FloatWithAggregatesFilter<"PricingPackage"> | number
    durationMonth?: IntWithAggregatesFilter<"PricingPackage"> | number
    description?: StringWithAggregatesFilter<"PricingPackage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PricingPackage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PricingPackage"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: IntFilter<"Subscription"> | number
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    packageId?: IntFilter<"Subscription"> | number
    userId?: StringFilter<"Subscription"> | string
    transactionId?: IntFilter<"Subscription"> | number
    userDetails?: XOR<UserScalarRelationFilter, UserWhereInput>
    packageDetails?: XOR<PricingPackageScalarRelationFilter, PricingPackageWhereInput>
    PaymentTransaction?: PaymentTransactionListRelationFilter
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    packageId?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    userDetails?: UserOrderByWithRelationInput
    packageDetails?: PricingPackageOrderByWithRelationInput
    PaymentTransaction?: PaymentTransactionOrderByRelationAggregateInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    packageId?: IntFilter<"Subscription"> | number
    userId?: StringFilter<"Subscription"> | string
    transactionId?: IntFilter<"Subscription"> | number
    userDetails?: XOR<UserScalarRelationFilter, UserWhereInput>
    packageDetails?: XOR<PricingPackageScalarRelationFilter, PricingPackageWhereInput>
    PaymentTransaction?: PaymentTransactionListRelationFilter
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    packageId?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subscription"> | number
    startDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    packageId?: IntWithAggregatesFilter<"Subscription"> | number
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    transactionId?: IntWithAggregatesFilter<"Subscription"> | number
  }

  export type PaymentTransactionWhereInput = {
    AND?: PaymentTransactionWhereInput | PaymentTransactionWhereInput[]
    OR?: PaymentTransactionWhereInput[]
    NOT?: PaymentTransactionWhereInput | PaymentTransactionWhereInput[]
    id?: IntFilter<"PaymentTransaction"> | number
    userId?: StringFilter<"PaymentTransaction"> | string
    packageId?: IntFilter<"PaymentTransaction"> | number
    subscriptionId?: IntFilter<"PaymentTransaction"> | number
    amount?: FloatFilter<"PaymentTransaction"> | number
    currency?: StringFilter<"PaymentTransaction"> | string
    paymentMethod?: StringFilter<"PaymentTransaction"> | string
    status?: StringFilter<"PaymentTransaction"> | string
    paymentProvider?: StringFilter<"PaymentTransaction"> | string
    providerTransactionId?: StringFilter<"PaymentTransaction"> | string
    createdAt?: DateTimeFilter<"PaymentTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    package?: XOR<PricingPackageScalarRelationFilter, PricingPackageWhereInput>
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
  }

  export type PaymentTransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    paymentProvider?: SortOrder
    providerTransactionId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    package?: PricingPackageOrderByWithRelationInput
    subscription?: SubscriptionOrderByWithRelationInput
  }

  export type PaymentTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentTransactionWhereInput | PaymentTransactionWhereInput[]
    OR?: PaymentTransactionWhereInput[]
    NOT?: PaymentTransactionWhereInput | PaymentTransactionWhereInput[]
    userId?: StringFilter<"PaymentTransaction"> | string
    packageId?: IntFilter<"PaymentTransaction"> | number
    subscriptionId?: IntFilter<"PaymentTransaction"> | number
    amount?: FloatFilter<"PaymentTransaction"> | number
    currency?: StringFilter<"PaymentTransaction"> | string
    paymentMethod?: StringFilter<"PaymentTransaction"> | string
    status?: StringFilter<"PaymentTransaction"> | string
    paymentProvider?: StringFilter<"PaymentTransaction"> | string
    providerTransactionId?: StringFilter<"PaymentTransaction"> | string
    createdAt?: DateTimeFilter<"PaymentTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    package?: XOR<PricingPackageScalarRelationFilter, PricingPackageWhereInput>
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
  }, "id">

  export type PaymentTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    paymentProvider?: SortOrder
    providerTransactionId?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentTransactionCountOrderByAggregateInput
    _avg?: PaymentTransactionAvgOrderByAggregateInput
    _max?: PaymentTransactionMaxOrderByAggregateInput
    _min?: PaymentTransactionMinOrderByAggregateInput
    _sum?: PaymentTransactionSumOrderByAggregateInput
  }

  export type PaymentTransactionScalarWhereWithAggregatesInput = {
    AND?: PaymentTransactionScalarWhereWithAggregatesInput | PaymentTransactionScalarWhereWithAggregatesInput[]
    OR?: PaymentTransactionScalarWhereWithAggregatesInput[]
    NOT?: PaymentTransactionScalarWhereWithAggregatesInput | PaymentTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentTransaction"> | number
    userId?: StringWithAggregatesFilter<"PaymentTransaction"> | string
    packageId?: IntWithAggregatesFilter<"PaymentTransaction"> | number
    subscriptionId?: IntWithAggregatesFilter<"PaymentTransaction"> | number
    amount?: FloatWithAggregatesFilter<"PaymentTransaction"> | number
    currency?: StringWithAggregatesFilter<"PaymentTransaction"> | string
    paymentMethod?: StringWithAggregatesFilter<"PaymentTransaction"> | string
    status?: StringWithAggregatesFilter<"PaymentTransaction"> | string
    paymentProvider?: StringWithAggregatesFilter<"PaymentTransaction"> | string
    providerTransactionId?: StringWithAggregatesFilter<"PaymentTransaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PaymentTransaction"> | Date | string
  }

  export type VerificationCodesWhereInput = {
    AND?: VerificationCodesWhereInput | VerificationCodesWhereInput[]
    OR?: VerificationCodesWhereInput[]
    NOT?: VerificationCodesWhereInput | VerificationCodesWhereInput[]
    id?: IntFilter<"VerificationCodes"> | number
    email?: StringFilter<"VerificationCodes"> | string
    otp?: StringNullableFilter<"VerificationCodes"> | string | null
    isVerified?: BoolFilter<"VerificationCodes"> | boolean
    type?: EnumVerificationCodeTypeFilter<"VerificationCodes"> | $Enums.VerificationCodeType
    expiry?: StringFilter<"VerificationCodes"> | string
    createdAt?: DateTimeFilter<"VerificationCodes"> | Date | string
    updatedAt?: DateTimeFilter<"VerificationCodes"> | Date | string
  }

  export type VerificationCodesOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    type?: SortOrder
    expiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCodesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: VerificationCodesWhereInput | VerificationCodesWhereInput[]
    OR?: VerificationCodesWhereInput[]
    NOT?: VerificationCodesWhereInput | VerificationCodesWhereInput[]
    otp?: StringNullableFilter<"VerificationCodes"> | string | null
    isVerified?: BoolFilter<"VerificationCodes"> | boolean
    type?: EnumVerificationCodeTypeFilter<"VerificationCodes"> | $Enums.VerificationCodeType
    expiry?: StringFilter<"VerificationCodes"> | string
    createdAt?: DateTimeFilter<"VerificationCodes"> | Date | string
    updatedAt?: DateTimeFilter<"VerificationCodes"> | Date | string
  }, "id" | "email">

  export type VerificationCodesOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    type?: SortOrder
    expiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCodesCountOrderByAggregateInput
    _avg?: VerificationCodesAvgOrderByAggregateInput
    _max?: VerificationCodesMaxOrderByAggregateInput
    _min?: VerificationCodesMinOrderByAggregateInput
    _sum?: VerificationCodesSumOrderByAggregateInput
  }

  export type VerificationCodesScalarWhereWithAggregatesInput = {
    AND?: VerificationCodesScalarWhereWithAggregatesInput | VerificationCodesScalarWhereWithAggregatesInput[]
    OR?: VerificationCodesScalarWhereWithAggregatesInput[]
    NOT?: VerificationCodesScalarWhereWithAggregatesInput | VerificationCodesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VerificationCodes"> | number
    email?: StringWithAggregatesFilter<"VerificationCodes"> | string
    otp?: StringNullableWithAggregatesFilter<"VerificationCodes"> | string | null
    isVerified?: BoolWithAggregatesFilter<"VerificationCodes"> | boolean
    type?: EnumVerificationCodeTypeWithAggregatesFilter<"VerificationCodes"> | $Enums.VerificationCodeType
    expiry?: StringWithAggregatesFilter<"VerificationCodes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VerificationCodes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VerificationCodes"> | Date | string
  }

  export type StreamWhereInput = {
    AND?: StreamWhereInput | StreamWhereInput[]
    OR?: StreamWhereInput[]
    NOT?: StreamWhereInput | StreamWhereInput[]
    id?: StringFilter<"Stream"> | string
    streamName?: StringFilter<"Stream"> | string
    hostId?: StringFilter<"Stream"> | string
    createdAt?: DateTimeFilter<"Stream"> | Date | string
    active?: BoolFilter<"Stream"> | boolean
    host?: XOR<UserScalarRelationFilter, UserWhereInput>
    songs?: StreamSongListRelationFilter
  }

  export type StreamOrderByWithRelationInput = {
    id?: SortOrder
    streamName?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    host?: UserOrderByWithRelationInput
    songs?: StreamSongOrderByRelationAggregateInput
  }

  export type StreamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StreamWhereInput | StreamWhereInput[]
    OR?: StreamWhereInput[]
    NOT?: StreamWhereInput | StreamWhereInput[]
    streamName?: StringFilter<"Stream"> | string
    hostId?: StringFilter<"Stream"> | string
    createdAt?: DateTimeFilter<"Stream"> | Date | string
    active?: BoolFilter<"Stream"> | boolean
    host?: XOR<UserScalarRelationFilter, UserWhereInput>
    songs?: StreamSongListRelationFilter
  }, "id">

  export type StreamOrderByWithAggregationInput = {
    id?: SortOrder
    streamName?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    _count?: StreamCountOrderByAggregateInput
    _max?: StreamMaxOrderByAggregateInput
    _min?: StreamMinOrderByAggregateInput
  }

  export type StreamScalarWhereWithAggregatesInput = {
    AND?: StreamScalarWhereWithAggregatesInput | StreamScalarWhereWithAggregatesInput[]
    OR?: StreamScalarWhereWithAggregatesInput[]
    NOT?: StreamScalarWhereWithAggregatesInput | StreamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stream"> | string
    streamName?: StringWithAggregatesFilter<"Stream"> | string
    hostId?: StringWithAggregatesFilter<"Stream"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Stream"> | Date | string
    active?: BoolWithAggregatesFilter<"Stream"> | boolean
  }

  export type StreamSongWhereInput = {
    AND?: StreamSongWhereInput | StreamSongWhereInput[]
    OR?: StreamSongWhereInput[]
    NOT?: StreamSongWhereInput | StreamSongWhereInput[]
    id?: StringFilter<"StreamSong"> | string
    url?: StringFilter<"StreamSong"> | string
    title?: StringNullableFilter<"StreamSong"> | string | null
    streamId?: StringFilter<"StreamSong"> | string
    userId?: StringFilter<"StreamSong"> | string
    addedAt?: DateTimeFilter<"StreamSong"> | Date | string
    stream?: XOR<StreamScalarRelationFilter, StreamWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    votes?: VoteListRelationFilter
  }

  export type StreamSongOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    streamId?: SortOrder
    userId?: SortOrder
    addedAt?: SortOrder
    stream?: StreamOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    votes?: VoteOrderByRelationAggregateInput
  }

  export type StreamSongWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StreamSongWhereInput | StreamSongWhereInput[]
    OR?: StreamSongWhereInput[]
    NOT?: StreamSongWhereInput | StreamSongWhereInput[]
    url?: StringFilter<"StreamSong"> | string
    title?: StringNullableFilter<"StreamSong"> | string | null
    streamId?: StringFilter<"StreamSong"> | string
    userId?: StringFilter<"StreamSong"> | string
    addedAt?: DateTimeFilter<"StreamSong"> | Date | string
    stream?: XOR<StreamScalarRelationFilter, StreamWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    votes?: VoteListRelationFilter
  }, "id">

  export type StreamSongOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    streamId?: SortOrder
    userId?: SortOrder
    addedAt?: SortOrder
    _count?: StreamSongCountOrderByAggregateInput
    _max?: StreamSongMaxOrderByAggregateInput
    _min?: StreamSongMinOrderByAggregateInput
  }

  export type StreamSongScalarWhereWithAggregatesInput = {
    AND?: StreamSongScalarWhereWithAggregatesInput | StreamSongScalarWhereWithAggregatesInput[]
    OR?: StreamSongScalarWhereWithAggregatesInput[]
    NOT?: StreamSongScalarWhereWithAggregatesInput | StreamSongScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StreamSong"> | string
    url?: StringWithAggregatesFilter<"StreamSong"> | string
    title?: StringNullableWithAggregatesFilter<"StreamSong"> | string | null
    streamId?: StringWithAggregatesFilter<"StreamSong"> | string
    userId?: StringWithAggregatesFilter<"StreamSong"> | string
    addedAt?: DateTimeWithAggregatesFilter<"StreamSong"> | Date | string
  }

  export type VoteWhereInput = {
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    id?: StringFilter<"Vote"> | string
    songId?: StringFilter<"Vote"> | string
    userId?: StringFilter<"Vote"> | string
    type?: EnumVoteTypeFilter<"Vote"> | $Enums.VoteType
    song?: XOR<StreamSongScalarRelationFilter, StreamSongWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VoteOrderByWithRelationInput = {
    id?: SortOrder
    songId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    song?: StreamSongOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type VoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_songId?: VoteUserIdSongIdCompoundUniqueInput
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    songId?: StringFilter<"Vote"> | string
    userId?: StringFilter<"Vote"> | string
    type?: EnumVoteTypeFilter<"Vote"> | $Enums.VoteType
    song?: XOR<StreamSongScalarRelationFilter, StreamSongWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_songId">

  export type VoteOrderByWithAggregationInput = {
    id?: SortOrder
    songId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    _count?: VoteCountOrderByAggregateInput
    _max?: VoteMaxOrderByAggregateInput
    _min?: VoteMinOrderByAggregateInput
  }

  export type VoteScalarWhereWithAggregatesInput = {
    AND?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    OR?: VoteScalarWhereWithAggregatesInput[]
    NOT?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vote"> | string
    songId?: StringWithAggregatesFilter<"Vote"> | string
    userId?: StringWithAggregatesFilter<"Vote"> | string
    type?: EnumVoteTypeWithAggregatesFilter<"Vote"> | $Enums.VoteType
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password?: string | null
    socialLogin?: boolean
    role: $Enums.UserRole
    isSubscribed: boolean
    avatarUrl?: string | null
    publicId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    Playlist?: PlaylistCreateNestedManyWithoutUserDetailsInput
    starredSongs?: starredSongCreateNestedManyWithoutUserDetailsInput
    Subscription?: SubscriptionCreateNestedManyWithoutUserDetailsInput
    PaymentTransaction?: PaymentTransactionCreateNestedManyWithoutUserInput
    Streams?: StreamCreateNestedManyWithoutHostInput
    Votes?: VoteCreateNestedManyWithoutUserInput
    StreamSongs?: StreamSongCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password?: string | null
    socialLogin?: boolean
    role: $Enums.UserRole
    isSubscribed: boolean
    avatarUrl?: string | null
    publicId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutUserDetailsInput
    starredSongs?: starredSongUncheckedCreateNestedManyWithoutUserDetailsInput
    Subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserDetailsInput
    PaymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    Streams?: StreamUncheckedCreateNestedManyWithoutHostInput
    Votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    StreamSongs?: StreamSongUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    socialLogin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Playlist?: PlaylistUpdateManyWithoutUserDetailsNestedInput
    starredSongs?: starredSongUpdateManyWithoutUserDetailsNestedInput
    Subscription?: SubscriptionUpdateManyWithoutUserDetailsNestedInput
    PaymentTransaction?: PaymentTransactionUpdateManyWithoutUserNestedInput
    Streams?: StreamUpdateManyWithoutHostNestedInput
    Votes?: VoteUpdateManyWithoutUserNestedInput
    StreamSongs?: StreamSongUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    socialLogin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Playlist?: PlaylistUncheckedUpdateManyWithoutUserDetailsNestedInput
    starredSongs?: starredSongUncheckedUpdateManyWithoutUserDetailsNestedInput
    Subscription?: SubscriptionUncheckedUpdateManyWithoutUserDetailsNestedInput
    PaymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    Streams?: StreamUncheckedUpdateManyWithoutHostNestedInput
    Votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    StreamSongs?: StreamSongUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password?: string | null
    socialLogin?: boolean
    role: $Enums.UserRole
    isSubscribed: boolean
    avatarUrl?: string | null
    publicId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    socialLogin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    socialLogin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongCreateInput = {
    title: string
    artist: string
    duration: number
    lyrics: string
    songUrl: string
    coverImage: string
    createdAt?: Date | string
    updateAt?: Date | string
    PlaylistSong?: PlaylistSongCreateNestedManyWithoutSongDetailsInput
    AlbumSongs?: AlbumSongCreateNestedManyWithoutSongDetailsInput
    starredSongs?: starredSongCreateNestedManyWithoutSongDetailsInput
  }

  export type SongUncheckedCreateInput = {
    id?: number
    title: string
    artist: string
    duration: number
    lyrics: string
    songUrl: string
    coverImage: string
    createdAt?: Date | string
    updateAt?: Date | string
    PlaylistSong?: PlaylistSongUncheckedCreateNestedManyWithoutSongDetailsInput
    AlbumSongs?: AlbumSongUncheckedCreateNestedManyWithoutSongDetailsInput
    starredSongs?: starredSongUncheckedCreateNestedManyWithoutSongDetailsInput
  }

  export type SongUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    lyrics?: StringFieldUpdateOperationsInput | string
    songUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlaylistSong?: PlaylistSongUpdateManyWithoutSongDetailsNestedInput
    AlbumSongs?: AlbumSongUpdateManyWithoutSongDetailsNestedInput
    starredSongs?: starredSongUpdateManyWithoutSongDetailsNestedInput
  }

  export type SongUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    lyrics?: StringFieldUpdateOperationsInput | string
    songUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlaylistSong?: PlaylistSongUncheckedUpdateManyWithoutSongDetailsNestedInput
    AlbumSongs?: AlbumSongUncheckedUpdateManyWithoutSongDetailsNestedInput
    starredSongs?: starredSongUncheckedUpdateManyWithoutSongDetailsNestedInput
  }

  export type SongCreateManyInput = {
    id?: number
    title: string
    artist: string
    duration: number
    lyrics: string
    songUrl: string
    coverImage: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type SongUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    lyrics?: StringFieldUpdateOperationsInput | string
    songUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    lyrics?: StringFieldUpdateOperationsInput | string
    songUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumCreateInput = {
    albumName: string
    artist: string
    coverImage: string
    createdAt?: Date | string
    updateAt?: Date | string
    AlbumSongs?: AlbumSongCreateNestedManyWithoutAlbumDetailsInput
  }

  export type AlbumUncheckedCreateInput = {
    id?: number
    albumName: string
    artist: string
    coverImage: string
    createdAt?: Date | string
    updateAt?: Date | string
    AlbumSongs?: AlbumSongUncheckedCreateNestedManyWithoutAlbumDetailsInput
  }

  export type AlbumUpdateInput = {
    albumName?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AlbumSongs?: AlbumSongUpdateManyWithoutAlbumDetailsNestedInput
  }

  export type AlbumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    albumName?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AlbumSongs?: AlbumSongUncheckedUpdateManyWithoutAlbumDetailsNestedInput
  }

  export type AlbumCreateManyInput = {
    id?: number
    albumName: string
    artist: string
    coverImage: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type AlbumUpdateManyMutationInput = {
    albumName?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    albumName?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistCreateInput = {
    playlistName: string
    createdAt?: Date | string
    updateAt?: Date | string
    userDetails: UserCreateNestedOneWithoutPlaylistInput
    PlaylistSong?: PlaylistSongCreateNestedManyWithoutPlaylistDetailsInput
  }

  export type PlaylistUncheckedCreateInput = {
    id?: number
    playlistName: string
    userId: string
    createdAt?: Date | string
    updateAt?: Date | string
    PlaylistSong?: PlaylistSongUncheckedCreateNestedManyWithoutPlaylistDetailsInput
  }

  export type PlaylistUpdateInput = {
    playlistName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userDetails?: UserUpdateOneRequiredWithoutPlaylistNestedInput
    PlaylistSong?: PlaylistSongUpdateManyWithoutPlaylistDetailsNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlistName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlaylistSong?: PlaylistSongUncheckedUpdateManyWithoutPlaylistDetailsNestedInput
  }

  export type PlaylistCreateManyInput = {
    id?: number
    playlistName: string
    userId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type PlaylistUpdateManyMutationInput = {
    playlistName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlistName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistSongCreateInput = {
    addedAt?: Date | string
    songDetails: SongCreateNestedOneWithoutPlaylistSongInput
    playlistDetails: PlaylistCreateNestedOneWithoutPlaylistSongInput
  }

  export type PlaylistSongUncheckedCreateInput = {
    id?: number
    songId: number
    playlistId: number
    addedAt?: Date | string
  }

  export type PlaylistSongUpdateInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songDetails?: SongUpdateOneRequiredWithoutPlaylistSongNestedInput
    playlistDetails?: PlaylistUpdateOneRequiredWithoutPlaylistSongNestedInput
  }

  export type PlaylistSongUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    playlistId?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistSongCreateManyInput = {
    id?: number
    songId: number
    playlistId: number
    addedAt?: Date | string
  }

  export type PlaylistSongUpdateManyMutationInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistSongUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    playlistId?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumSongCreateInput = {
    albumDetails: AlbumCreateNestedOneWithoutAlbumSongsInput
    songDetails: SongCreateNestedOneWithoutAlbumSongsInput
  }

  export type AlbumSongUncheckedCreateInput = {
    id?: number
    albumId: number
    songId: number
  }

  export type AlbumSongUpdateInput = {
    albumDetails?: AlbumUpdateOneRequiredWithoutAlbumSongsNestedInput
    songDetails?: SongUpdateOneRequiredWithoutAlbumSongsNestedInput
  }

  export type AlbumSongUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumSongCreateManyInput = {
    id?: number
    albumId: number
    songId: number
  }

  export type AlbumSongUpdateManyMutationInput = {

  }

  export type AlbumSongUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
  }

  export type starredSongCreateInput = {
    userDetails: UserCreateNestedOneWithoutStarredSongsInput
    SongDetails: SongCreateNestedOneWithoutStarredSongsInput
  }

  export type starredSongUncheckedCreateInput = {
    id?: number
    userId: string
    songId: number
  }

  export type starredSongUpdateInput = {
    userDetails?: UserUpdateOneRequiredWithoutStarredSongsNestedInput
    SongDetails?: SongUpdateOneRequiredWithoutStarredSongsNestedInput
  }

  export type starredSongUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    songId?: IntFieldUpdateOperationsInput | number
  }

  export type starredSongCreateManyInput = {
    id?: number
    userId: string
    songId: number
  }

  export type starredSongUpdateManyMutationInput = {

  }

  export type starredSongUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    songId?: IntFieldUpdateOperationsInput | number
  }

  export type PricingPackageCreateInput = {
    packageName: string
    price: number
    durationMonth: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Subscription?: SubscriptionCreateNestedManyWithoutPackageDetailsInput
    PaymentTransaction?: PaymentTransactionCreateNestedManyWithoutPackageInput
  }

  export type PricingPackageUncheckedCreateInput = {
    id?: number
    packageName: string
    price: number
    durationMonth: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Subscription?: SubscriptionUncheckedCreateNestedManyWithoutPackageDetailsInput
    PaymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PricingPackageUpdateInput = {
    packageName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    durationMonth?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscription?: SubscriptionUpdateManyWithoutPackageDetailsNestedInput
    PaymentTransaction?: PaymentTransactionUpdateManyWithoutPackageNestedInput
  }

  export type PricingPackageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    durationMonth?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscription?: SubscriptionUncheckedUpdateManyWithoutPackageDetailsNestedInput
    PaymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type PricingPackageCreateManyInput = {
    id?: number
    packageName: string
    price: number
    durationMonth: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingPackageUpdateManyMutationInput = {
    packageName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    durationMonth?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingPackageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    durationMonth?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    startDate: Date | string
    endDate: Date | string
    transactionId: number
    userDetails: UserCreateNestedOneWithoutSubscriptionInput
    packageDetails: PricingPackageCreateNestedOneWithoutSubscriptionInput
    PaymentTransaction?: PaymentTransactionCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    packageId: number
    userId: string
    transactionId: number
    PaymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: IntFieldUpdateOperationsInput | number
    userDetails?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
    packageDetails?: PricingPackageUpdateOneRequiredWithoutSubscriptionNestedInput
    PaymentTransaction?: PaymentTransactionUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    packageId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    transactionId?: IntFieldUpdateOperationsInput | number
    PaymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    packageId: number
    userId: string
    transactionId: number
  }

  export type SubscriptionUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: IntFieldUpdateOperationsInput | number
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    packageId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    transactionId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentTransactionCreateInput = {
    amount: number
    currency?: string
    paymentMethod: string
    status: string
    paymentProvider: string
    providerTransactionId: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentTransactionInput
    package: PricingPackageCreateNestedOneWithoutPaymentTransactionInput
    subscription: SubscriptionCreateNestedOneWithoutPaymentTransactionInput
  }

  export type PaymentTransactionUncheckedCreateInput = {
    id?: number
    userId: string
    packageId: number
    subscriptionId: number
    amount: number
    currency?: string
    paymentMethod: string
    status: string
    paymentProvider: string
    providerTransactionId: string
    createdAt?: Date | string
  }

  export type PaymentTransactionUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentProvider?: StringFieldUpdateOperationsInput | string
    providerTransactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentTransactionNestedInput
    package?: PricingPackageUpdateOneRequiredWithoutPaymentTransactionNestedInput
    subscription?: SubscriptionUpdateOneRequiredWithoutPaymentTransactionNestedInput
  }

  export type PaymentTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    packageId?: IntFieldUpdateOperationsInput | number
    subscriptionId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentProvider?: StringFieldUpdateOperationsInput | string
    providerTransactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransactionCreateManyInput = {
    id?: number
    userId: string
    packageId: number
    subscriptionId: number
    amount: number
    currency?: string
    paymentMethod: string
    status: string
    paymentProvider: string
    providerTransactionId: string
    createdAt?: Date | string
  }

  export type PaymentTransactionUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentProvider?: StringFieldUpdateOperationsInput | string
    providerTransactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    packageId?: IntFieldUpdateOperationsInput | number
    subscriptionId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentProvider?: StringFieldUpdateOperationsInput | string
    providerTransactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodesCreateInput = {
    email: string
    otp?: string | null
    isVerified: boolean
    type: $Enums.VerificationCodeType
    expiry: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationCodesUncheckedCreateInput = {
    id?: number
    email: string
    otp?: string | null
    isVerified: boolean
    type: $Enums.VerificationCodeType
    expiry: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationCodesUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumVerificationCodeTypeFieldUpdateOperationsInput | $Enums.VerificationCodeType
    expiry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumVerificationCodeTypeFieldUpdateOperationsInput | $Enums.VerificationCodeType
    expiry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodesCreateManyInput = {
    id?: number
    email: string
    otp?: string | null
    isVerified: boolean
    type: $Enums.VerificationCodeType
    expiry: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationCodesUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumVerificationCodeTypeFieldUpdateOperationsInput | $Enums.VerificationCodeType
    expiry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumVerificationCodeTypeFieldUpdateOperationsInput | $Enums.VerificationCodeType
    expiry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamCreateInput = {
    id?: string
    streamName: string
    createdAt?: Date | string
    active?: boolean
    host: UserCreateNestedOneWithoutStreamsInput
    songs?: StreamSongCreateNestedManyWithoutStreamInput
  }

  export type StreamUncheckedCreateInput = {
    id?: string
    streamName: string
    hostId: string
    createdAt?: Date | string
    active?: boolean
    songs?: StreamSongUncheckedCreateNestedManyWithoutStreamInput
  }

  export type StreamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    host?: UserUpdateOneRequiredWithoutStreamsNestedInput
    songs?: StreamSongUpdateManyWithoutStreamNestedInput
  }

  export type StreamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamName?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    songs?: StreamSongUncheckedUpdateManyWithoutStreamNestedInput
  }

  export type StreamCreateManyInput = {
    id?: string
    streamName: string
    hostId: string
    createdAt?: Date | string
    active?: boolean
  }

  export type StreamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StreamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamName?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StreamSongCreateInput = {
    id?: string
    url: string
    title?: string | null
    addedAt?: Date | string
    stream: StreamCreateNestedOneWithoutSongsInput
    User: UserCreateNestedOneWithoutStreamSongsInput
    votes?: VoteCreateNestedManyWithoutSongInput
  }

  export type StreamSongUncheckedCreateInput = {
    id?: string
    url: string
    title?: string | null
    streamId: string
    userId: string
    addedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutSongInput
  }

  export type StreamSongUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stream?: StreamUpdateOneRequiredWithoutSongsNestedInput
    User?: UserUpdateOneRequiredWithoutStreamSongsNestedInput
    votes?: VoteUpdateManyWithoutSongNestedInput
  }

  export type StreamSongUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutSongNestedInput
  }

  export type StreamSongCreateManyInput = {
    id?: string
    url: string
    title?: string | null
    streamId: string
    userId: string
    addedAt?: Date | string
  }

  export type StreamSongUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamSongUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateInput = {
    id?: string
    type: $Enums.VoteType
    song: StreamSongCreateNestedOneWithoutVotesInput
    user: UserCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateInput = {
    id?: string
    songId: string
    userId: string
    type: $Enums.VoteType
  }

  export type VoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
    song?: StreamSongUpdateOneRequiredWithoutVotesNestedInput
    user?: UserUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
  }

  export type VoteCreateManyInput = {
    id?: string
    songId: string
    userId: string
    type: $Enums.VoteType
  }

  export type VoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
  }

  export type VoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type PlaylistListRelationFilter = {
    every?: PlaylistWhereInput
    some?: PlaylistWhereInput
    none?: PlaylistWhereInput
  }

  export type StarredSongListRelationFilter = {
    every?: starredSongWhereInput
    some?: starredSongWhereInput
    none?: starredSongWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type PaymentTransactionListRelationFilter = {
    every?: PaymentTransactionWhereInput
    some?: PaymentTransactionWhereInput
    none?: PaymentTransactionWhereInput
  }

  export type StreamListRelationFilter = {
    every?: StreamWhereInput
    some?: StreamWhereInput
    none?: StreamWhereInput
  }

  export type VoteListRelationFilter = {
    every?: VoteWhereInput
    some?: VoteWhereInput
    none?: VoteWhereInput
  }

  export type StreamSongListRelationFilter = {
    every?: StreamSongWhereInput
    some?: StreamSongWhereInput
    none?: StreamSongWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type starredSongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StreamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StreamSongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    socialLogin?: SortOrder
    role?: SortOrder
    isSubscribed?: SortOrder
    avatarUrl?: SortOrder
    publicId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    socialLogin?: SortOrder
    role?: SortOrder
    isSubscribed?: SortOrder
    avatarUrl?: SortOrder
    publicId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    socialLogin?: SortOrder
    role?: SortOrder
    isSubscribed?: SortOrder
    avatarUrl?: SortOrder
    publicId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PlaylistSongListRelationFilter = {
    every?: PlaylistSongWhereInput
    some?: PlaylistSongWhereInput
    none?: PlaylistSongWhereInput
  }

  export type AlbumSongListRelationFilter = {
    every?: AlbumSongWhereInput
    some?: AlbumSongWhereInput
    none?: AlbumSongWhereInput
  }

  export type PlaylistSongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumSongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SongCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    duration?: SortOrder
    lyrics?: SortOrder
    songUrl?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SongAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
  }

  export type SongMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    duration?: SortOrder
    lyrics?: SortOrder
    songUrl?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SongMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    duration?: SortOrder
    lyrics?: SortOrder
    songUrl?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SongSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AlbumCountOrderByAggregateInput = {
    id?: SortOrder
    albumName?: SortOrder
    artist?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AlbumAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    albumName?: SortOrder
    artist?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    albumName?: SortOrder
    artist?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AlbumSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    playlistName?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PlaylistAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    playlistName?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    playlistName?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PlaylistSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SongScalarRelationFilter = {
    is?: SongWhereInput
    isNot?: SongWhereInput
  }

  export type PlaylistScalarRelationFilter = {
    is?: PlaylistWhereInput
    isNot?: PlaylistWhereInput
  }

  export type PlaylistSongCountOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    playlistId?: SortOrder
    addedAt?: SortOrder
  }

  export type PlaylistSongAvgOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    playlistId?: SortOrder
  }

  export type PlaylistSongMaxOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    playlistId?: SortOrder
    addedAt?: SortOrder
  }

  export type PlaylistSongMinOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    playlistId?: SortOrder
    addedAt?: SortOrder
  }

  export type PlaylistSongSumOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    playlistId?: SortOrder
  }

  export type AlbumScalarRelationFilter = {
    is?: AlbumWhereInput
    isNot?: AlbumWhereInput
  }

  export type AlbumSongCountOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    songId?: SortOrder
  }

  export type AlbumSongAvgOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    songId?: SortOrder
  }

  export type AlbumSongMaxOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    songId?: SortOrder
  }

  export type AlbumSongMinOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    songId?: SortOrder
  }

  export type AlbumSongSumOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    songId?: SortOrder
  }

  export type starredSongCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
  }

  export type starredSongAvgOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
  }

  export type starredSongMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
  }

  export type starredSongMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    songId?: SortOrder
  }

  export type starredSongSumOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PricingPackageCountOrderByAggregateInput = {
    id?: SortOrder
    packageName?: SortOrder
    price?: SortOrder
    durationMonth?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingPackageAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    durationMonth?: SortOrder
  }

  export type PricingPackageMaxOrderByAggregateInput = {
    id?: SortOrder
    packageName?: SortOrder
    price?: SortOrder
    durationMonth?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingPackageMinOrderByAggregateInput = {
    id?: SortOrder
    packageName?: SortOrder
    price?: SortOrder
    durationMonth?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingPackageSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    durationMonth?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PricingPackageScalarRelationFilter = {
    is?: PricingPackageWhereInput
    isNot?: PricingPackageWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    packageId?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
    transactionId?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    packageId?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    packageId?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
    transactionId?: SortOrder
  }

  export type SubscriptionScalarRelationFilter = {
    is?: SubscriptionWhereInput
    isNot?: SubscriptionWhereInput
  }

  export type PaymentTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    paymentProvider?: SortOrder
    providerTransactionId?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    paymentProvider?: SortOrder
    providerTransactionId?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    paymentProvider?: SortOrder
    providerTransactionId?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
  }

  export type EnumVerificationCodeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationCodeType | EnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationCodeType[] | ListEnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationCodeType[] | ListEnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationCodeTypeFilter<$PrismaModel> | $Enums.VerificationCodeType
  }

  export type VerificationCodesCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    isVerified?: SortOrder
    type?: SortOrder
    expiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCodesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VerificationCodesMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    isVerified?: SortOrder
    type?: SortOrder
    expiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCodesMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    isVerified?: SortOrder
    type?: SortOrder
    expiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCodesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumVerificationCodeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationCodeType | EnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationCodeType[] | ListEnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationCodeType[] | ListEnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationCodeTypeWithAggregatesFilter<$PrismaModel> | $Enums.VerificationCodeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationCodeTypeFilter<$PrismaModel>
    _max?: NestedEnumVerificationCodeTypeFilter<$PrismaModel>
  }

  export type StreamCountOrderByAggregateInput = {
    id?: SortOrder
    streamName?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
  }

  export type StreamMaxOrderByAggregateInput = {
    id?: SortOrder
    streamName?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
  }

  export type StreamMinOrderByAggregateInput = {
    id?: SortOrder
    streamName?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
  }

  export type StreamScalarRelationFilter = {
    is?: StreamWhereInput
    isNot?: StreamWhereInput
  }

  export type StreamSongCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    streamId?: SortOrder
    userId?: SortOrder
    addedAt?: SortOrder
  }

  export type StreamSongMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    streamId?: SortOrder
    userId?: SortOrder
    addedAt?: SortOrder
  }

  export type StreamSongMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    streamId?: SortOrder
    userId?: SortOrder
    addedAt?: SortOrder
  }

  export type EnumVoteTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VoteType | EnumVoteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVoteTypeFilter<$PrismaModel> | $Enums.VoteType
  }

  export type StreamSongScalarRelationFilter = {
    is?: StreamSongWhereInput
    isNot?: StreamSongWhereInput
  }

  export type VoteUserIdSongIdCompoundUniqueInput = {
    userId: string
    songId: string
  }

  export type VoteCountOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
  }

  export type VoteMaxOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
  }

  export type VoteMinOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
  }

  export type EnumVoteTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VoteType | EnumVoteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVoteTypeWithAggregatesFilter<$PrismaModel> | $Enums.VoteType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVoteTypeFilter<$PrismaModel>
    _max?: NestedEnumVoteTypeFilter<$PrismaModel>
  }

  export type PlaylistCreateNestedManyWithoutUserDetailsInput = {
    create?: XOR<PlaylistCreateWithoutUserDetailsInput, PlaylistUncheckedCreateWithoutUserDetailsInput> | PlaylistCreateWithoutUserDetailsInput[] | PlaylistUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserDetailsInput | PlaylistCreateOrConnectWithoutUserDetailsInput[]
    createMany?: PlaylistCreateManyUserDetailsInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type starredSongCreateNestedManyWithoutUserDetailsInput = {
    create?: XOR<starredSongCreateWithoutUserDetailsInput, starredSongUncheckedCreateWithoutUserDetailsInput> | starredSongCreateWithoutUserDetailsInput[] | starredSongUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: starredSongCreateOrConnectWithoutUserDetailsInput | starredSongCreateOrConnectWithoutUserDetailsInput[]
    createMany?: starredSongCreateManyUserDetailsInputEnvelope
    connect?: starredSongWhereUniqueInput | starredSongWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutUserDetailsInput = {
    create?: XOR<SubscriptionCreateWithoutUserDetailsInput, SubscriptionUncheckedCreateWithoutUserDetailsInput> | SubscriptionCreateWithoutUserDetailsInput[] | SubscriptionUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserDetailsInput | SubscriptionCreateOrConnectWithoutUserDetailsInput[]
    createMany?: SubscriptionCreateManyUserDetailsInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type PaymentTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentTransactionCreateWithoutUserInput, PaymentTransactionUncheckedCreateWithoutUserInput> | PaymentTransactionCreateWithoutUserInput[] | PaymentTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutUserInput | PaymentTransactionCreateOrConnectWithoutUserInput[]
    createMany?: PaymentTransactionCreateManyUserInputEnvelope
    connect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
  }

  export type StreamCreateNestedManyWithoutHostInput = {
    create?: XOR<StreamCreateWithoutHostInput, StreamUncheckedCreateWithoutHostInput> | StreamCreateWithoutHostInput[] | StreamUncheckedCreateWithoutHostInput[]
    connectOrCreate?: StreamCreateOrConnectWithoutHostInput | StreamCreateOrConnectWithoutHostInput[]
    createMany?: StreamCreateManyHostInputEnvelope
    connect?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type StreamSongCreateNestedManyWithoutUserInput = {
    create?: XOR<StreamSongCreateWithoutUserInput, StreamSongUncheckedCreateWithoutUserInput> | StreamSongCreateWithoutUserInput[] | StreamSongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamSongCreateOrConnectWithoutUserInput | StreamSongCreateOrConnectWithoutUserInput[]
    createMany?: StreamSongCreateManyUserInputEnvelope
    connect?: StreamSongWhereUniqueInput | StreamSongWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutUserDetailsInput = {
    create?: XOR<PlaylistCreateWithoutUserDetailsInput, PlaylistUncheckedCreateWithoutUserDetailsInput> | PlaylistCreateWithoutUserDetailsInput[] | PlaylistUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserDetailsInput | PlaylistCreateOrConnectWithoutUserDetailsInput[]
    createMany?: PlaylistCreateManyUserDetailsInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type starredSongUncheckedCreateNestedManyWithoutUserDetailsInput = {
    create?: XOR<starredSongCreateWithoutUserDetailsInput, starredSongUncheckedCreateWithoutUserDetailsInput> | starredSongCreateWithoutUserDetailsInput[] | starredSongUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: starredSongCreateOrConnectWithoutUserDetailsInput | starredSongCreateOrConnectWithoutUserDetailsInput[]
    createMany?: starredSongCreateManyUserDetailsInputEnvelope
    connect?: starredSongWhereUniqueInput | starredSongWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutUserDetailsInput = {
    create?: XOR<SubscriptionCreateWithoutUserDetailsInput, SubscriptionUncheckedCreateWithoutUserDetailsInput> | SubscriptionCreateWithoutUserDetailsInput[] | SubscriptionUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserDetailsInput | SubscriptionCreateOrConnectWithoutUserDetailsInput[]
    createMany?: SubscriptionCreateManyUserDetailsInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type PaymentTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentTransactionCreateWithoutUserInput, PaymentTransactionUncheckedCreateWithoutUserInput> | PaymentTransactionCreateWithoutUserInput[] | PaymentTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutUserInput | PaymentTransactionCreateOrConnectWithoutUserInput[]
    createMany?: PaymentTransactionCreateManyUserInputEnvelope
    connect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
  }

  export type StreamUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<StreamCreateWithoutHostInput, StreamUncheckedCreateWithoutHostInput> | StreamCreateWithoutHostInput[] | StreamUncheckedCreateWithoutHostInput[]
    connectOrCreate?: StreamCreateOrConnectWithoutHostInput | StreamCreateOrConnectWithoutHostInput[]
    createMany?: StreamCreateManyHostInputEnvelope
    connect?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type StreamSongUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StreamSongCreateWithoutUserInput, StreamSongUncheckedCreateWithoutUserInput> | StreamSongCreateWithoutUserInput[] | StreamSongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamSongCreateOrConnectWithoutUserInput | StreamSongCreateOrConnectWithoutUserInput[]
    createMany?: StreamSongCreateManyUserInputEnvelope
    connect?: StreamSongWhereUniqueInput | StreamSongWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlaylistUpdateManyWithoutUserDetailsNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserDetailsInput, PlaylistUncheckedCreateWithoutUserDetailsInput> | PlaylistCreateWithoutUserDetailsInput[] | PlaylistUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserDetailsInput | PlaylistCreateOrConnectWithoutUserDetailsInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserDetailsInput | PlaylistUpsertWithWhereUniqueWithoutUserDetailsInput[]
    createMany?: PlaylistCreateManyUserDetailsInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserDetailsInput | PlaylistUpdateWithWhereUniqueWithoutUserDetailsInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserDetailsInput | PlaylistUpdateManyWithWhereWithoutUserDetailsInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type starredSongUpdateManyWithoutUserDetailsNestedInput = {
    create?: XOR<starredSongCreateWithoutUserDetailsInput, starredSongUncheckedCreateWithoutUserDetailsInput> | starredSongCreateWithoutUserDetailsInput[] | starredSongUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: starredSongCreateOrConnectWithoutUserDetailsInput | starredSongCreateOrConnectWithoutUserDetailsInput[]
    upsert?: starredSongUpsertWithWhereUniqueWithoutUserDetailsInput | starredSongUpsertWithWhereUniqueWithoutUserDetailsInput[]
    createMany?: starredSongCreateManyUserDetailsInputEnvelope
    set?: starredSongWhereUniqueInput | starredSongWhereUniqueInput[]
    disconnect?: starredSongWhereUniqueInput | starredSongWhereUniqueInput[]
    delete?: starredSongWhereUniqueInput | starredSongWhereUniqueInput[]
    connect?: starredSongWhereUniqueInput | starredSongWhereUniqueInput[]
    update?: starredSongUpdateWithWhereUniqueWithoutUserDetailsInput | starredSongUpdateWithWhereUniqueWithoutUserDetailsInput[]
    updateMany?: starredSongUpdateManyWithWhereWithoutUserDetailsInput | starredSongUpdateManyWithWhereWithoutUserDetailsInput[]
    deleteMany?: starredSongScalarWhereInput | starredSongScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutUserDetailsNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserDetailsInput, SubscriptionUncheckedCreateWithoutUserDetailsInput> | SubscriptionCreateWithoutUserDetailsInput[] | SubscriptionUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserDetailsInput | SubscriptionCreateOrConnectWithoutUserDetailsInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserDetailsInput | SubscriptionUpsertWithWhereUniqueWithoutUserDetailsInput[]
    createMany?: SubscriptionCreateManyUserDetailsInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserDetailsInput | SubscriptionUpdateWithWhereUniqueWithoutUserDetailsInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserDetailsInput | SubscriptionUpdateManyWithWhereWithoutUserDetailsInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type PaymentTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentTransactionCreateWithoutUserInput, PaymentTransactionUncheckedCreateWithoutUserInput> | PaymentTransactionCreateWithoutUserInput[] | PaymentTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutUserInput | PaymentTransactionCreateOrConnectWithoutUserInput[]
    upsert?: PaymentTransactionUpsertWithWhereUniqueWithoutUserInput | PaymentTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentTransactionCreateManyUserInputEnvelope
    set?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    disconnect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    delete?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    connect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    update?: PaymentTransactionUpdateWithWhereUniqueWithoutUserInput | PaymentTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentTransactionUpdateManyWithWhereWithoutUserInput | PaymentTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentTransactionScalarWhereInput | PaymentTransactionScalarWhereInput[]
  }

  export type StreamUpdateManyWithoutHostNestedInput = {
    create?: XOR<StreamCreateWithoutHostInput, StreamUncheckedCreateWithoutHostInput> | StreamCreateWithoutHostInput[] | StreamUncheckedCreateWithoutHostInput[]
    connectOrCreate?: StreamCreateOrConnectWithoutHostInput | StreamCreateOrConnectWithoutHostInput[]
    upsert?: StreamUpsertWithWhereUniqueWithoutHostInput | StreamUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: StreamCreateManyHostInputEnvelope
    set?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    disconnect?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    delete?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    connect?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    update?: StreamUpdateWithWhereUniqueWithoutHostInput | StreamUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: StreamUpdateManyWithWhereWithoutHostInput | StreamUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: StreamScalarWhereInput | StreamScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutUserInput | VoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutUserInput | VoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutUserInput | VoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type StreamSongUpdateManyWithoutUserNestedInput = {
    create?: XOR<StreamSongCreateWithoutUserInput, StreamSongUncheckedCreateWithoutUserInput> | StreamSongCreateWithoutUserInput[] | StreamSongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamSongCreateOrConnectWithoutUserInput | StreamSongCreateOrConnectWithoutUserInput[]
    upsert?: StreamSongUpsertWithWhereUniqueWithoutUserInput | StreamSongUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StreamSongCreateManyUserInputEnvelope
    set?: StreamSongWhereUniqueInput | StreamSongWhereUniqueInput[]
    disconnect?: StreamSongWhereUniqueInput | StreamSongWhereUniqueInput[]
    delete?: StreamSongWhereUniqueInput | StreamSongWhereUniqueInput[]
    connect?: StreamSongWhereUniqueInput | StreamSongWhereUniqueInput[]
    update?: StreamSongUpdateWithWhereUniqueWithoutUserInput | StreamSongUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StreamSongUpdateManyWithWhereWithoutUserInput | StreamSongUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StreamSongScalarWhereInput | StreamSongScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutUserDetailsNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserDetailsInput, PlaylistUncheckedCreateWithoutUserDetailsInput> | PlaylistCreateWithoutUserDetailsInput[] | PlaylistUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserDetailsInput | PlaylistCreateOrConnectWithoutUserDetailsInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserDetailsInput | PlaylistUpsertWithWhereUniqueWithoutUserDetailsInput[]
    createMany?: PlaylistCreateManyUserDetailsInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserDetailsInput | PlaylistUpdateWithWhereUniqueWithoutUserDetailsInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserDetailsInput | PlaylistUpdateManyWithWhereWithoutUserDetailsInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type starredSongUncheckedUpdateManyWithoutUserDetailsNestedInput = {
    create?: XOR<starredSongCreateWithoutUserDetailsInput, starredSongUncheckedCreateWithoutUserDetailsInput> | starredSongCreateWithoutUserDetailsInput[] | starredSongUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: starredSongCreateOrConnectWithoutUserDetailsInput | starredSongCreateOrConnectWithoutUserDetailsInput[]
    upsert?: starredSongUpsertWithWhereUniqueWithoutUserDetailsInput | starredSongUpsertWithWhereUniqueWithoutUserDetailsInput[]
    createMany?: starredSongCreateManyUserDetailsInputEnvelope
    set?: starredSongWhereUniqueInput | starredSongWhereUniqueInput[]
    disconnect?: starredSongWhereUniqueInput | starredSongWhereUniqueInput[]
    delete?: starredSongWhereUniqueInput | starredSongWhereUniqueInput[]
    connect?: starredSongWhereUniqueInput | starredSongWhereUniqueInput[]
    update?: starredSongUpdateWithWhereUniqueWithoutUserDetailsInput | starredSongUpdateWithWhereUniqueWithoutUserDetailsInput[]
    updateMany?: starredSongUpdateManyWithWhereWithoutUserDetailsInput | starredSongUpdateManyWithWhereWithoutUserDetailsInput[]
    deleteMany?: starredSongScalarWhereInput | starredSongScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserDetailsNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserDetailsInput, SubscriptionUncheckedCreateWithoutUserDetailsInput> | SubscriptionCreateWithoutUserDetailsInput[] | SubscriptionUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserDetailsInput | SubscriptionCreateOrConnectWithoutUserDetailsInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserDetailsInput | SubscriptionUpsertWithWhereUniqueWithoutUserDetailsInput[]
    createMany?: SubscriptionCreateManyUserDetailsInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserDetailsInput | SubscriptionUpdateWithWhereUniqueWithoutUserDetailsInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserDetailsInput | SubscriptionUpdateManyWithWhereWithoutUserDetailsInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentTransactionCreateWithoutUserInput, PaymentTransactionUncheckedCreateWithoutUserInput> | PaymentTransactionCreateWithoutUserInput[] | PaymentTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutUserInput | PaymentTransactionCreateOrConnectWithoutUserInput[]
    upsert?: PaymentTransactionUpsertWithWhereUniqueWithoutUserInput | PaymentTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentTransactionCreateManyUserInputEnvelope
    set?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    disconnect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    delete?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    connect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    update?: PaymentTransactionUpdateWithWhereUniqueWithoutUserInput | PaymentTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentTransactionUpdateManyWithWhereWithoutUserInput | PaymentTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentTransactionScalarWhereInput | PaymentTransactionScalarWhereInput[]
  }

  export type StreamUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<StreamCreateWithoutHostInput, StreamUncheckedCreateWithoutHostInput> | StreamCreateWithoutHostInput[] | StreamUncheckedCreateWithoutHostInput[]
    connectOrCreate?: StreamCreateOrConnectWithoutHostInput | StreamCreateOrConnectWithoutHostInput[]
    upsert?: StreamUpsertWithWhereUniqueWithoutHostInput | StreamUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: StreamCreateManyHostInputEnvelope
    set?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    disconnect?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    delete?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    connect?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    update?: StreamUpdateWithWhereUniqueWithoutHostInput | StreamUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: StreamUpdateManyWithWhereWithoutHostInput | StreamUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: StreamScalarWhereInput | StreamScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput> | VoteCreateWithoutUserInput[] | VoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutUserInput | VoteCreateOrConnectWithoutUserInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutUserInput | VoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoteCreateManyUserInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutUserInput | VoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutUserInput | VoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type StreamSongUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StreamSongCreateWithoutUserInput, StreamSongUncheckedCreateWithoutUserInput> | StreamSongCreateWithoutUserInput[] | StreamSongUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamSongCreateOrConnectWithoutUserInput | StreamSongCreateOrConnectWithoutUserInput[]
    upsert?: StreamSongUpsertWithWhereUniqueWithoutUserInput | StreamSongUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StreamSongCreateManyUserInputEnvelope
    set?: StreamSongWhereUniqueInput | StreamSongWhereUniqueInput[]
    disconnect?: StreamSongWhereUniqueInput | StreamSongWhereUniqueInput[]
    delete?: StreamSongWhereUniqueInput | StreamSongWhereUniqueInput[]
    connect?: StreamSongWhereUniqueInput | StreamSongWhereUniqueInput[]
    update?: StreamSongUpdateWithWhereUniqueWithoutUserInput | StreamSongUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StreamSongUpdateManyWithWhereWithoutUserInput | StreamSongUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StreamSongScalarWhereInput | StreamSongScalarWhereInput[]
  }

  export type PlaylistSongCreateNestedManyWithoutSongDetailsInput = {
    create?: XOR<PlaylistSongCreateWithoutSongDetailsInput, PlaylistSongUncheckedCreateWithoutSongDetailsInput> | PlaylistSongCreateWithoutSongDetailsInput[] | PlaylistSongUncheckedCreateWithoutSongDetailsInput[]
    connectOrCreate?: PlaylistSongCreateOrConnectWithoutSongDetailsInput | PlaylistSongCreateOrConnectWithoutSongDetailsInput[]
    createMany?: PlaylistSongCreateManySongDetailsInputEnvelope
    connect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
  }

  export type AlbumSongCreateNestedManyWithoutSongDetailsInput = {
    create?: XOR<AlbumSongCreateWithoutSongDetailsInput, AlbumSongUncheckedCreateWithoutSongDetailsInput> | AlbumSongCreateWithoutSongDetailsInput[] | AlbumSongUncheckedCreateWithoutSongDetailsInput[]
    connectOrCreate?: AlbumSongCreateOrConnectWithoutSongDetailsInput | AlbumSongCreateOrConnectWithoutSongDetailsInput[]
    createMany?: AlbumSongCreateManySongDetailsInputEnvelope
    connect?: AlbumSongWhereUniqueInput | AlbumSongWhereUniqueInput[]
  }

  export type starredSongCreateNestedManyWithoutSongDetailsInput = {
    create?: XOR<starredSongCreateWithoutSongDetailsInput, starredSongUncheckedCreateWithoutSongDetailsInput> | starredSongCreateWithoutSongDetailsInput[] | starredSongUncheckedCreateWithoutSongDetailsInput[]
    connectOrCreate?: starredSongCreateOrConnectWithoutSongDetailsInput | starredSongCreateOrConnectWithoutSongDetailsInput[]
    createMany?: starredSongCreateManySongDetailsInputEnvelope
    connect?: starredSongWhereUniqueInput | starredSongWhereUniqueInput[]
  }

  export type PlaylistSongUncheckedCreateNestedManyWithoutSongDetailsInput = {
    create?: XOR<PlaylistSongCreateWithoutSongDetailsInput, PlaylistSongUncheckedCreateWithoutSongDetailsInput> | PlaylistSongCreateWithoutSongDetailsInput[] | PlaylistSongUncheckedCreateWithoutSongDetailsInput[]
    connectOrCreate?: PlaylistSongCreateOrConnectWithoutSongDetailsInput | PlaylistSongCreateOrConnectWithoutSongDetailsInput[]
    createMany?: PlaylistSongCreateManySongDetailsInputEnvelope
    connect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
  }

  export type AlbumSongUncheckedCreateNestedManyWithoutSongDetailsInput = {
    create?: XOR<AlbumSongCreateWithoutSongDetailsInput, AlbumSongUncheckedCreateWithoutSongDetailsInput> | AlbumSongCreateWithoutSongDetailsInput[] | AlbumSongUncheckedCreateWithoutSongDetailsInput[]
    connectOrCreate?: AlbumSongCreateOrConnectWithoutSongDetailsInput | AlbumSongCreateOrConnectWithoutSongDetailsInput[]
    createMany?: AlbumSongCreateManySongDetailsInputEnvelope
    connect?: AlbumSongWhereUniqueInput | AlbumSongWhereUniqueInput[]
  }

  export type starredSongUncheckedCreateNestedManyWithoutSongDetailsInput = {
    create?: XOR<starredSongCreateWithoutSongDetailsInput, starredSongUncheckedCreateWithoutSongDetailsInput> | starredSongCreateWithoutSongDetailsInput[] | starredSongUncheckedCreateWithoutSongDetailsInput[]
    connectOrCreate?: starredSongCreateOrConnectWithoutSongDetailsInput | starredSongCreateOrConnectWithoutSongDetailsInput[]
    createMany?: starredSongCreateManySongDetailsInputEnvelope
    connect?: starredSongWhereUniqueInput | starredSongWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlaylistSongUpdateManyWithoutSongDetailsNestedInput = {
    create?: XOR<PlaylistSongCreateWithoutSongDetailsInput, PlaylistSongUncheckedCreateWithoutSongDetailsInput> | PlaylistSongCreateWithoutSongDetailsInput[] | PlaylistSongUncheckedCreateWithoutSongDetailsInput[]
    connectOrCreate?: PlaylistSongCreateOrConnectWithoutSongDetailsInput | PlaylistSongCreateOrConnectWithoutSongDetailsInput[]
    upsert?: PlaylistSongUpsertWithWhereUniqueWithoutSongDetailsInput | PlaylistSongUpsertWithWhereUniqueWithoutSongDetailsInput[]
    createMany?: PlaylistSongCreateManySongDetailsInputEnvelope
    set?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    disconnect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    delete?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    connect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    update?: PlaylistSongUpdateWithWhereUniqueWithoutSongDetailsInput | PlaylistSongUpdateWithWhereUniqueWithoutSongDetailsInput[]
    updateMany?: PlaylistSongUpdateManyWithWhereWithoutSongDetailsInput | PlaylistSongUpdateManyWithWhereWithoutSongDetailsInput[]
    deleteMany?: PlaylistSongScalarWhereInput | PlaylistSongScalarWhereInput[]
  }

  export type AlbumSongUpdateManyWithoutSongDetailsNestedInput = {
    create?: XOR<AlbumSongCreateWithoutSongDetailsInput, AlbumSongUncheckedCreateWithoutSongDetailsInput> | AlbumSongCreateWithoutSongDetailsInput[] | AlbumSongUncheckedCreateWithoutSongDetailsInput[]
    connectOrCreate?: AlbumSongCreateOrConnectWithoutSongDetailsInput | AlbumSongCreateOrConnectWithoutSongDetailsInput[]
    upsert?: AlbumSongUpsertWithWhereUniqueWithoutSongDetailsInput | AlbumSongUpsertWithWhereUniqueWithoutSongDetailsInput[]
    createMany?: AlbumSongCreateManySongDetailsInputEnvelope
    set?: AlbumSongWhereUniqueInput | AlbumSongWhereUniqueInput[]
    disconnect?: AlbumSongWhereUniqueInput | AlbumSongWhereUniqueInput[]
    delete?: AlbumSongWhereUniqueInput | AlbumSongWhereUniqueInput[]
    connect?: AlbumSongWhereUniqueInput | AlbumSongWhereUniqueInput[]
    update?: AlbumSongUpdateWithWhereUniqueWithoutSongDetailsInput | AlbumSongUpdateWithWhereUniqueWithoutSongDetailsInput[]
    updateMany?: AlbumSongUpdateManyWithWhereWithoutSongDetailsInput | AlbumSongUpdateManyWithWhereWithoutSongDetailsInput[]
    deleteMany?: AlbumSongScalarWhereInput | AlbumSongScalarWhereInput[]
  }

  export type starredSongUpdateManyWithoutSongDetailsNestedInput = {
    create?: XOR<starredSongCreateWithoutSongDetailsInput, starredSongUncheckedCreateWithoutSongDetailsInput> | starredSongCreateWithoutSongDetailsInput[] | starredSongUncheckedCreateWithoutSongDetailsInput[]
    connectOrCreate?: starredSongCreateOrConnectWithoutSongDetailsInput | starredSongCreateOrConnectWithoutSongDetailsInput[]
    upsert?: starredSongUpsertWithWhereUniqueWithoutSongDetailsInput | starredSongUpsertWithWhereUniqueWithoutSongDetailsInput[]
    createMany?: starredSongCreateManySongDetailsInputEnvelope
    set?: starredSongWhereUniqueInput | starredSongWhereUniqueInput[]
    disconnect?: starredSongWhereUniqueInput | starredSongWhereUniqueInput[]
    delete?: starredSongWhereUniqueInput | starredSongWhereUniqueInput[]
    connect?: starredSongWhereUniqueInput | starredSongWhereUniqueInput[]
    update?: starredSongUpdateWithWhereUniqueWithoutSongDetailsInput | starredSongUpdateWithWhereUniqueWithoutSongDetailsInput[]
    updateMany?: starredSongUpdateManyWithWhereWithoutSongDetailsInput | starredSongUpdateManyWithWhereWithoutSongDetailsInput[]
    deleteMany?: starredSongScalarWhereInput | starredSongScalarWhereInput[]
  }

  export type PlaylistSongUncheckedUpdateManyWithoutSongDetailsNestedInput = {
    create?: XOR<PlaylistSongCreateWithoutSongDetailsInput, PlaylistSongUncheckedCreateWithoutSongDetailsInput> | PlaylistSongCreateWithoutSongDetailsInput[] | PlaylistSongUncheckedCreateWithoutSongDetailsInput[]
    connectOrCreate?: PlaylistSongCreateOrConnectWithoutSongDetailsInput | PlaylistSongCreateOrConnectWithoutSongDetailsInput[]
    upsert?: PlaylistSongUpsertWithWhereUniqueWithoutSongDetailsInput | PlaylistSongUpsertWithWhereUniqueWithoutSongDetailsInput[]
    createMany?: PlaylistSongCreateManySongDetailsInputEnvelope
    set?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    disconnect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    delete?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    connect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    update?: PlaylistSongUpdateWithWhereUniqueWithoutSongDetailsInput | PlaylistSongUpdateWithWhereUniqueWithoutSongDetailsInput[]
    updateMany?: PlaylistSongUpdateManyWithWhereWithoutSongDetailsInput | PlaylistSongUpdateManyWithWhereWithoutSongDetailsInput[]
    deleteMany?: PlaylistSongScalarWhereInput | PlaylistSongScalarWhereInput[]
  }

  export type AlbumSongUncheckedUpdateManyWithoutSongDetailsNestedInput = {
    create?: XOR<AlbumSongCreateWithoutSongDetailsInput, AlbumSongUncheckedCreateWithoutSongDetailsInput> | AlbumSongCreateWithoutSongDetailsInput[] | AlbumSongUncheckedCreateWithoutSongDetailsInput[]
    connectOrCreate?: AlbumSongCreateOrConnectWithoutSongDetailsInput | AlbumSongCreateOrConnectWithoutSongDetailsInput[]
    upsert?: AlbumSongUpsertWithWhereUniqueWithoutSongDetailsInput | AlbumSongUpsertWithWhereUniqueWithoutSongDetailsInput[]
    createMany?: AlbumSongCreateManySongDetailsInputEnvelope
    set?: AlbumSongWhereUniqueInput | AlbumSongWhereUniqueInput[]
    disconnect?: AlbumSongWhereUniqueInput | AlbumSongWhereUniqueInput[]
    delete?: AlbumSongWhereUniqueInput | AlbumSongWhereUniqueInput[]
    connect?: AlbumSongWhereUniqueInput | AlbumSongWhereUniqueInput[]
    update?: AlbumSongUpdateWithWhereUniqueWithoutSongDetailsInput | AlbumSongUpdateWithWhereUniqueWithoutSongDetailsInput[]
    updateMany?: AlbumSongUpdateManyWithWhereWithoutSongDetailsInput | AlbumSongUpdateManyWithWhereWithoutSongDetailsInput[]
    deleteMany?: AlbumSongScalarWhereInput | AlbumSongScalarWhereInput[]
  }

  export type starredSongUncheckedUpdateManyWithoutSongDetailsNestedInput = {
    create?: XOR<starredSongCreateWithoutSongDetailsInput, starredSongUncheckedCreateWithoutSongDetailsInput> | starredSongCreateWithoutSongDetailsInput[] | starredSongUncheckedCreateWithoutSongDetailsInput[]
    connectOrCreate?: starredSongCreateOrConnectWithoutSongDetailsInput | starredSongCreateOrConnectWithoutSongDetailsInput[]
    upsert?: starredSongUpsertWithWhereUniqueWithoutSongDetailsInput | starredSongUpsertWithWhereUniqueWithoutSongDetailsInput[]
    createMany?: starredSongCreateManySongDetailsInputEnvelope
    set?: starredSongWhereUniqueInput | starredSongWhereUniqueInput[]
    disconnect?: starredSongWhereUniqueInput | starredSongWhereUniqueInput[]
    delete?: starredSongWhereUniqueInput | starredSongWhereUniqueInput[]
    connect?: starredSongWhereUniqueInput | starredSongWhereUniqueInput[]
    update?: starredSongUpdateWithWhereUniqueWithoutSongDetailsInput | starredSongUpdateWithWhereUniqueWithoutSongDetailsInput[]
    updateMany?: starredSongUpdateManyWithWhereWithoutSongDetailsInput | starredSongUpdateManyWithWhereWithoutSongDetailsInput[]
    deleteMany?: starredSongScalarWhereInput | starredSongScalarWhereInput[]
  }

  export type AlbumSongCreateNestedManyWithoutAlbumDetailsInput = {
    create?: XOR<AlbumSongCreateWithoutAlbumDetailsInput, AlbumSongUncheckedCreateWithoutAlbumDetailsInput> | AlbumSongCreateWithoutAlbumDetailsInput[] | AlbumSongUncheckedCreateWithoutAlbumDetailsInput[]
    connectOrCreate?: AlbumSongCreateOrConnectWithoutAlbumDetailsInput | AlbumSongCreateOrConnectWithoutAlbumDetailsInput[]
    createMany?: AlbumSongCreateManyAlbumDetailsInputEnvelope
    connect?: AlbumSongWhereUniqueInput | AlbumSongWhereUniqueInput[]
  }

  export type AlbumSongUncheckedCreateNestedManyWithoutAlbumDetailsInput = {
    create?: XOR<AlbumSongCreateWithoutAlbumDetailsInput, AlbumSongUncheckedCreateWithoutAlbumDetailsInput> | AlbumSongCreateWithoutAlbumDetailsInput[] | AlbumSongUncheckedCreateWithoutAlbumDetailsInput[]
    connectOrCreate?: AlbumSongCreateOrConnectWithoutAlbumDetailsInput | AlbumSongCreateOrConnectWithoutAlbumDetailsInput[]
    createMany?: AlbumSongCreateManyAlbumDetailsInputEnvelope
    connect?: AlbumSongWhereUniqueInput | AlbumSongWhereUniqueInput[]
  }

  export type AlbumSongUpdateManyWithoutAlbumDetailsNestedInput = {
    create?: XOR<AlbumSongCreateWithoutAlbumDetailsInput, AlbumSongUncheckedCreateWithoutAlbumDetailsInput> | AlbumSongCreateWithoutAlbumDetailsInput[] | AlbumSongUncheckedCreateWithoutAlbumDetailsInput[]
    connectOrCreate?: AlbumSongCreateOrConnectWithoutAlbumDetailsInput | AlbumSongCreateOrConnectWithoutAlbumDetailsInput[]
    upsert?: AlbumSongUpsertWithWhereUniqueWithoutAlbumDetailsInput | AlbumSongUpsertWithWhereUniqueWithoutAlbumDetailsInput[]
    createMany?: AlbumSongCreateManyAlbumDetailsInputEnvelope
    set?: AlbumSongWhereUniqueInput | AlbumSongWhereUniqueInput[]
    disconnect?: AlbumSongWhereUniqueInput | AlbumSongWhereUniqueInput[]
    delete?: AlbumSongWhereUniqueInput | AlbumSongWhereUniqueInput[]
    connect?: AlbumSongWhereUniqueInput | AlbumSongWhereUniqueInput[]
    update?: AlbumSongUpdateWithWhereUniqueWithoutAlbumDetailsInput | AlbumSongUpdateWithWhereUniqueWithoutAlbumDetailsInput[]
    updateMany?: AlbumSongUpdateManyWithWhereWithoutAlbumDetailsInput | AlbumSongUpdateManyWithWhereWithoutAlbumDetailsInput[]
    deleteMany?: AlbumSongScalarWhereInput | AlbumSongScalarWhereInput[]
  }

  export type AlbumSongUncheckedUpdateManyWithoutAlbumDetailsNestedInput = {
    create?: XOR<AlbumSongCreateWithoutAlbumDetailsInput, AlbumSongUncheckedCreateWithoutAlbumDetailsInput> | AlbumSongCreateWithoutAlbumDetailsInput[] | AlbumSongUncheckedCreateWithoutAlbumDetailsInput[]
    connectOrCreate?: AlbumSongCreateOrConnectWithoutAlbumDetailsInput | AlbumSongCreateOrConnectWithoutAlbumDetailsInput[]
    upsert?: AlbumSongUpsertWithWhereUniqueWithoutAlbumDetailsInput | AlbumSongUpsertWithWhereUniqueWithoutAlbumDetailsInput[]
    createMany?: AlbumSongCreateManyAlbumDetailsInputEnvelope
    set?: AlbumSongWhereUniqueInput | AlbumSongWhereUniqueInput[]
    disconnect?: AlbumSongWhereUniqueInput | AlbumSongWhereUniqueInput[]
    delete?: AlbumSongWhereUniqueInput | AlbumSongWhereUniqueInput[]
    connect?: AlbumSongWhereUniqueInput | AlbumSongWhereUniqueInput[]
    update?: AlbumSongUpdateWithWhereUniqueWithoutAlbumDetailsInput | AlbumSongUpdateWithWhereUniqueWithoutAlbumDetailsInput[]
    updateMany?: AlbumSongUpdateManyWithWhereWithoutAlbumDetailsInput | AlbumSongUpdateManyWithWhereWithoutAlbumDetailsInput[]
    deleteMany?: AlbumSongScalarWhereInput | AlbumSongScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPlaylistInput = {
    create?: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistInput
    connect?: UserWhereUniqueInput
  }

  export type PlaylistSongCreateNestedManyWithoutPlaylistDetailsInput = {
    create?: XOR<PlaylistSongCreateWithoutPlaylistDetailsInput, PlaylistSongUncheckedCreateWithoutPlaylistDetailsInput> | PlaylistSongCreateWithoutPlaylistDetailsInput[] | PlaylistSongUncheckedCreateWithoutPlaylistDetailsInput[]
    connectOrCreate?: PlaylistSongCreateOrConnectWithoutPlaylistDetailsInput | PlaylistSongCreateOrConnectWithoutPlaylistDetailsInput[]
    createMany?: PlaylistSongCreateManyPlaylistDetailsInputEnvelope
    connect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
  }

  export type PlaylistSongUncheckedCreateNestedManyWithoutPlaylistDetailsInput = {
    create?: XOR<PlaylistSongCreateWithoutPlaylistDetailsInput, PlaylistSongUncheckedCreateWithoutPlaylistDetailsInput> | PlaylistSongCreateWithoutPlaylistDetailsInput[] | PlaylistSongUncheckedCreateWithoutPlaylistDetailsInput[]
    connectOrCreate?: PlaylistSongCreateOrConnectWithoutPlaylistDetailsInput | PlaylistSongCreateOrConnectWithoutPlaylistDetailsInput[]
    createMany?: PlaylistSongCreateManyPlaylistDetailsInputEnvelope
    connect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPlaylistNestedInput = {
    create?: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistInput
    upsert?: UserUpsertWithoutPlaylistInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlaylistInput, UserUpdateWithoutPlaylistInput>, UserUncheckedUpdateWithoutPlaylistInput>
  }

  export type PlaylistSongUpdateManyWithoutPlaylistDetailsNestedInput = {
    create?: XOR<PlaylistSongCreateWithoutPlaylistDetailsInput, PlaylistSongUncheckedCreateWithoutPlaylistDetailsInput> | PlaylistSongCreateWithoutPlaylistDetailsInput[] | PlaylistSongUncheckedCreateWithoutPlaylistDetailsInput[]
    connectOrCreate?: PlaylistSongCreateOrConnectWithoutPlaylistDetailsInput | PlaylistSongCreateOrConnectWithoutPlaylistDetailsInput[]
    upsert?: PlaylistSongUpsertWithWhereUniqueWithoutPlaylistDetailsInput | PlaylistSongUpsertWithWhereUniqueWithoutPlaylistDetailsInput[]
    createMany?: PlaylistSongCreateManyPlaylistDetailsInputEnvelope
    set?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    disconnect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    delete?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    connect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    update?: PlaylistSongUpdateWithWhereUniqueWithoutPlaylistDetailsInput | PlaylistSongUpdateWithWhereUniqueWithoutPlaylistDetailsInput[]
    updateMany?: PlaylistSongUpdateManyWithWhereWithoutPlaylistDetailsInput | PlaylistSongUpdateManyWithWhereWithoutPlaylistDetailsInput[]
    deleteMany?: PlaylistSongScalarWhereInput | PlaylistSongScalarWhereInput[]
  }

  export type PlaylistSongUncheckedUpdateManyWithoutPlaylistDetailsNestedInput = {
    create?: XOR<PlaylistSongCreateWithoutPlaylistDetailsInput, PlaylistSongUncheckedCreateWithoutPlaylistDetailsInput> | PlaylistSongCreateWithoutPlaylistDetailsInput[] | PlaylistSongUncheckedCreateWithoutPlaylistDetailsInput[]
    connectOrCreate?: PlaylistSongCreateOrConnectWithoutPlaylistDetailsInput | PlaylistSongCreateOrConnectWithoutPlaylistDetailsInput[]
    upsert?: PlaylistSongUpsertWithWhereUniqueWithoutPlaylistDetailsInput | PlaylistSongUpsertWithWhereUniqueWithoutPlaylistDetailsInput[]
    createMany?: PlaylistSongCreateManyPlaylistDetailsInputEnvelope
    set?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    disconnect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    delete?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    connect?: PlaylistSongWhereUniqueInput | PlaylistSongWhereUniqueInput[]
    update?: PlaylistSongUpdateWithWhereUniqueWithoutPlaylistDetailsInput | PlaylistSongUpdateWithWhereUniqueWithoutPlaylistDetailsInput[]
    updateMany?: PlaylistSongUpdateManyWithWhereWithoutPlaylistDetailsInput | PlaylistSongUpdateManyWithWhereWithoutPlaylistDetailsInput[]
    deleteMany?: PlaylistSongScalarWhereInput | PlaylistSongScalarWhereInput[]
  }

  export type SongCreateNestedOneWithoutPlaylistSongInput = {
    create?: XOR<SongCreateWithoutPlaylistSongInput, SongUncheckedCreateWithoutPlaylistSongInput>
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistSongInput
    connect?: SongWhereUniqueInput
  }

  export type PlaylistCreateNestedOneWithoutPlaylistSongInput = {
    create?: XOR<PlaylistCreateWithoutPlaylistSongInput, PlaylistUncheckedCreateWithoutPlaylistSongInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutPlaylistSongInput
    connect?: PlaylistWhereUniqueInput
  }

  export type SongUpdateOneRequiredWithoutPlaylistSongNestedInput = {
    create?: XOR<SongCreateWithoutPlaylistSongInput, SongUncheckedCreateWithoutPlaylistSongInput>
    connectOrCreate?: SongCreateOrConnectWithoutPlaylistSongInput
    upsert?: SongUpsertWithoutPlaylistSongInput
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutPlaylistSongInput, SongUpdateWithoutPlaylistSongInput>, SongUncheckedUpdateWithoutPlaylistSongInput>
  }

  export type PlaylistUpdateOneRequiredWithoutPlaylistSongNestedInput = {
    create?: XOR<PlaylistCreateWithoutPlaylistSongInput, PlaylistUncheckedCreateWithoutPlaylistSongInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutPlaylistSongInput
    upsert?: PlaylistUpsertWithoutPlaylistSongInput
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutPlaylistSongInput, PlaylistUpdateWithoutPlaylistSongInput>, PlaylistUncheckedUpdateWithoutPlaylistSongInput>
  }

  export type AlbumCreateNestedOneWithoutAlbumSongsInput = {
    create?: XOR<AlbumCreateWithoutAlbumSongsInput, AlbumUncheckedCreateWithoutAlbumSongsInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutAlbumSongsInput
    connect?: AlbumWhereUniqueInput
  }

  export type SongCreateNestedOneWithoutAlbumSongsInput = {
    create?: XOR<SongCreateWithoutAlbumSongsInput, SongUncheckedCreateWithoutAlbumSongsInput>
    connectOrCreate?: SongCreateOrConnectWithoutAlbumSongsInput
    connect?: SongWhereUniqueInput
  }

  export type AlbumUpdateOneRequiredWithoutAlbumSongsNestedInput = {
    create?: XOR<AlbumCreateWithoutAlbumSongsInput, AlbumUncheckedCreateWithoutAlbumSongsInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutAlbumSongsInput
    upsert?: AlbumUpsertWithoutAlbumSongsInput
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutAlbumSongsInput, AlbumUpdateWithoutAlbumSongsInput>, AlbumUncheckedUpdateWithoutAlbumSongsInput>
  }

  export type SongUpdateOneRequiredWithoutAlbumSongsNestedInput = {
    create?: XOR<SongCreateWithoutAlbumSongsInput, SongUncheckedCreateWithoutAlbumSongsInput>
    connectOrCreate?: SongCreateOrConnectWithoutAlbumSongsInput
    upsert?: SongUpsertWithoutAlbumSongsInput
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutAlbumSongsInput, SongUpdateWithoutAlbumSongsInput>, SongUncheckedUpdateWithoutAlbumSongsInput>
  }

  export type UserCreateNestedOneWithoutStarredSongsInput = {
    create?: XOR<UserCreateWithoutStarredSongsInput, UserUncheckedCreateWithoutStarredSongsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStarredSongsInput
    connect?: UserWhereUniqueInput
  }

  export type SongCreateNestedOneWithoutStarredSongsInput = {
    create?: XOR<SongCreateWithoutStarredSongsInput, SongUncheckedCreateWithoutStarredSongsInput>
    connectOrCreate?: SongCreateOrConnectWithoutStarredSongsInput
    connect?: SongWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStarredSongsNestedInput = {
    create?: XOR<UserCreateWithoutStarredSongsInput, UserUncheckedCreateWithoutStarredSongsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStarredSongsInput
    upsert?: UserUpsertWithoutStarredSongsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStarredSongsInput, UserUpdateWithoutStarredSongsInput>, UserUncheckedUpdateWithoutStarredSongsInput>
  }

  export type SongUpdateOneRequiredWithoutStarredSongsNestedInput = {
    create?: XOR<SongCreateWithoutStarredSongsInput, SongUncheckedCreateWithoutStarredSongsInput>
    connectOrCreate?: SongCreateOrConnectWithoutStarredSongsInput
    upsert?: SongUpsertWithoutStarredSongsInput
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutStarredSongsInput, SongUpdateWithoutStarredSongsInput>, SongUncheckedUpdateWithoutStarredSongsInput>
  }

  export type SubscriptionCreateNestedManyWithoutPackageDetailsInput = {
    create?: XOR<SubscriptionCreateWithoutPackageDetailsInput, SubscriptionUncheckedCreateWithoutPackageDetailsInput> | SubscriptionCreateWithoutPackageDetailsInput[] | SubscriptionUncheckedCreateWithoutPackageDetailsInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPackageDetailsInput | SubscriptionCreateOrConnectWithoutPackageDetailsInput[]
    createMany?: SubscriptionCreateManyPackageDetailsInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type PaymentTransactionCreateNestedManyWithoutPackageInput = {
    create?: XOR<PaymentTransactionCreateWithoutPackageInput, PaymentTransactionUncheckedCreateWithoutPackageInput> | PaymentTransactionCreateWithoutPackageInput[] | PaymentTransactionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutPackageInput | PaymentTransactionCreateOrConnectWithoutPackageInput[]
    createMany?: PaymentTransactionCreateManyPackageInputEnvelope
    connect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutPackageDetailsInput = {
    create?: XOR<SubscriptionCreateWithoutPackageDetailsInput, SubscriptionUncheckedCreateWithoutPackageDetailsInput> | SubscriptionCreateWithoutPackageDetailsInput[] | SubscriptionUncheckedCreateWithoutPackageDetailsInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPackageDetailsInput | SubscriptionCreateOrConnectWithoutPackageDetailsInput[]
    createMany?: SubscriptionCreateManyPackageDetailsInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type PaymentTransactionUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<PaymentTransactionCreateWithoutPackageInput, PaymentTransactionUncheckedCreateWithoutPackageInput> | PaymentTransactionCreateWithoutPackageInput[] | PaymentTransactionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutPackageInput | PaymentTransactionCreateOrConnectWithoutPackageInput[]
    createMany?: PaymentTransactionCreateManyPackageInputEnvelope
    connect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubscriptionUpdateManyWithoutPackageDetailsNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPackageDetailsInput, SubscriptionUncheckedCreateWithoutPackageDetailsInput> | SubscriptionCreateWithoutPackageDetailsInput[] | SubscriptionUncheckedCreateWithoutPackageDetailsInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPackageDetailsInput | SubscriptionCreateOrConnectWithoutPackageDetailsInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPackageDetailsInput | SubscriptionUpsertWithWhereUniqueWithoutPackageDetailsInput[]
    createMany?: SubscriptionCreateManyPackageDetailsInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPackageDetailsInput | SubscriptionUpdateWithWhereUniqueWithoutPackageDetailsInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPackageDetailsInput | SubscriptionUpdateManyWithWhereWithoutPackageDetailsInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type PaymentTransactionUpdateManyWithoutPackageNestedInput = {
    create?: XOR<PaymentTransactionCreateWithoutPackageInput, PaymentTransactionUncheckedCreateWithoutPackageInput> | PaymentTransactionCreateWithoutPackageInput[] | PaymentTransactionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutPackageInput | PaymentTransactionCreateOrConnectWithoutPackageInput[]
    upsert?: PaymentTransactionUpsertWithWhereUniqueWithoutPackageInput | PaymentTransactionUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: PaymentTransactionCreateManyPackageInputEnvelope
    set?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    disconnect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    delete?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    connect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    update?: PaymentTransactionUpdateWithWhereUniqueWithoutPackageInput | PaymentTransactionUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: PaymentTransactionUpdateManyWithWhereWithoutPackageInput | PaymentTransactionUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: PaymentTransactionScalarWhereInput | PaymentTransactionScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutPackageDetailsNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPackageDetailsInput, SubscriptionUncheckedCreateWithoutPackageDetailsInput> | SubscriptionCreateWithoutPackageDetailsInput[] | SubscriptionUncheckedCreateWithoutPackageDetailsInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPackageDetailsInput | SubscriptionCreateOrConnectWithoutPackageDetailsInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPackageDetailsInput | SubscriptionUpsertWithWhereUniqueWithoutPackageDetailsInput[]
    createMany?: SubscriptionCreateManyPackageDetailsInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPackageDetailsInput | SubscriptionUpdateWithWhereUniqueWithoutPackageDetailsInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPackageDetailsInput | SubscriptionUpdateManyWithWhereWithoutPackageDetailsInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type PaymentTransactionUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<PaymentTransactionCreateWithoutPackageInput, PaymentTransactionUncheckedCreateWithoutPackageInput> | PaymentTransactionCreateWithoutPackageInput[] | PaymentTransactionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutPackageInput | PaymentTransactionCreateOrConnectWithoutPackageInput[]
    upsert?: PaymentTransactionUpsertWithWhereUniqueWithoutPackageInput | PaymentTransactionUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: PaymentTransactionCreateManyPackageInputEnvelope
    set?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    disconnect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    delete?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    connect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    update?: PaymentTransactionUpdateWithWhereUniqueWithoutPackageInput | PaymentTransactionUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: PaymentTransactionUpdateManyWithWhereWithoutPackageInput | PaymentTransactionUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: PaymentTransactionScalarWhereInput | PaymentTransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type PricingPackageCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<PricingPackageCreateWithoutSubscriptionInput, PricingPackageUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: PricingPackageCreateOrConnectWithoutSubscriptionInput
    connect?: PricingPackageWhereUniqueInput
  }

  export type PaymentTransactionCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentTransactionCreateWithoutSubscriptionInput, PaymentTransactionUncheckedCreateWithoutSubscriptionInput> | PaymentTransactionCreateWithoutSubscriptionInput[] | PaymentTransactionUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutSubscriptionInput | PaymentTransactionCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentTransactionCreateManySubscriptionInputEnvelope
    connect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
  }

  export type PaymentTransactionUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentTransactionCreateWithoutSubscriptionInput, PaymentTransactionUncheckedCreateWithoutSubscriptionInput> | PaymentTransactionCreateWithoutSubscriptionInput[] | PaymentTransactionUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutSubscriptionInput | PaymentTransactionCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentTransactionCreateManySubscriptionInputEnvelope
    connect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PricingPackageUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<PricingPackageCreateWithoutSubscriptionInput, PricingPackageUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: PricingPackageCreateOrConnectWithoutSubscriptionInput
    upsert?: PricingPackageUpsertWithoutSubscriptionInput
    connect?: PricingPackageWhereUniqueInput
    update?: XOR<XOR<PricingPackageUpdateToOneWithWhereWithoutSubscriptionInput, PricingPackageUpdateWithoutSubscriptionInput>, PricingPackageUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PaymentTransactionUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentTransactionCreateWithoutSubscriptionInput, PaymentTransactionUncheckedCreateWithoutSubscriptionInput> | PaymentTransactionCreateWithoutSubscriptionInput[] | PaymentTransactionUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutSubscriptionInput | PaymentTransactionCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentTransactionUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentTransactionUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentTransactionCreateManySubscriptionInputEnvelope
    set?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    disconnect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    delete?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    connect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    update?: PaymentTransactionUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentTransactionUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentTransactionUpdateManyWithWhereWithoutSubscriptionInput | PaymentTransactionUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentTransactionScalarWhereInput | PaymentTransactionScalarWhereInput[]
  }

  export type PaymentTransactionUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentTransactionCreateWithoutSubscriptionInput, PaymentTransactionUncheckedCreateWithoutSubscriptionInput> | PaymentTransactionCreateWithoutSubscriptionInput[] | PaymentTransactionUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentTransactionCreateOrConnectWithoutSubscriptionInput | PaymentTransactionCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentTransactionUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentTransactionUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentTransactionCreateManySubscriptionInputEnvelope
    set?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    disconnect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    delete?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    connect?: PaymentTransactionWhereUniqueInput | PaymentTransactionWhereUniqueInput[]
    update?: PaymentTransactionUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentTransactionUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentTransactionUpdateManyWithWhereWithoutSubscriptionInput | PaymentTransactionUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentTransactionScalarWhereInput | PaymentTransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPaymentTransactionInput = {
    create?: XOR<UserCreateWithoutPaymentTransactionInput, UserUncheckedCreateWithoutPaymentTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type PricingPackageCreateNestedOneWithoutPaymentTransactionInput = {
    create?: XOR<PricingPackageCreateWithoutPaymentTransactionInput, PricingPackageUncheckedCreateWithoutPaymentTransactionInput>
    connectOrCreate?: PricingPackageCreateOrConnectWithoutPaymentTransactionInput
    connect?: PricingPackageWhereUniqueInput
  }

  export type SubscriptionCreateNestedOneWithoutPaymentTransactionInput = {
    create?: XOR<SubscriptionCreateWithoutPaymentTransactionInput, SubscriptionUncheckedCreateWithoutPaymentTransactionInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPaymentTransactionInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPaymentTransactionNestedInput = {
    create?: XOR<UserCreateWithoutPaymentTransactionInput, UserUncheckedCreateWithoutPaymentTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentTransactionInput
    upsert?: UserUpsertWithoutPaymentTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentTransactionInput, UserUpdateWithoutPaymentTransactionInput>, UserUncheckedUpdateWithoutPaymentTransactionInput>
  }

  export type PricingPackageUpdateOneRequiredWithoutPaymentTransactionNestedInput = {
    create?: XOR<PricingPackageCreateWithoutPaymentTransactionInput, PricingPackageUncheckedCreateWithoutPaymentTransactionInput>
    connectOrCreate?: PricingPackageCreateOrConnectWithoutPaymentTransactionInput
    upsert?: PricingPackageUpsertWithoutPaymentTransactionInput
    connect?: PricingPackageWhereUniqueInput
    update?: XOR<XOR<PricingPackageUpdateToOneWithWhereWithoutPaymentTransactionInput, PricingPackageUpdateWithoutPaymentTransactionInput>, PricingPackageUncheckedUpdateWithoutPaymentTransactionInput>
  }

  export type SubscriptionUpdateOneRequiredWithoutPaymentTransactionNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPaymentTransactionInput, SubscriptionUncheckedCreateWithoutPaymentTransactionInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPaymentTransactionInput
    upsert?: SubscriptionUpsertWithoutPaymentTransactionInput
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutPaymentTransactionInput, SubscriptionUpdateWithoutPaymentTransactionInput>, SubscriptionUncheckedUpdateWithoutPaymentTransactionInput>
  }

  export type EnumVerificationCodeTypeFieldUpdateOperationsInput = {
    set?: $Enums.VerificationCodeType
  }

  export type UserCreateNestedOneWithoutStreamsInput = {
    create?: XOR<UserCreateWithoutStreamsInput, UserUncheckedCreateWithoutStreamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreamsInput
    connect?: UserWhereUniqueInput
  }

  export type StreamSongCreateNestedManyWithoutStreamInput = {
    create?: XOR<StreamSongCreateWithoutStreamInput, StreamSongUncheckedCreateWithoutStreamInput> | StreamSongCreateWithoutStreamInput[] | StreamSongUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: StreamSongCreateOrConnectWithoutStreamInput | StreamSongCreateOrConnectWithoutStreamInput[]
    createMany?: StreamSongCreateManyStreamInputEnvelope
    connect?: StreamSongWhereUniqueInput | StreamSongWhereUniqueInput[]
  }

  export type StreamSongUncheckedCreateNestedManyWithoutStreamInput = {
    create?: XOR<StreamSongCreateWithoutStreamInput, StreamSongUncheckedCreateWithoutStreamInput> | StreamSongCreateWithoutStreamInput[] | StreamSongUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: StreamSongCreateOrConnectWithoutStreamInput | StreamSongCreateOrConnectWithoutStreamInput[]
    createMany?: StreamSongCreateManyStreamInputEnvelope
    connect?: StreamSongWhereUniqueInput | StreamSongWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutStreamsNestedInput = {
    create?: XOR<UserCreateWithoutStreamsInput, UserUncheckedCreateWithoutStreamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreamsInput
    upsert?: UserUpsertWithoutStreamsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStreamsInput, UserUpdateWithoutStreamsInput>, UserUncheckedUpdateWithoutStreamsInput>
  }

  export type StreamSongUpdateManyWithoutStreamNestedInput = {
    create?: XOR<StreamSongCreateWithoutStreamInput, StreamSongUncheckedCreateWithoutStreamInput> | StreamSongCreateWithoutStreamInput[] | StreamSongUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: StreamSongCreateOrConnectWithoutStreamInput | StreamSongCreateOrConnectWithoutStreamInput[]
    upsert?: StreamSongUpsertWithWhereUniqueWithoutStreamInput | StreamSongUpsertWithWhereUniqueWithoutStreamInput[]
    createMany?: StreamSongCreateManyStreamInputEnvelope
    set?: StreamSongWhereUniqueInput | StreamSongWhereUniqueInput[]
    disconnect?: StreamSongWhereUniqueInput | StreamSongWhereUniqueInput[]
    delete?: StreamSongWhereUniqueInput | StreamSongWhereUniqueInput[]
    connect?: StreamSongWhereUniqueInput | StreamSongWhereUniqueInput[]
    update?: StreamSongUpdateWithWhereUniqueWithoutStreamInput | StreamSongUpdateWithWhereUniqueWithoutStreamInput[]
    updateMany?: StreamSongUpdateManyWithWhereWithoutStreamInput | StreamSongUpdateManyWithWhereWithoutStreamInput[]
    deleteMany?: StreamSongScalarWhereInput | StreamSongScalarWhereInput[]
  }

  export type StreamSongUncheckedUpdateManyWithoutStreamNestedInput = {
    create?: XOR<StreamSongCreateWithoutStreamInput, StreamSongUncheckedCreateWithoutStreamInput> | StreamSongCreateWithoutStreamInput[] | StreamSongUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: StreamSongCreateOrConnectWithoutStreamInput | StreamSongCreateOrConnectWithoutStreamInput[]
    upsert?: StreamSongUpsertWithWhereUniqueWithoutStreamInput | StreamSongUpsertWithWhereUniqueWithoutStreamInput[]
    createMany?: StreamSongCreateManyStreamInputEnvelope
    set?: StreamSongWhereUniqueInput | StreamSongWhereUniqueInput[]
    disconnect?: StreamSongWhereUniqueInput | StreamSongWhereUniqueInput[]
    delete?: StreamSongWhereUniqueInput | StreamSongWhereUniqueInput[]
    connect?: StreamSongWhereUniqueInput | StreamSongWhereUniqueInput[]
    update?: StreamSongUpdateWithWhereUniqueWithoutStreamInput | StreamSongUpdateWithWhereUniqueWithoutStreamInput[]
    updateMany?: StreamSongUpdateManyWithWhereWithoutStreamInput | StreamSongUpdateManyWithWhereWithoutStreamInput[]
    deleteMany?: StreamSongScalarWhereInput | StreamSongScalarWhereInput[]
  }

  export type StreamCreateNestedOneWithoutSongsInput = {
    create?: XOR<StreamCreateWithoutSongsInput, StreamUncheckedCreateWithoutSongsInput>
    connectOrCreate?: StreamCreateOrConnectWithoutSongsInput
    connect?: StreamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStreamSongsInput = {
    create?: XOR<UserCreateWithoutStreamSongsInput, UserUncheckedCreateWithoutStreamSongsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreamSongsInput
    connect?: UserWhereUniqueInput
  }

  export type VoteCreateNestedManyWithoutSongInput = {
    create?: XOR<VoteCreateWithoutSongInput, VoteUncheckedCreateWithoutSongInput> | VoteCreateWithoutSongInput[] | VoteUncheckedCreateWithoutSongInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutSongInput | VoteCreateOrConnectWithoutSongInput[]
    createMany?: VoteCreateManySongInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<VoteCreateWithoutSongInput, VoteUncheckedCreateWithoutSongInput> | VoteCreateWithoutSongInput[] | VoteUncheckedCreateWithoutSongInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutSongInput | VoteCreateOrConnectWithoutSongInput[]
    createMany?: VoteCreateManySongInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type StreamUpdateOneRequiredWithoutSongsNestedInput = {
    create?: XOR<StreamCreateWithoutSongsInput, StreamUncheckedCreateWithoutSongsInput>
    connectOrCreate?: StreamCreateOrConnectWithoutSongsInput
    upsert?: StreamUpsertWithoutSongsInput
    connect?: StreamWhereUniqueInput
    update?: XOR<XOR<StreamUpdateToOneWithWhereWithoutSongsInput, StreamUpdateWithoutSongsInput>, StreamUncheckedUpdateWithoutSongsInput>
  }

  export type UserUpdateOneRequiredWithoutStreamSongsNestedInput = {
    create?: XOR<UserCreateWithoutStreamSongsInput, UserUncheckedCreateWithoutStreamSongsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreamSongsInput
    upsert?: UserUpsertWithoutStreamSongsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStreamSongsInput, UserUpdateWithoutStreamSongsInput>, UserUncheckedUpdateWithoutStreamSongsInput>
  }

  export type VoteUpdateManyWithoutSongNestedInput = {
    create?: XOR<VoteCreateWithoutSongInput, VoteUncheckedCreateWithoutSongInput> | VoteCreateWithoutSongInput[] | VoteUncheckedCreateWithoutSongInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutSongInput | VoteCreateOrConnectWithoutSongInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutSongInput | VoteUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: VoteCreateManySongInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutSongInput | VoteUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutSongInput | VoteUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<VoteCreateWithoutSongInput, VoteUncheckedCreateWithoutSongInput> | VoteCreateWithoutSongInput[] | VoteUncheckedCreateWithoutSongInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutSongInput | VoteCreateOrConnectWithoutSongInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutSongInput | VoteUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: VoteCreateManySongInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutSongInput | VoteUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutSongInput | VoteUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type StreamSongCreateNestedOneWithoutVotesInput = {
    create?: XOR<StreamSongCreateWithoutVotesInput, StreamSongUncheckedCreateWithoutVotesInput>
    connectOrCreate?: StreamSongCreateOrConnectWithoutVotesInput
    connect?: StreamSongWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVotesInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumVoteTypeFieldUpdateOperationsInput = {
    set?: $Enums.VoteType
  }

  export type StreamSongUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<StreamSongCreateWithoutVotesInput, StreamSongUncheckedCreateWithoutVotesInput>
    connectOrCreate?: StreamSongCreateOrConnectWithoutVotesInput
    upsert?: StreamSongUpsertWithoutVotesInput
    connect?: StreamSongWhereUniqueInput
    update?: XOR<XOR<StreamSongUpdateToOneWithWhereWithoutVotesInput, StreamSongUpdateWithoutVotesInput>, StreamSongUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    upsert?: UserUpsertWithoutVotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVotesInput, UserUpdateWithoutVotesInput>, UserUncheckedUpdateWithoutVotesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumVerificationCodeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationCodeType | EnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationCodeType[] | ListEnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationCodeType[] | ListEnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationCodeTypeFilter<$PrismaModel> | $Enums.VerificationCodeType
  }

  export type NestedEnumVerificationCodeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationCodeType | EnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationCodeType[] | ListEnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationCodeType[] | ListEnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationCodeTypeWithAggregatesFilter<$PrismaModel> | $Enums.VerificationCodeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationCodeTypeFilter<$PrismaModel>
    _max?: NestedEnumVerificationCodeTypeFilter<$PrismaModel>
  }

  export type NestedEnumVoteTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VoteType | EnumVoteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVoteTypeFilter<$PrismaModel> | $Enums.VoteType
  }

  export type NestedEnumVoteTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VoteType | EnumVoteTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVoteTypeWithAggregatesFilter<$PrismaModel> | $Enums.VoteType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVoteTypeFilter<$PrismaModel>
    _max?: NestedEnumVoteTypeFilter<$PrismaModel>
  }

  export type PlaylistCreateWithoutUserDetailsInput = {
    playlistName: string
    createdAt?: Date | string
    updateAt?: Date | string
    PlaylistSong?: PlaylistSongCreateNestedManyWithoutPlaylistDetailsInput
  }

  export type PlaylistUncheckedCreateWithoutUserDetailsInput = {
    id?: number
    playlistName: string
    createdAt?: Date | string
    updateAt?: Date | string
    PlaylistSong?: PlaylistSongUncheckedCreateNestedManyWithoutPlaylistDetailsInput
  }

  export type PlaylistCreateOrConnectWithoutUserDetailsInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutUserDetailsInput, PlaylistUncheckedCreateWithoutUserDetailsInput>
  }

  export type PlaylistCreateManyUserDetailsInputEnvelope = {
    data: PlaylistCreateManyUserDetailsInput | PlaylistCreateManyUserDetailsInput[]
    skipDuplicates?: boolean
  }

  export type starredSongCreateWithoutUserDetailsInput = {
    SongDetails: SongCreateNestedOneWithoutStarredSongsInput
  }

  export type starredSongUncheckedCreateWithoutUserDetailsInput = {
    id?: number
    songId: number
  }

  export type starredSongCreateOrConnectWithoutUserDetailsInput = {
    where: starredSongWhereUniqueInput
    create: XOR<starredSongCreateWithoutUserDetailsInput, starredSongUncheckedCreateWithoutUserDetailsInput>
  }

  export type starredSongCreateManyUserDetailsInputEnvelope = {
    data: starredSongCreateManyUserDetailsInput | starredSongCreateManyUserDetailsInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutUserDetailsInput = {
    startDate: Date | string
    endDate: Date | string
    transactionId: number
    packageDetails: PricingPackageCreateNestedOneWithoutSubscriptionInput
    PaymentTransaction?: PaymentTransactionCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutUserDetailsInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    packageId: number
    transactionId: number
    PaymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutUserDetailsInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserDetailsInput, SubscriptionUncheckedCreateWithoutUserDetailsInput>
  }

  export type SubscriptionCreateManyUserDetailsInputEnvelope = {
    data: SubscriptionCreateManyUserDetailsInput | SubscriptionCreateManyUserDetailsInput[]
    skipDuplicates?: boolean
  }

  export type PaymentTransactionCreateWithoutUserInput = {
    amount: number
    currency?: string
    paymentMethod: string
    status: string
    paymentProvider: string
    providerTransactionId: string
    createdAt?: Date | string
    package: PricingPackageCreateNestedOneWithoutPaymentTransactionInput
    subscription: SubscriptionCreateNestedOneWithoutPaymentTransactionInput
  }

  export type PaymentTransactionUncheckedCreateWithoutUserInput = {
    id?: number
    packageId: number
    subscriptionId: number
    amount: number
    currency?: string
    paymentMethod: string
    status: string
    paymentProvider: string
    providerTransactionId: string
    createdAt?: Date | string
  }

  export type PaymentTransactionCreateOrConnectWithoutUserInput = {
    where: PaymentTransactionWhereUniqueInput
    create: XOR<PaymentTransactionCreateWithoutUserInput, PaymentTransactionUncheckedCreateWithoutUserInput>
  }

  export type PaymentTransactionCreateManyUserInputEnvelope = {
    data: PaymentTransactionCreateManyUserInput | PaymentTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StreamCreateWithoutHostInput = {
    id?: string
    streamName: string
    createdAt?: Date | string
    active?: boolean
    songs?: StreamSongCreateNestedManyWithoutStreamInput
  }

  export type StreamUncheckedCreateWithoutHostInput = {
    id?: string
    streamName: string
    createdAt?: Date | string
    active?: boolean
    songs?: StreamSongUncheckedCreateNestedManyWithoutStreamInput
  }

  export type StreamCreateOrConnectWithoutHostInput = {
    where: StreamWhereUniqueInput
    create: XOR<StreamCreateWithoutHostInput, StreamUncheckedCreateWithoutHostInput>
  }

  export type StreamCreateManyHostInputEnvelope = {
    data: StreamCreateManyHostInput | StreamCreateManyHostInput[]
    skipDuplicates?: boolean
  }

  export type VoteCreateWithoutUserInput = {
    id?: string
    type: $Enums.VoteType
    song: StreamSongCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutUserInput = {
    id?: string
    songId: string
    type: $Enums.VoteType
  }

  export type VoteCreateOrConnectWithoutUserInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
  }

  export type VoteCreateManyUserInputEnvelope = {
    data: VoteCreateManyUserInput | VoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StreamSongCreateWithoutUserInput = {
    id?: string
    url: string
    title?: string | null
    addedAt?: Date | string
    stream: StreamCreateNestedOneWithoutSongsInput
    votes?: VoteCreateNestedManyWithoutSongInput
  }

  export type StreamSongUncheckedCreateWithoutUserInput = {
    id?: string
    url: string
    title?: string | null
    streamId: string
    addedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutSongInput
  }

  export type StreamSongCreateOrConnectWithoutUserInput = {
    where: StreamSongWhereUniqueInput
    create: XOR<StreamSongCreateWithoutUserInput, StreamSongUncheckedCreateWithoutUserInput>
  }

  export type StreamSongCreateManyUserInputEnvelope = {
    data: StreamSongCreateManyUserInput | StreamSongCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistUpsertWithWhereUniqueWithoutUserDetailsInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutUserDetailsInput, PlaylistUncheckedUpdateWithoutUserDetailsInput>
    create: XOR<PlaylistCreateWithoutUserDetailsInput, PlaylistUncheckedCreateWithoutUserDetailsInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutUserDetailsInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutUserDetailsInput, PlaylistUncheckedUpdateWithoutUserDetailsInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutUserDetailsInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutUserDetailsInput>
  }

  export type PlaylistScalarWhereInput = {
    AND?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    OR?: PlaylistScalarWhereInput[]
    NOT?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    id?: IntFilter<"Playlist"> | number
    playlistName?: StringFilter<"Playlist"> | string
    userId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updateAt?: DateTimeFilter<"Playlist"> | Date | string
  }

  export type starredSongUpsertWithWhereUniqueWithoutUserDetailsInput = {
    where: starredSongWhereUniqueInput
    update: XOR<starredSongUpdateWithoutUserDetailsInput, starredSongUncheckedUpdateWithoutUserDetailsInput>
    create: XOR<starredSongCreateWithoutUserDetailsInput, starredSongUncheckedCreateWithoutUserDetailsInput>
  }

  export type starredSongUpdateWithWhereUniqueWithoutUserDetailsInput = {
    where: starredSongWhereUniqueInput
    data: XOR<starredSongUpdateWithoutUserDetailsInput, starredSongUncheckedUpdateWithoutUserDetailsInput>
  }

  export type starredSongUpdateManyWithWhereWithoutUserDetailsInput = {
    where: starredSongScalarWhereInput
    data: XOR<starredSongUpdateManyMutationInput, starredSongUncheckedUpdateManyWithoutUserDetailsInput>
  }

  export type starredSongScalarWhereInput = {
    AND?: starredSongScalarWhereInput | starredSongScalarWhereInput[]
    OR?: starredSongScalarWhereInput[]
    NOT?: starredSongScalarWhereInput | starredSongScalarWhereInput[]
    id?: IntFilter<"starredSong"> | number
    userId?: StringFilter<"starredSong"> | string
    songId?: IntFilter<"starredSong"> | number
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutUserDetailsInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutUserDetailsInput, SubscriptionUncheckedUpdateWithoutUserDetailsInput>
    create: XOR<SubscriptionCreateWithoutUserDetailsInput, SubscriptionUncheckedCreateWithoutUserDetailsInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutUserDetailsInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutUserDetailsInput, SubscriptionUncheckedUpdateWithoutUserDetailsInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutUserDetailsInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutUserDetailsInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: IntFilter<"Subscription"> | number
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    packageId?: IntFilter<"Subscription"> | number
    userId?: StringFilter<"Subscription"> | string
    transactionId?: IntFilter<"Subscription"> | number
  }

  export type PaymentTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentTransactionWhereUniqueInput
    update: XOR<PaymentTransactionUpdateWithoutUserInput, PaymentTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentTransactionCreateWithoutUserInput, PaymentTransactionUncheckedCreateWithoutUserInput>
  }

  export type PaymentTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentTransactionWhereUniqueInput
    data: XOR<PaymentTransactionUpdateWithoutUserInput, PaymentTransactionUncheckedUpdateWithoutUserInput>
  }

  export type PaymentTransactionUpdateManyWithWhereWithoutUserInput = {
    where: PaymentTransactionScalarWhereInput
    data: XOR<PaymentTransactionUpdateManyMutationInput, PaymentTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentTransactionScalarWhereInput = {
    AND?: PaymentTransactionScalarWhereInput | PaymentTransactionScalarWhereInput[]
    OR?: PaymentTransactionScalarWhereInput[]
    NOT?: PaymentTransactionScalarWhereInput | PaymentTransactionScalarWhereInput[]
    id?: IntFilter<"PaymentTransaction"> | number
    userId?: StringFilter<"PaymentTransaction"> | string
    packageId?: IntFilter<"PaymentTransaction"> | number
    subscriptionId?: IntFilter<"PaymentTransaction"> | number
    amount?: FloatFilter<"PaymentTransaction"> | number
    currency?: StringFilter<"PaymentTransaction"> | string
    paymentMethod?: StringFilter<"PaymentTransaction"> | string
    status?: StringFilter<"PaymentTransaction"> | string
    paymentProvider?: StringFilter<"PaymentTransaction"> | string
    providerTransactionId?: StringFilter<"PaymentTransaction"> | string
    createdAt?: DateTimeFilter<"PaymentTransaction"> | Date | string
  }

  export type StreamUpsertWithWhereUniqueWithoutHostInput = {
    where: StreamWhereUniqueInput
    update: XOR<StreamUpdateWithoutHostInput, StreamUncheckedUpdateWithoutHostInput>
    create: XOR<StreamCreateWithoutHostInput, StreamUncheckedCreateWithoutHostInput>
  }

  export type StreamUpdateWithWhereUniqueWithoutHostInput = {
    where: StreamWhereUniqueInput
    data: XOR<StreamUpdateWithoutHostInput, StreamUncheckedUpdateWithoutHostInput>
  }

  export type StreamUpdateManyWithWhereWithoutHostInput = {
    where: StreamScalarWhereInput
    data: XOR<StreamUpdateManyMutationInput, StreamUncheckedUpdateManyWithoutHostInput>
  }

  export type StreamScalarWhereInput = {
    AND?: StreamScalarWhereInput | StreamScalarWhereInput[]
    OR?: StreamScalarWhereInput[]
    NOT?: StreamScalarWhereInput | StreamScalarWhereInput[]
    id?: StringFilter<"Stream"> | string
    streamName?: StringFilter<"Stream"> | string
    hostId?: StringFilter<"Stream"> | string
    createdAt?: DateTimeFilter<"Stream"> | Date | string
    active?: BoolFilter<"Stream"> | boolean
  }

  export type VoteUpsertWithWhereUniqueWithoutUserInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutUserInput, VoteUncheckedUpdateWithoutUserInput>
    create: XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutUserInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutUserInput, VoteUncheckedUpdateWithoutUserInput>
  }

  export type VoteUpdateManyWithWhereWithoutUserInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutUserInput>
  }

  export type VoteScalarWhereInput = {
    AND?: VoteScalarWhereInput | VoteScalarWhereInput[]
    OR?: VoteScalarWhereInput[]
    NOT?: VoteScalarWhereInput | VoteScalarWhereInput[]
    id?: StringFilter<"Vote"> | string
    songId?: StringFilter<"Vote"> | string
    userId?: StringFilter<"Vote"> | string
    type?: EnumVoteTypeFilter<"Vote"> | $Enums.VoteType
  }

  export type StreamSongUpsertWithWhereUniqueWithoutUserInput = {
    where: StreamSongWhereUniqueInput
    update: XOR<StreamSongUpdateWithoutUserInput, StreamSongUncheckedUpdateWithoutUserInput>
    create: XOR<StreamSongCreateWithoutUserInput, StreamSongUncheckedCreateWithoutUserInput>
  }

  export type StreamSongUpdateWithWhereUniqueWithoutUserInput = {
    where: StreamSongWhereUniqueInput
    data: XOR<StreamSongUpdateWithoutUserInput, StreamSongUncheckedUpdateWithoutUserInput>
  }

  export type StreamSongUpdateManyWithWhereWithoutUserInput = {
    where: StreamSongScalarWhereInput
    data: XOR<StreamSongUpdateManyMutationInput, StreamSongUncheckedUpdateManyWithoutUserInput>
  }

  export type StreamSongScalarWhereInput = {
    AND?: StreamSongScalarWhereInput | StreamSongScalarWhereInput[]
    OR?: StreamSongScalarWhereInput[]
    NOT?: StreamSongScalarWhereInput | StreamSongScalarWhereInput[]
    id?: StringFilter<"StreamSong"> | string
    url?: StringFilter<"StreamSong"> | string
    title?: StringNullableFilter<"StreamSong"> | string | null
    streamId?: StringFilter<"StreamSong"> | string
    userId?: StringFilter<"StreamSong"> | string
    addedAt?: DateTimeFilter<"StreamSong"> | Date | string
  }

  export type PlaylistSongCreateWithoutSongDetailsInput = {
    addedAt?: Date | string
    playlistDetails: PlaylistCreateNestedOneWithoutPlaylistSongInput
  }

  export type PlaylistSongUncheckedCreateWithoutSongDetailsInput = {
    id?: number
    playlistId: number
    addedAt?: Date | string
  }

  export type PlaylistSongCreateOrConnectWithoutSongDetailsInput = {
    where: PlaylistSongWhereUniqueInput
    create: XOR<PlaylistSongCreateWithoutSongDetailsInput, PlaylistSongUncheckedCreateWithoutSongDetailsInput>
  }

  export type PlaylistSongCreateManySongDetailsInputEnvelope = {
    data: PlaylistSongCreateManySongDetailsInput | PlaylistSongCreateManySongDetailsInput[]
    skipDuplicates?: boolean
  }

  export type AlbumSongCreateWithoutSongDetailsInput = {
    albumDetails: AlbumCreateNestedOneWithoutAlbumSongsInput
  }

  export type AlbumSongUncheckedCreateWithoutSongDetailsInput = {
    id?: number
    albumId: number
  }

  export type AlbumSongCreateOrConnectWithoutSongDetailsInput = {
    where: AlbumSongWhereUniqueInput
    create: XOR<AlbumSongCreateWithoutSongDetailsInput, AlbumSongUncheckedCreateWithoutSongDetailsInput>
  }

  export type AlbumSongCreateManySongDetailsInputEnvelope = {
    data: AlbumSongCreateManySongDetailsInput | AlbumSongCreateManySongDetailsInput[]
    skipDuplicates?: boolean
  }

  export type starredSongCreateWithoutSongDetailsInput = {
    userDetails: UserCreateNestedOneWithoutStarredSongsInput
  }

  export type starredSongUncheckedCreateWithoutSongDetailsInput = {
    id?: number
    userId: string
  }

  export type starredSongCreateOrConnectWithoutSongDetailsInput = {
    where: starredSongWhereUniqueInput
    create: XOR<starredSongCreateWithoutSongDetailsInput, starredSongUncheckedCreateWithoutSongDetailsInput>
  }

  export type starredSongCreateManySongDetailsInputEnvelope = {
    data: starredSongCreateManySongDetailsInput | starredSongCreateManySongDetailsInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistSongUpsertWithWhereUniqueWithoutSongDetailsInput = {
    where: PlaylistSongWhereUniqueInput
    update: XOR<PlaylistSongUpdateWithoutSongDetailsInput, PlaylistSongUncheckedUpdateWithoutSongDetailsInput>
    create: XOR<PlaylistSongCreateWithoutSongDetailsInput, PlaylistSongUncheckedCreateWithoutSongDetailsInput>
  }

  export type PlaylistSongUpdateWithWhereUniqueWithoutSongDetailsInput = {
    where: PlaylistSongWhereUniqueInput
    data: XOR<PlaylistSongUpdateWithoutSongDetailsInput, PlaylistSongUncheckedUpdateWithoutSongDetailsInput>
  }

  export type PlaylistSongUpdateManyWithWhereWithoutSongDetailsInput = {
    where: PlaylistSongScalarWhereInput
    data: XOR<PlaylistSongUpdateManyMutationInput, PlaylistSongUncheckedUpdateManyWithoutSongDetailsInput>
  }

  export type PlaylistSongScalarWhereInput = {
    AND?: PlaylistSongScalarWhereInput | PlaylistSongScalarWhereInput[]
    OR?: PlaylistSongScalarWhereInput[]
    NOT?: PlaylistSongScalarWhereInput | PlaylistSongScalarWhereInput[]
    id?: IntFilter<"PlaylistSong"> | number
    songId?: IntFilter<"PlaylistSong"> | number
    playlistId?: IntFilter<"PlaylistSong"> | number
    addedAt?: DateTimeFilter<"PlaylistSong"> | Date | string
  }

  export type AlbumSongUpsertWithWhereUniqueWithoutSongDetailsInput = {
    where: AlbumSongWhereUniqueInput
    update: XOR<AlbumSongUpdateWithoutSongDetailsInput, AlbumSongUncheckedUpdateWithoutSongDetailsInput>
    create: XOR<AlbumSongCreateWithoutSongDetailsInput, AlbumSongUncheckedCreateWithoutSongDetailsInput>
  }

  export type AlbumSongUpdateWithWhereUniqueWithoutSongDetailsInput = {
    where: AlbumSongWhereUniqueInput
    data: XOR<AlbumSongUpdateWithoutSongDetailsInput, AlbumSongUncheckedUpdateWithoutSongDetailsInput>
  }

  export type AlbumSongUpdateManyWithWhereWithoutSongDetailsInput = {
    where: AlbumSongScalarWhereInput
    data: XOR<AlbumSongUpdateManyMutationInput, AlbumSongUncheckedUpdateManyWithoutSongDetailsInput>
  }

  export type AlbumSongScalarWhereInput = {
    AND?: AlbumSongScalarWhereInput | AlbumSongScalarWhereInput[]
    OR?: AlbumSongScalarWhereInput[]
    NOT?: AlbumSongScalarWhereInput | AlbumSongScalarWhereInput[]
    id?: IntFilter<"AlbumSong"> | number
    albumId?: IntFilter<"AlbumSong"> | number
    songId?: IntFilter<"AlbumSong"> | number
  }

  export type starredSongUpsertWithWhereUniqueWithoutSongDetailsInput = {
    where: starredSongWhereUniqueInput
    update: XOR<starredSongUpdateWithoutSongDetailsInput, starredSongUncheckedUpdateWithoutSongDetailsInput>
    create: XOR<starredSongCreateWithoutSongDetailsInput, starredSongUncheckedCreateWithoutSongDetailsInput>
  }

  export type starredSongUpdateWithWhereUniqueWithoutSongDetailsInput = {
    where: starredSongWhereUniqueInput
    data: XOR<starredSongUpdateWithoutSongDetailsInput, starredSongUncheckedUpdateWithoutSongDetailsInput>
  }

  export type starredSongUpdateManyWithWhereWithoutSongDetailsInput = {
    where: starredSongScalarWhereInput
    data: XOR<starredSongUpdateManyMutationInput, starredSongUncheckedUpdateManyWithoutSongDetailsInput>
  }

  export type AlbumSongCreateWithoutAlbumDetailsInput = {
    songDetails: SongCreateNestedOneWithoutAlbumSongsInput
  }

  export type AlbumSongUncheckedCreateWithoutAlbumDetailsInput = {
    id?: number
    songId: number
  }

  export type AlbumSongCreateOrConnectWithoutAlbumDetailsInput = {
    where: AlbumSongWhereUniqueInput
    create: XOR<AlbumSongCreateWithoutAlbumDetailsInput, AlbumSongUncheckedCreateWithoutAlbumDetailsInput>
  }

  export type AlbumSongCreateManyAlbumDetailsInputEnvelope = {
    data: AlbumSongCreateManyAlbumDetailsInput | AlbumSongCreateManyAlbumDetailsInput[]
    skipDuplicates?: boolean
  }

  export type AlbumSongUpsertWithWhereUniqueWithoutAlbumDetailsInput = {
    where: AlbumSongWhereUniqueInput
    update: XOR<AlbumSongUpdateWithoutAlbumDetailsInput, AlbumSongUncheckedUpdateWithoutAlbumDetailsInput>
    create: XOR<AlbumSongCreateWithoutAlbumDetailsInput, AlbumSongUncheckedCreateWithoutAlbumDetailsInput>
  }

  export type AlbumSongUpdateWithWhereUniqueWithoutAlbumDetailsInput = {
    where: AlbumSongWhereUniqueInput
    data: XOR<AlbumSongUpdateWithoutAlbumDetailsInput, AlbumSongUncheckedUpdateWithoutAlbumDetailsInput>
  }

  export type AlbumSongUpdateManyWithWhereWithoutAlbumDetailsInput = {
    where: AlbumSongScalarWhereInput
    data: XOR<AlbumSongUpdateManyMutationInput, AlbumSongUncheckedUpdateManyWithoutAlbumDetailsInput>
  }

  export type UserCreateWithoutPlaylistInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password?: string | null
    socialLogin?: boolean
    role: $Enums.UserRole
    isSubscribed: boolean
    avatarUrl?: string | null
    publicId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    starredSongs?: starredSongCreateNestedManyWithoutUserDetailsInput
    Subscription?: SubscriptionCreateNestedManyWithoutUserDetailsInput
    PaymentTransaction?: PaymentTransactionCreateNestedManyWithoutUserInput
    Streams?: StreamCreateNestedManyWithoutHostInput
    Votes?: VoteCreateNestedManyWithoutUserInput
    StreamSongs?: StreamSongCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlaylistInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password?: string | null
    socialLogin?: boolean
    role: $Enums.UserRole
    isSubscribed: boolean
    avatarUrl?: string | null
    publicId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    starredSongs?: starredSongUncheckedCreateNestedManyWithoutUserDetailsInput
    Subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserDetailsInput
    PaymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    Streams?: StreamUncheckedCreateNestedManyWithoutHostInput
    Votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    StreamSongs?: StreamSongUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlaylistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistSongCreateWithoutPlaylistDetailsInput = {
    addedAt?: Date | string
    songDetails: SongCreateNestedOneWithoutPlaylistSongInput
  }

  export type PlaylistSongUncheckedCreateWithoutPlaylistDetailsInput = {
    id?: number
    songId: number
    addedAt?: Date | string
  }

  export type PlaylistSongCreateOrConnectWithoutPlaylistDetailsInput = {
    where: PlaylistSongWhereUniqueInput
    create: XOR<PlaylistSongCreateWithoutPlaylistDetailsInput, PlaylistSongUncheckedCreateWithoutPlaylistDetailsInput>
  }

  export type PlaylistSongCreateManyPlaylistDetailsInputEnvelope = {
    data: PlaylistSongCreateManyPlaylistDetailsInput | PlaylistSongCreateManyPlaylistDetailsInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPlaylistInput = {
    update: XOR<UserUpdateWithoutPlaylistInput, UserUncheckedUpdateWithoutPlaylistInput>
    create: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlaylistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlaylistInput, UserUncheckedUpdateWithoutPlaylistInput>
  }

  export type UserUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    socialLogin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    starredSongs?: starredSongUpdateManyWithoutUserDetailsNestedInput
    Subscription?: SubscriptionUpdateManyWithoutUserDetailsNestedInput
    PaymentTransaction?: PaymentTransactionUpdateManyWithoutUserNestedInput
    Streams?: StreamUpdateManyWithoutHostNestedInput
    Votes?: VoteUpdateManyWithoutUserNestedInput
    StreamSongs?: StreamSongUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    socialLogin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    starredSongs?: starredSongUncheckedUpdateManyWithoutUserDetailsNestedInput
    Subscription?: SubscriptionUncheckedUpdateManyWithoutUserDetailsNestedInput
    PaymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    Streams?: StreamUncheckedUpdateManyWithoutHostNestedInput
    Votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    StreamSongs?: StreamSongUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlaylistSongUpsertWithWhereUniqueWithoutPlaylistDetailsInput = {
    where: PlaylistSongWhereUniqueInput
    update: XOR<PlaylistSongUpdateWithoutPlaylistDetailsInput, PlaylistSongUncheckedUpdateWithoutPlaylistDetailsInput>
    create: XOR<PlaylistSongCreateWithoutPlaylistDetailsInput, PlaylistSongUncheckedCreateWithoutPlaylistDetailsInput>
  }

  export type PlaylistSongUpdateWithWhereUniqueWithoutPlaylistDetailsInput = {
    where: PlaylistSongWhereUniqueInput
    data: XOR<PlaylistSongUpdateWithoutPlaylistDetailsInput, PlaylistSongUncheckedUpdateWithoutPlaylistDetailsInput>
  }

  export type PlaylistSongUpdateManyWithWhereWithoutPlaylistDetailsInput = {
    where: PlaylistSongScalarWhereInput
    data: XOR<PlaylistSongUpdateManyMutationInput, PlaylistSongUncheckedUpdateManyWithoutPlaylistDetailsInput>
  }

  export type SongCreateWithoutPlaylistSongInput = {
    title: string
    artist: string
    duration: number
    lyrics: string
    songUrl: string
    coverImage: string
    createdAt?: Date | string
    updateAt?: Date | string
    AlbumSongs?: AlbumSongCreateNestedManyWithoutSongDetailsInput
    starredSongs?: starredSongCreateNestedManyWithoutSongDetailsInput
  }

  export type SongUncheckedCreateWithoutPlaylistSongInput = {
    id?: number
    title: string
    artist: string
    duration: number
    lyrics: string
    songUrl: string
    coverImage: string
    createdAt?: Date | string
    updateAt?: Date | string
    AlbumSongs?: AlbumSongUncheckedCreateNestedManyWithoutSongDetailsInput
    starredSongs?: starredSongUncheckedCreateNestedManyWithoutSongDetailsInput
  }

  export type SongCreateOrConnectWithoutPlaylistSongInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutPlaylistSongInput, SongUncheckedCreateWithoutPlaylistSongInput>
  }

  export type PlaylistCreateWithoutPlaylistSongInput = {
    playlistName: string
    createdAt?: Date | string
    updateAt?: Date | string
    userDetails: UserCreateNestedOneWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutPlaylistSongInput = {
    id?: number
    playlistName: string
    userId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type PlaylistCreateOrConnectWithoutPlaylistSongInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutPlaylistSongInput, PlaylistUncheckedCreateWithoutPlaylistSongInput>
  }

  export type SongUpsertWithoutPlaylistSongInput = {
    update: XOR<SongUpdateWithoutPlaylistSongInput, SongUncheckedUpdateWithoutPlaylistSongInput>
    create: XOR<SongCreateWithoutPlaylistSongInput, SongUncheckedCreateWithoutPlaylistSongInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutPlaylistSongInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutPlaylistSongInput, SongUncheckedUpdateWithoutPlaylistSongInput>
  }

  export type SongUpdateWithoutPlaylistSongInput = {
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    lyrics?: StringFieldUpdateOperationsInput | string
    songUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AlbumSongs?: AlbumSongUpdateManyWithoutSongDetailsNestedInput
    starredSongs?: starredSongUpdateManyWithoutSongDetailsNestedInput
  }

  export type SongUncheckedUpdateWithoutPlaylistSongInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    lyrics?: StringFieldUpdateOperationsInput | string
    songUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AlbumSongs?: AlbumSongUncheckedUpdateManyWithoutSongDetailsNestedInput
    starredSongs?: starredSongUncheckedUpdateManyWithoutSongDetailsNestedInput
  }

  export type PlaylistUpsertWithoutPlaylistSongInput = {
    update: XOR<PlaylistUpdateWithoutPlaylistSongInput, PlaylistUncheckedUpdateWithoutPlaylistSongInput>
    create: XOR<PlaylistCreateWithoutPlaylistSongInput, PlaylistUncheckedCreateWithoutPlaylistSongInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutPlaylistSongInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutPlaylistSongInput, PlaylistUncheckedUpdateWithoutPlaylistSongInput>
  }

  export type PlaylistUpdateWithoutPlaylistSongInput = {
    playlistName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userDetails?: UserUpdateOneRequiredWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutPlaylistSongInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlistName?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumCreateWithoutAlbumSongsInput = {
    albumName: string
    artist: string
    coverImage: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type AlbumUncheckedCreateWithoutAlbumSongsInput = {
    id?: number
    albumName: string
    artist: string
    coverImage: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type AlbumCreateOrConnectWithoutAlbumSongsInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutAlbumSongsInput, AlbumUncheckedCreateWithoutAlbumSongsInput>
  }

  export type SongCreateWithoutAlbumSongsInput = {
    title: string
    artist: string
    duration: number
    lyrics: string
    songUrl: string
    coverImage: string
    createdAt?: Date | string
    updateAt?: Date | string
    PlaylistSong?: PlaylistSongCreateNestedManyWithoutSongDetailsInput
    starredSongs?: starredSongCreateNestedManyWithoutSongDetailsInput
  }

  export type SongUncheckedCreateWithoutAlbumSongsInput = {
    id?: number
    title: string
    artist: string
    duration: number
    lyrics: string
    songUrl: string
    coverImage: string
    createdAt?: Date | string
    updateAt?: Date | string
    PlaylistSong?: PlaylistSongUncheckedCreateNestedManyWithoutSongDetailsInput
    starredSongs?: starredSongUncheckedCreateNestedManyWithoutSongDetailsInput
  }

  export type SongCreateOrConnectWithoutAlbumSongsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutAlbumSongsInput, SongUncheckedCreateWithoutAlbumSongsInput>
  }

  export type AlbumUpsertWithoutAlbumSongsInput = {
    update: XOR<AlbumUpdateWithoutAlbumSongsInput, AlbumUncheckedUpdateWithoutAlbumSongsInput>
    create: XOR<AlbumCreateWithoutAlbumSongsInput, AlbumUncheckedCreateWithoutAlbumSongsInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutAlbumSongsInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutAlbumSongsInput, AlbumUncheckedUpdateWithoutAlbumSongsInput>
  }

  export type AlbumUpdateWithoutAlbumSongsInput = {
    albumName?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumUncheckedUpdateWithoutAlbumSongsInput = {
    id?: IntFieldUpdateOperationsInput | number
    albumName?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUpsertWithoutAlbumSongsInput = {
    update: XOR<SongUpdateWithoutAlbumSongsInput, SongUncheckedUpdateWithoutAlbumSongsInput>
    create: XOR<SongCreateWithoutAlbumSongsInput, SongUncheckedCreateWithoutAlbumSongsInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutAlbumSongsInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutAlbumSongsInput, SongUncheckedUpdateWithoutAlbumSongsInput>
  }

  export type SongUpdateWithoutAlbumSongsInput = {
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    lyrics?: StringFieldUpdateOperationsInput | string
    songUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlaylistSong?: PlaylistSongUpdateManyWithoutSongDetailsNestedInput
    starredSongs?: starredSongUpdateManyWithoutSongDetailsNestedInput
  }

  export type SongUncheckedUpdateWithoutAlbumSongsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    lyrics?: StringFieldUpdateOperationsInput | string
    songUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlaylistSong?: PlaylistSongUncheckedUpdateManyWithoutSongDetailsNestedInput
    starredSongs?: starredSongUncheckedUpdateManyWithoutSongDetailsNestedInput
  }

  export type UserCreateWithoutStarredSongsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password?: string | null
    socialLogin?: boolean
    role: $Enums.UserRole
    isSubscribed: boolean
    avatarUrl?: string | null
    publicId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    Playlist?: PlaylistCreateNestedManyWithoutUserDetailsInput
    Subscription?: SubscriptionCreateNestedManyWithoutUserDetailsInput
    PaymentTransaction?: PaymentTransactionCreateNestedManyWithoutUserInput
    Streams?: StreamCreateNestedManyWithoutHostInput
    Votes?: VoteCreateNestedManyWithoutUserInput
    StreamSongs?: StreamSongCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStarredSongsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password?: string | null
    socialLogin?: boolean
    role: $Enums.UserRole
    isSubscribed: boolean
    avatarUrl?: string | null
    publicId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutUserDetailsInput
    Subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserDetailsInput
    PaymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    Streams?: StreamUncheckedCreateNestedManyWithoutHostInput
    Votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    StreamSongs?: StreamSongUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStarredSongsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStarredSongsInput, UserUncheckedCreateWithoutStarredSongsInput>
  }

  export type SongCreateWithoutStarredSongsInput = {
    title: string
    artist: string
    duration: number
    lyrics: string
    songUrl: string
    coverImage: string
    createdAt?: Date | string
    updateAt?: Date | string
    PlaylistSong?: PlaylistSongCreateNestedManyWithoutSongDetailsInput
    AlbumSongs?: AlbumSongCreateNestedManyWithoutSongDetailsInput
  }

  export type SongUncheckedCreateWithoutStarredSongsInput = {
    id?: number
    title: string
    artist: string
    duration: number
    lyrics: string
    songUrl: string
    coverImage: string
    createdAt?: Date | string
    updateAt?: Date | string
    PlaylistSong?: PlaylistSongUncheckedCreateNestedManyWithoutSongDetailsInput
    AlbumSongs?: AlbumSongUncheckedCreateNestedManyWithoutSongDetailsInput
  }

  export type SongCreateOrConnectWithoutStarredSongsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutStarredSongsInput, SongUncheckedCreateWithoutStarredSongsInput>
  }

  export type UserUpsertWithoutStarredSongsInput = {
    update: XOR<UserUpdateWithoutStarredSongsInput, UserUncheckedUpdateWithoutStarredSongsInput>
    create: XOR<UserCreateWithoutStarredSongsInput, UserUncheckedCreateWithoutStarredSongsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStarredSongsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStarredSongsInput, UserUncheckedUpdateWithoutStarredSongsInput>
  }

  export type UserUpdateWithoutStarredSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    socialLogin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Playlist?: PlaylistUpdateManyWithoutUserDetailsNestedInput
    Subscription?: SubscriptionUpdateManyWithoutUserDetailsNestedInput
    PaymentTransaction?: PaymentTransactionUpdateManyWithoutUserNestedInput
    Streams?: StreamUpdateManyWithoutHostNestedInput
    Votes?: VoteUpdateManyWithoutUserNestedInput
    StreamSongs?: StreamSongUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStarredSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    socialLogin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Playlist?: PlaylistUncheckedUpdateManyWithoutUserDetailsNestedInput
    Subscription?: SubscriptionUncheckedUpdateManyWithoutUserDetailsNestedInput
    PaymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    Streams?: StreamUncheckedUpdateManyWithoutHostNestedInput
    Votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    StreamSongs?: StreamSongUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SongUpsertWithoutStarredSongsInput = {
    update: XOR<SongUpdateWithoutStarredSongsInput, SongUncheckedUpdateWithoutStarredSongsInput>
    create: XOR<SongCreateWithoutStarredSongsInput, SongUncheckedCreateWithoutStarredSongsInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutStarredSongsInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutStarredSongsInput, SongUncheckedUpdateWithoutStarredSongsInput>
  }

  export type SongUpdateWithoutStarredSongsInput = {
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    lyrics?: StringFieldUpdateOperationsInput | string
    songUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlaylistSong?: PlaylistSongUpdateManyWithoutSongDetailsNestedInput
    AlbumSongs?: AlbumSongUpdateManyWithoutSongDetailsNestedInput
  }

  export type SongUncheckedUpdateWithoutStarredSongsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    lyrics?: StringFieldUpdateOperationsInput | string
    songUrl?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlaylistSong?: PlaylistSongUncheckedUpdateManyWithoutSongDetailsNestedInput
    AlbumSongs?: AlbumSongUncheckedUpdateManyWithoutSongDetailsNestedInput
  }

  export type SubscriptionCreateWithoutPackageDetailsInput = {
    startDate: Date | string
    endDate: Date | string
    transactionId: number
    userDetails: UserCreateNestedOneWithoutSubscriptionInput
    PaymentTransaction?: PaymentTransactionCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutPackageDetailsInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    userId: string
    transactionId: number
    PaymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutPackageDetailsInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPackageDetailsInput, SubscriptionUncheckedCreateWithoutPackageDetailsInput>
  }

  export type SubscriptionCreateManyPackageDetailsInputEnvelope = {
    data: SubscriptionCreateManyPackageDetailsInput | SubscriptionCreateManyPackageDetailsInput[]
    skipDuplicates?: boolean
  }

  export type PaymentTransactionCreateWithoutPackageInput = {
    amount: number
    currency?: string
    paymentMethod: string
    status: string
    paymentProvider: string
    providerTransactionId: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentTransactionInput
    subscription: SubscriptionCreateNestedOneWithoutPaymentTransactionInput
  }

  export type PaymentTransactionUncheckedCreateWithoutPackageInput = {
    id?: number
    userId: string
    subscriptionId: number
    amount: number
    currency?: string
    paymentMethod: string
    status: string
    paymentProvider: string
    providerTransactionId: string
    createdAt?: Date | string
  }

  export type PaymentTransactionCreateOrConnectWithoutPackageInput = {
    where: PaymentTransactionWhereUniqueInput
    create: XOR<PaymentTransactionCreateWithoutPackageInput, PaymentTransactionUncheckedCreateWithoutPackageInput>
  }

  export type PaymentTransactionCreateManyPackageInputEnvelope = {
    data: PaymentTransactionCreateManyPackageInput | PaymentTransactionCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutPackageDetailsInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutPackageDetailsInput, SubscriptionUncheckedUpdateWithoutPackageDetailsInput>
    create: XOR<SubscriptionCreateWithoutPackageDetailsInput, SubscriptionUncheckedCreateWithoutPackageDetailsInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutPackageDetailsInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutPackageDetailsInput, SubscriptionUncheckedUpdateWithoutPackageDetailsInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutPackageDetailsInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutPackageDetailsInput>
  }

  export type PaymentTransactionUpsertWithWhereUniqueWithoutPackageInput = {
    where: PaymentTransactionWhereUniqueInput
    update: XOR<PaymentTransactionUpdateWithoutPackageInput, PaymentTransactionUncheckedUpdateWithoutPackageInput>
    create: XOR<PaymentTransactionCreateWithoutPackageInput, PaymentTransactionUncheckedCreateWithoutPackageInput>
  }

  export type PaymentTransactionUpdateWithWhereUniqueWithoutPackageInput = {
    where: PaymentTransactionWhereUniqueInput
    data: XOR<PaymentTransactionUpdateWithoutPackageInput, PaymentTransactionUncheckedUpdateWithoutPackageInput>
  }

  export type PaymentTransactionUpdateManyWithWhereWithoutPackageInput = {
    where: PaymentTransactionScalarWhereInput
    data: XOR<PaymentTransactionUpdateManyMutationInput, PaymentTransactionUncheckedUpdateManyWithoutPackageInput>
  }

  export type UserCreateWithoutSubscriptionInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password?: string | null
    socialLogin?: boolean
    role: $Enums.UserRole
    isSubscribed: boolean
    avatarUrl?: string | null
    publicId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    Playlist?: PlaylistCreateNestedManyWithoutUserDetailsInput
    starredSongs?: starredSongCreateNestedManyWithoutUserDetailsInput
    PaymentTransaction?: PaymentTransactionCreateNestedManyWithoutUserInput
    Streams?: StreamCreateNestedManyWithoutHostInput
    Votes?: VoteCreateNestedManyWithoutUserInput
    StreamSongs?: StreamSongCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password?: string | null
    socialLogin?: boolean
    role: $Enums.UserRole
    isSubscribed: boolean
    avatarUrl?: string | null
    publicId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutUserDetailsInput
    starredSongs?: starredSongUncheckedCreateNestedManyWithoutUserDetailsInput
    PaymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    Streams?: StreamUncheckedCreateNestedManyWithoutHostInput
    Votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    StreamSongs?: StreamSongUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type PricingPackageCreateWithoutSubscriptionInput = {
    packageName: string
    price: number
    durationMonth: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PaymentTransaction?: PaymentTransactionCreateNestedManyWithoutPackageInput
  }

  export type PricingPackageUncheckedCreateWithoutSubscriptionInput = {
    id?: number
    packageName: string
    price: number
    durationMonth: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PaymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PricingPackageCreateOrConnectWithoutSubscriptionInput = {
    where: PricingPackageWhereUniqueInput
    create: XOR<PricingPackageCreateWithoutSubscriptionInput, PricingPackageUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentTransactionCreateWithoutSubscriptionInput = {
    amount: number
    currency?: string
    paymentMethod: string
    status: string
    paymentProvider: string
    providerTransactionId: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentTransactionInput
    package: PricingPackageCreateNestedOneWithoutPaymentTransactionInput
  }

  export type PaymentTransactionUncheckedCreateWithoutSubscriptionInput = {
    id?: number
    userId: string
    packageId: number
    amount: number
    currency?: string
    paymentMethod: string
    status: string
    paymentProvider: string
    providerTransactionId: string
    createdAt?: Date | string
  }

  export type PaymentTransactionCreateOrConnectWithoutSubscriptionInput = {
    where: PaymentTransactionWhereUniqueInput
    create: XOR<PaymentTransactionCreateWithoutSubscriptionInput, PaymentTransactionUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentTransactionCreateManySubscriptionInputEnvelope = {
    data: PaymentTransactionCreateManySubscriptionInput | PaymentTransactionCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    socialLogin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Playlist?: PlaylistUpdateManyWithoutUserDetailsNestedInput
    starredSongs?: starredSongUpdateManyWithoutUserDetailsNestedInput
    PaymentTransaction?: PaymentTransactionUpdateManyWithoutUserNestedInput
    Streams?: StreamUpdateManyWithoutHostNestedInput
    Votes?: VoteUpdateManyWithoutUserNestedInput
    StreamSongs?: StreamSongUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    socialLogin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Playlist?: PlaylistUncheckedUpdateManyWithoutUserDetailsNestedInput
    starredSongs?: starredSongUncheckedUpdateManyWithoutUserDetailsNestedInput
    PaymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    Streams?: StreamUncheckedUpdateManyWithoutHostNestedInput
    Votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    StreamSongs?: StreamSongUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PricingPackageUpsertWithoutSubscriptionInput = {
    update: XOR<PricingPackageUpdateWithoutSubscriptionInput, PricingPackageUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<PricingPackageCreateWithoutSubscriptionInput, PricingPackageUncheckedCreateWithoutSubscriptionInput>
    where?: PricingPackageWhereInput
  }

  export type PricingPackageUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: PricingPackageWhereInput
    data: XOR<PricingPackageUpdateWithoutSubscriptionInput, PricingPackageUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PricingPackageUpdateWithoutSubscriptionInput = {
    packageName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    durationMonth?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PaymentTransaction?: PaymentTransactionUpdateManyWithoutPackageNestedInput
  }

  export type PricingPackageUncheckedUpdateWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    durationMonth?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PaymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type PaymentTransactionUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentTransactionWhereUniqueInput
    update: XOR<PaymentTransactionUpdateWithoutSubscriptionInput, PaymentTransactionUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<PaymentTransactionCreateWithoutSubscriptionInput, PaymentTransactionUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentTransactionUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentTransactionWhereUniqueInput
    data: XOR<PaymentTransactionUpdateWithoutSubscriptionInput, PaymentTransactionUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PaymentTransactionUpdateManyWithWhereWithoutSubscriptionInput = {
    where: PaymentTransactionScalarWhereInput
    data: XOR<PaymentTransactionUpdateManyMutationInput, PaymentTransactionUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type UserCreateWithoutPaymentTransactionInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password?: string | null
    socialLogin?: boolean
    role: $Enums.UserRole
    isSubscribed: boolean
    avatarUrl?: string | null
    publicId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    Playlist?: PlaylistCreateNestedManyWithoutUserDetailsInput
    starredSongs?: starredSongCreateNestedManyWithoutUserDetailsInput
    Subscription?: SubscriptionCreateNestedManyWithoutUserDetailsInput
    Streams?: StreamCreateNestedManyWithoutHostInput
    Votes?: VoteCreateNestedManyWithoutUserInput
    StreamSongs?: StreamSongCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentTransactionInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password?: string | null
    socialLogin?: boolean
    role: $Enums.UserRole
    isSubscribed: boolean
    avatarUrl?: string | null
    publicId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutUserDetailsInput
    starredSongs?: starredSongUncheckedCreateNestedManyWithoutUserDetailsInput
    Subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserDetailsInput
    Streams?: StreamUncheckedCreateNestedManyWithoutHostInput
    Votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    StreamSongs?: StreamSongUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentTransactionInput, UserUncheckedCreateWithoutPaymentTransactionInput>
  }

  export type PricingPackageCreateWithoutPaymentTransactionInput = {
    packageName: string
    price: number
    durationMonth: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Subscription?: SubscriptionCreateNestedManyWithoutPackageDetailsInput
  }

  export type PricingPackageUncheckedCreateWithoutPaymentTransactionInput = {
    id?: number
    packageName: string
    price: number
    durationMonth: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Subscription?: SubscriptionUncheckedCreateNestedManyWithoutPackageDetailsInput
  }

  export type PricingPackageCreateOrConnectWithoutPaymentTransactionInput = {
    where: PricingPackageWhereUniqueInput
    create: XOR<PricingPackageCreateWithoutPaymentTransactionInput, PricingPackageUncheckedCreateWithoutPaymentTransactionInput>
  }

  export type SubscriptionCreateWithoutPaymentTransactionInput = {
    startDate: Date | string
    endDate: Date | string
    transactionId: number
    userDetails: UserCreateNestedOneWithoutSubscriptionInput
    packageDetails: PricingPackageCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutPaymentTransactionInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    packageId: number
    userId: string
    transactionId: number
  }

  export type SubscriptionCreateOrConnectWithoutPaymentTransactionInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPaymentTransactionInput, SubscriptionUncheckedCreateWithoutPaymentTransactionInput>
  }

  export type UserUpsertWithoutPaymentTransactionInput = {
    update: XOR<UserUpdateWithoutPaymentTransactionInput, UserUncheckedUpdateWithoutPaymentTransactionInput>
    create: XOR<UserCreateWithoutPaymentTransactionInput, UserUncheckedCreateWithoutPaymentTransactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentTransactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentTransactionInput, UserUncheckedUpdateWithoutPaymentTransactionInput>
  }

  export type UserUpdateWithoutPaymentTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    socialLogin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Playlist?: PlaylistUpdateManyWithoutUserDetailsNestedInput
    starredSongs?: starredSongUpdateManyWithoutUserDetailsNestedInput
    Subscription?: SubscriptionUpdateManyWithoutUserDetailsNestedInput
    Streams?: StreamUpdateManyWithoutHostNestedInput
    Votes?: VoteUpdateManyWithoutUserNestedInput
    StreamSongs?: StreamSongUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    socialLogin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Playlist?: PlaylistUncheckedUpdateManyWithoutUserDetailsNestedInput
    starredSongs?: starredSongUncheckedUpdateManyWithoutUserDetailsNestedInput
    Subscription?: SubscriptionUncheckedUpdateManyWithoutUserDetailsNestedInput
    Streams?: StreamUncheckedUpdateManyWithoutHostNestedInput
    Votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    StreamSongs?: StreamSongUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PricingPackageUpsertWithoutPaymentTransactionInput = {
    update: XOR<PricingPackageUpdateWithoutPaymentTransactionInput, PricingPackageUncheckedUpdateWithoutPaymentTransactionInput>
    create: XOR<PricingPackageCreateWithoutPaymentTransactionInput, PricingPackageUncheckedCreateWithoutPaymentTransactionInput>
    where?: PricingPackageWhereInput
  }

  export type PricingPackageUpdateToOneWithWhereWithoutPaymentTransactionInput = {
    where?: PricingPackageWhereInput
    data: XOR<PricingPackageUpdateWithoutPaymentTransactionInput, PricingPackageUncheckedUpdateWithoutPaymentTransactionInput>
  }

  export type PricingPackageUpdateWithoutPaymentTransactionInput = {
    packageName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    durationMonth?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscription?: SubscriptionUpdateManyWithoutPackageDetailsNestedInput
  }

  export type PricingPackageUncheckedUpdateWithoutPaymentTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    durationMonth?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Subscription?: SubscriptionUncheckedUpdateManyWithoutPackageDetailsNestedInput
  }

  export type SubscriptionUpsertWithoutPaymentTransactionInput = {
    update: XOR<SubscriptionUpdateWithoutPaymentTransactionInput, SubscriptionUncheckedUpdateWithoutPaymentTransactionInput>
    create: XOR<SubscriptionCreateWithoutPaymentTransactionInput, SubscriptionUncheckedCreateWithoutPaymentTransactionInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutPaymentTransactionInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutPaymentTransactionInput, SubscriptionUncheckedUpdateWithoutPaymentTransactionInput>
  }

  export type SubscriptionUpdateWithoutPaymentTransactionInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: IntFieldUpdateOperationsInput | number
    userDetails?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
    packageDetails?: PricingPackageUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPaymentTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    packageId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    transactionId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutStreamsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password?: string | null
    socialLogin?: boolean
    role: $Enums.UserRole
    isSubscribed: boolean
    avatarUrl?: string | null
    publicId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    Playlist?: PlaylistCreateNestedManyWithoutUserDetailsInput
    starredSongs?: starredSongCreateNestedManyWithoutUserDetailsInput
    Subscription?: SubscriptionCreateNestedManyWithoutUserDetailsInput
    PaymentTransaction?: PaymentTransactionCreateNestedManyWithoutUserInput
    Votes?: VoteCreateNestedManyWithoutUserInput
    StreamSongs?: StreamSongCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStreamsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password?: string | null
    socialLogin?: boolean
    role: $Enums.UserRole
    isSubscribed: boolean
    avatarUrl?: string | null
    publicId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutUserDetailsInput
    starredSongs?: starredSongUncheckedCreateNestedManyWithoutUserDetailsInput
    Subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserDetailsInput
    PaymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    Votes?: VoteUncheckedCreateNestedManyWithoutUserInput
    StreamSongs?: StreamSongUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStreamsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStreamsInput, UserUncheckedCreateWithoutStreamsInput>
  }

  export type StreamSongCreateWithoutStreamInput = {
    id?: string
    url: string
    title?: string | null
    addedAt?: Date | string
    User: UserCreateNestedOneWithoutStreamSongsInput
    votes?: VoteCreateNestedManyWithoutSongInput
  }

  export type StreamSongUncheckedCreateWithoutStreamInput = {
    id?: string
    url: string
    title?: string | null
    userId: string
    addedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutSongInput
  }

  export type StreamSongCreateOrConnectWithoutStreamInput = {
    where: StreamSongWhereUniqueInput
    create: XOR<StreamSongCreateWithoutStreamInput, StreamSongUncheckedCreateWithoutStreamInput>
  }

  export type StreamSongCreateManyStreamInputEnvelope = {
    data: StreamSongCreateManyStreamInput | StreamSongCreateManyStreamInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStreamsInput = {
    update: XOR<UserUpdateWithoutStreamsInput, UserUncheckedUpdateWithoutStreamsInput>
    create: XOR<UserCreateWithoutStreamsInput, UserUncheckedCreateWithoutStreamsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStreamsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStreamsInput, UserUncheckedUpdateWithoutStreamsInput>
  }

  export type UserUpdateWithoutStreamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    socialLogin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Playlist?: PlaylistUpdateManyWithoutUserDetailsNestedInput
    starredSongs?: starredSongUpdateManyWithoutUserDetailsNestedInput
    Subscription?: SubscriptionUpdateManyWithoutUserDetailsNestedInput
    PaymentTransaction?: PaymentTransactionUpdateManyWithoutUserNestedInput
    Votes?: VoteUpdateManyWithoutUserNestedInput
    StreamSongs?: StreamSongUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStreamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    socialLogin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Playlist?: PlaylistUncheckedUpdateManyWithoutUserDetailsNestedInput
    starredSongs?: starredSongUncheckedUpdateManyWithoutUserDetailsNestedInput
    Subscription?: SubscriptionUncheckedUpdateManyWithoutUserDetailsNestedInput
    PaymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    Votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
    StreamSongs?: StreamSongUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StreamSongUpsertWithWhereUniqueWithoutStreamInput = {
    where: StreamSongWhereUniqueInput
    update: XOR<StreamSongUpdateWithoutStreamInput, StreamSongUncheckedUpdateWithoutStreamInput>
    create: XOR<StreamSongCreateWithoutStreamInput, StreamSongUncheckedCreateWithoutStreamInput>
  }

  export type StreamSongUpdateWithWhereUniqueWithoutStreamInput = {
    where: StreamSongWhereUniqueInput
    data: XOR<StreamSongUpdateWithoutStreamInput, StreamSongUncheckedUpdateWithoutStreamInput>
  }

  export type StreamSongUpdateManyWithWhereWithoutStreamInput = {
    where: StreamSongScalarWhereInput
    data: XOR<StreamSongUpdateManyMutationInput, StreamSongUncheckedUpdateManyWithoutStreamInput>
  }

  export type StreamCreateWithoutSongsInput = {
    id?: string
    streamName: string
    createdAt?: Date | string
    active?: boolean
    host: UserCreateNestedOneWithoutStreamsInput
  }

  export type StreamUncheckedCreateWithoutSongsInput = {
    id?: string
    streamName: string
    hostId: string
    createdAt?: Date | string
    active?: boolean
  }

  export type StreamCreateOrConnectWithoutSongsInput = {
    where: StreamWhereUniqueInput
    create: XOR<StreamCreateWithoutSongsInput, StreamUncheckedCreateWithoutSongsInput>
  }

  export type UserCreateWithoutStreamSongsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password?: string | null
    socialLogin?: boolean
    role: $Enums.UserRole
    isSubscribed: boolean
    avatarUrl?: string | null
    publicId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    Playlist?: PlaylistCreateNestedManyWithoutUserDetailsInput
    starredSongs?: starredSongCreateNestedManyWithoutUserDetailsInput
    Subscription?: SubscriptionCreateNestedManyWithoutUserDetailsInput
    PaymentTransaction?: PaymentTransactionCreateNestedManyWithoutUserInput
    Streams?: StreamCreateNestedManyWithoutHostInput
    Votes?: VoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStreamSongsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password?: string | null
    socialLogin?: boolean
    role: $Enums.UserRole
    isSubscribed: boolean
    avatarUrl?: string | null
    publicId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutUserDetailsInput
    starredSongs?: starredSongUncheckedCreateNestedManyWithoutUserDetailsInput
    Subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserDetailsInput
    PaymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    Streams?: StreamUncheckedCreateNestedManyWithoutHostInput
    Votes?: VoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStreamSongsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStreamSongsInput, UserUncheckedCreateWithoutStreamSongsInput>
  }

  export type VoteCreateWithoutSongInput = {
    id?: string
    type: $Enums.VoteType
    user: UserCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutSongInput = {
    id?: string
    userId: string
    type: $Enums.VoteType
  }

  export type VoteCreateOrConnectWithoutSongInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutSongInput, VoteUncheckedCreateWithoutSongInput>
  }

  export type VoteCreateManySongInputEnvelope = {
    data: VoteCreateManySongInput | VoteCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type StreamUpsertWithoutSongsInput = {
    update: XOR<StreamUpdateWithoutSongsInput, StreamUncheckedUpdateWithoutSongsInput>
    create: XOR<StreamCreateWithoutSongsInput, StreamUncheckedCreateWithoutSongsInput>
    where?: StreamWhereInput
  }

  export type StreamUpdateToOneWithWhereWithoutSongsInput = {
    where?: StreamWhereInput
    data: XOR<StreamUpdateWithoutSongsInput, StreamUncheckedUpdateWithoutSongsInput>
  }

  export type StreamUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    host?: UserUpdateOneRequiredWithoutStreamsNestedInput
  }

  export type StreamUncheckedUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamName?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpsertWithoutStreamSongsInput = {
    update: XOR<UserUpdateWithoutStreamSongsInput, UserUncheckedUpdateWithoutStreamSongsInput>
    create: XOR<UserCreateWithoutStreamSongsInput, UserUncheckedCreateWithoutStreamSongsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStreamSongsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStreamSongsInput, UserUncheckedUpdateWithoutStreamSongsInput>
  }

  export type UserUpdateWithoutStreamSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    socialLogin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Playlist?: PlaylistUpdateManyWithoutUserDetailsNestedInput
    starredSongs?: starredSongUpdateManyWithoutUserDetailsNestedInput
    Subscription?: SubscriptionUpdateManyWithoutUserDetailsNestedInput
    PaymentTransaction?: PaymentTransactionUpdateManyWithoutUserNestedInput
    Streams?: StreamUpdateManyWithoutHostNestedInput
    Votes?: VoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStreamSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    socialLogin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Playlist?: PlaylistUncheckedUpdateManyWithoutUserDetailsNestedInput
    starredSongs?: starredSongUncheckedUpdateManyWithoutUserDetailsNestedInput
    Subscription?: SubscriptionUncheckedUpdateManyWithoutUserDetailsNestedInput
    PaymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    Streams?: StreamUncheckedUpdateManyWithoutHostNestedInput
    Votes?: VoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VoteUpsertWithWhereUniqueWithoutSongInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutSongInput, VoteUncheckedUpdateWithoutSongInput>
    create: XOR<VoteCreateWithoutSongInput, VoteUncheckedCreateWithoutSongInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutSongInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutSongInput, VoteUncheckedUpdateWithoutSongInput>
  }

  export type VoteUpdateManyWithWhereWithoutSongInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutSongInput>
  }

  export type StreamSongCreateWithoutVotesInput = {
    id?: string
    url: string
    title?: string | null
    addedAt?: Date | string
    stream: StreamCreateNestedOneWithoutSongsInput
    User: UserCreateNestedOneWithoutStreamSongsInput
  }

  export type StreamSongUncheckedCreateWithoutVotesInput = {
    id?: string
    url: string
    title?: string | null
    streamId: string
    userId: string
    addedAt?: Date | string
  }

  export type StreamSongCreateOrConnectWithoutVotesInput = {
    where: StreamSongWhereUniqueInput
    create: XOR<StreamSongCreateWithoutVotesInput, StreamSongUncheckedCreateWithoutVotesInput>
  }

  export type UserCreateWithoutVotesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password?: string | null
    socialLogin?: boolean
    role: $Enums.UserRole
    isSubscribed: boolean
    avatarUrl?: string | null
    publicId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    Playlist?: PlaylistCreateNestedManyWithoutUserDetailsInput
    starredSongs?: starredSongCreateNestedManyWithoutUserDetailsInput
    Subscription?: SubscriptionCreateNestedManyWithoutUserDetailsInput
    PaymentTransaction?: PaymentTransactionCreateNestedManyWithoutUserInput
    Streams?: StreamCreateNestedManyWithoutHostInput
    StreamSongs?: StreamSongCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVotesInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password?: string | null
    socialLogin?: boolean
    role: $Enums.UserRole
    isSubscribed: boolean
    avatarUrl?: string | null
    publicId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutUserDetailsInput
    starredSongs?: starredSongUncheckedCreateNestedManyWithoutUserDetailsInput
    Subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserDetailsInput
    PaymentTransaction?: PaymentTransactionUncheckedCreateNestedManyWithoutUserInput
    Streams?: StreamUncheckedCreateNestedManyWithoutHostInput
    StreamSongs?: StreamSongUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
  }

  export type StreamSongUpsertWithoutVotesInput = {
    update: XOR<StreamSongUpdateWithoutVotesInput, StreamSongUncheckedUpdateWithoutVotesInput>
    create: XOR<StreamSongCreateWithoutVotesInput, StreamSongUncheckedCreateWithoutVotesInput>
    where?: StreamSongWhereInput
  }

  export type StreamSongUpdateToOneWithWhereWithoutVotesInput = {
    where?: StreamSongWhereInput
    data: XOR<StreamSongUpdateWithoutVotesInput, StreamSongUncheckedUpdateWithoutVotesInput>
  }

  export type StreamSongUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stream?: StreamUpdateOneRequiredWithoutSongsNestedInput
    User?: UserUpdateOneRequiredWithoutStreamSongsNestedInput
  }

  export type StreamSongUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutVotesInput = {
    update: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    socialLogin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Playlist?: PlaylistUpdateManyWithoutUserDetailsNestedInput
    starredSongs?: starredSongUpdateManyWithoutUserDetailsNestedInput
    Subscription?: SubscriptionUpdateManyWithoutUserDetailsNestedInput
    PaymentTransaction?: PaymentTransactionUpdateManyWithoutUserNestedInput
    Streams?: StreamUpdateManyWithoutHostNestedInput
    StreamSongs?: StreamSongUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    socialLogin?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Playlist?: PlaylistUncheckedUpdateManyWithoutUserDetailsNestedInput
    starredSongs?: starredSongUncheckedUpdateManyWithoutUserDetailsNestedInput
    Subscription?: SubscriptionUncheckedUpdateManyWithoutUserDetailsNestedInput
    PaymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutUserNestedInput
    Streams?: StreamUncheckedUpdateManyWithoutHostNestedInput
    StreamSongs?: StreamSongUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlaylistCreateManyUserDetailsInput = {
    id?: number
    playlistName: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type starredSongCreateManyUserDetailsInput = {
    id?: number
    songId: number
  }

  export type SubscriptionCreateManyUserDetailsInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    packageId: number
    transactionId: number
  }

  export type PaymentTransactionCreateManyUserInput = {
    id?: number
    packageId: number
    subscriptionId: number
    amount: number
    currency?: string
    paymentMethod: string
    status: string
    paymentProvider: string
    providerTransactionId: string
    createdAt?: Date | string
  }

  export type StreamCreateManyHostInput = {
    id?: string
    streamName: string
    createdAt?: Date | string
    active?: boolean
  }

  export type VoteCreateManyUserInput = {
    id?: string
    songId: string
    type: $Enums.VoteType
  }

  export type StreamSongCreateManyUserInput = {
    id?: string
    url: string
    title?: string | null
    streamId: string
    addedAt?: Date | string
  }

  export type PlaylistUpdateWithoutUserDetailsInput = {
    playlistName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlaylistSong?: PlaylistSongUpdateManyWithoutPlaylistDetailsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutUserDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlistName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlaylistSong?: PlaylistSongUncheckedUpdateManyWithoutPlaylistDetailsNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutUserDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlistName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type starredSongUpdateWithoutUserDetailsInput = {
    SongDetails?: SongUpdateOneRequiredWithoutStarredSongsNestedInput
  }

  export type starredSongUncheckedUpdateWithoutUserDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
  }

  export type starredSongUncheckedUpdateManyWithoutUserDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
  }

  export type SubscriptionUpdateWithoutUserDetailsInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: IntFieldUpdateOperationsInput | number
    packageDetails?: PricingPackageUpdateOneRequiredWithoutSubscriptionNestedInput
    PaymentTransaction?: PaymentTransactionUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUserDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    packageId?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    PaymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    packageId?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentTransactionUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentProvider?: StringFieldUpdateOperationsInput | string
    providerTransactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    package?: PricingPackageUpdateOneRequiredWithoutPaymentTransactionNestedInput
    subscription?: SubscriptionUpdateOneRequiredWithoutPaymentTransactionNestedInput
  }

  export type PaymentTransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageId?: IntFieldUpdateOperationsInput | number
    subscriptionId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentProvider?: StringFieldUpdateOperationsInput | string
    providerTransactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageId?: IntFieldUpdateOperationsInput | number
    subscriptionId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentProvider?: StringFieldUpdateOperationsInput | string
    providerTransactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    songs?: StreamSongUpdateManyWithoutStreamNestedInput
  }

  export type StreamUncheckedUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    songs?: StreamSongUncheckedUpdateManyWithoutStreamNestedInput
  }

  export type StreamUncheckedUpdateManyWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
    song?: StreamSongUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
  }

  export type VoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
  }

  export type StreamSongUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stream?: StreamUpdateOneRequiredWithoutSongsNestedInput
    votes?: VoteUpdateManyWithoutSongNestedInput
  }

  export type StreamSongUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutSongNestedInput
  }

  export type StreamSongUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    streamId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistSongCreateManySongDetailsInput = {
    id?: number
    playlistId: number
    addedAt?: Date | string
  }

  export type AlbumSongCreateManySongDetailsInput = {
    id?: number
    albumId: number
  }

  export type starredSongCreateManySongDetailsInput = {
    id?: number
    userId: string
  }

  export type PlaylistSongUpdateWithoutSongDetailsInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlistDetails?: PlaylistUpdateOneRequiredWithoutPlaylistSongNestedInput
  }

  export type PlaylistSongUncheckedUpdateWithoutSongDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlistId?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistSongUncheckedUpdateManyWithoutSongDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    playlistId?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumSongUpdateWithoutSongDetailsInput = {
    albumDetails?: AlbumUpdateOneRequiredWithoutAlbumSongsNestedInput
  }

  export type AlbumSongUncheckedUpdateWithoutSongDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumSongUncheckedUpdateManyWithoutSongDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
  }

  export type starredSongUpdateWithoutSongDetailsInput = {
    userDetails?: UserUpdateOneRequiredWithoutStarredSongsNestedInput
  }

  export type starredSongUncheckedUpdateWithoutSongDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type starredSongUncheckedUpdateManyWithoutSongDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumSongCreateManyAlbumDetailsInput = {
    id?: number
    songId: number
  }

  export type AlbumSongUpdateWithoutAlbumDetailsInput = {
    songDetails?: SongUpdateOneRequiredWithoutAlbumSongsNestedInput
  }

  export type AlbumSongUncheckedUpdateWithoutAlbumDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumSongUncheckedUpdateManyWithoutAlbumDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaylistSongCreateManyPlaylistDetailsInput = {
    id?: number
    songId: number
    addedAt?: Date | string
  }

  export type PlaylistSongUpdateWithoutPlaylistDetailsInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songDetails?: SongUpdateOneRequiredWithoutPlaylistSongNestedInput
  }

  export type PlaylistSongUncheckedUpdateWithoutPlaylistDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistSongUncheckedUpdateManyWithoutPlaylistDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyPackageDetailsInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    userId: string
    transactionId: number
  }

  export type PaymentTransactionCreateManyPackageInput = {
    id?: number
    userId: string
    subscriptionId: number
    amount: number
    currency?: string
    paymentMethod: string
    status: string
    paymentProvider: string
    providerTransactionId: string
    createdAt?: Date | string
  }

  export type SubscriptionUpdateWithoutPackageDetailsInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: IntFieldUpdateOperationsInput | number
    userDetails?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
    PaymentTransaction?: PaymentTransactionUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPackageDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    transactionId?: IntFieldUpdateOperationsInput | number
    PaymentTransaction?: PaymentTransactionUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutPackageDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    transactionId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentTransactionUpdateWithoutPackageInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentProvider?: StringFieldUpdateOperationsInput | string
    providerTransactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentTransactionNestedInput
    subscription?: SubscriptionUpdateOneRequiredWithoutPaymentTransactionNestedInput
  }

  export type PaymentTransactionUncheckedUpdateWithoutPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentProvider?: StringFieldUpdateOperationsInput | string
    providerTransactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransactionUncheckedUpdateManyWithoutPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentProvider?: StringFieldUpdateOperationsInput | string
    providerTransactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransactionCreateManySubscriptionInput = {
    id?: number
    userId: string
    packageId: number
    amount: number
    currency?: string
    paymentMethod: string
    status: string
    paymentProvider: string
    providerTransactionId: string
    createdAt?: Date | string
  }

  export type PaymentTransactionUpdateWithoutSubscriptionInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentProvider?: StringFieldUpdateOperationsInput | string
    providerTransactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentTransactionNestedInput
    package?: PricingPackageUpdateOneRequiredWithoutPaymentTransactionNestedInput
  }

  export type PaymentTransactionUncheckedUpdateWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    packageId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentProvider?: StringFieldUpdateOperationsInput | string
    providerTransactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTransactionUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    packageId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentProvider?: StringFieldUpdateOperationsInput | string
    providerTransactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamSongCreateManyStreamInput = {
    id?: string
    url: string
    title?: string | null
    userId: string
    addedAt?: Date | string
  }

  export type StreamSongUpdateWithoutStreamInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutStreamSongsNestedInput
    votes?: VoteUpdateManyWithoutSongNestedInput
  }

  export type StreamSongUncheckedUpdateWithoutStreamInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutSongNestedInput
  }

  export type StreamSongUncheckedUpdateManyWithoutStreamInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateManySongInput = {
    id?: string
    userId: string
    type: $Enums.VoteType
  }

  export type VoteUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
    user?: UserUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
  }

  export type VoteUncheckedUpdateManyWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType
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