
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.7.0
 * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
 */
Prisma.prismaVersion = {
  client: "6.7.0",
  engine: "3cff47a7f5d65c3ea74883f1d736e41d68ce91ed"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.SongScalarFieldEnum = {
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

exports.Prisma.AlbumScalarFieldEnum = {
  id: 'id',
  albumName: 'albumName',
  artist: 'artist',
  coverImage: 'coverImage',
  createdAt: 'createdAt',
  updateAt: 'updateAt'
};

exports.Prisma.PlaylistScalarFieldEnum = {
  id: 'id',
  playlistName: 'playlistName',
  userId: 'userId',
  createdAt: 'createdAt',
  updateAt: 'updateAt'
};

exports.Prisma.PlaylistSongScalarFieldEnum = {
  id: 'id',
  songId: 'songId',
  playlistId: 'playlistId',
  addedAt: 'addedAt'
};

exports.Prisma.AlbumSongScalarFieldEnum = {
  id: 'id',
  albumId: 'albumId',
  songId: 'songId'
};

exports.Prisma.StarredSongScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  songId: 'songId'
};

exports.Prisma.PricingPackageScalarFieldEnum = {
  id: 'id',
  packageName: 'packageName',
  price: 'price',
  durationMonth: 'durationMonth',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SubscriptionScalarFieldEnum = {
  id: 'id',
  startDate: 'startDate',
  endDate: 'endDate',
  packageId: 'packageId',
  userId: 'userId',
  transactionId: 'transactionId'
};

exports.Prisma.PaymentTransactionScalarFieldEnum = {
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

exports.Prisma.VerificationCodesScalarFieldEnum = {
  id: 'id',
  email: 'email',
  otp: 'otp',
  isVerified: 'isVerified',
  type: 'type',
  expiry: 'expiry',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StreamScalarFieldEnum = {
  id: 'id',
  streamName: 'streamName',
  hostId: 'hostId',
  createdAt: 'createdAt',
  active: 'active'
};

exports.Prisma.StreamSongScalarFieldEnum = {
  id: 'id',
  url: 'url',
  title: 'title',
  streamId: 'streamId',
  userId: 'userId',
  addedAt: 'addedAt'
};

exports.Prisma.VoteScalarFieldEnum = {
  id: 'id',
  songId: 'songId',
  userId: 'userId',
  type: 'type'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserRole = exports.$Enums.UserRole = {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

exports.VerificationCodeType = exports.$Enums.VerificationCodeType = {
  VERIFY: 'VERIFY',
  FORGOT: 'FORGOT'
};

exports.VoteType = exports.$Enums.VoteType = {
  UPVOTE: 'UPVOTE',
  DOWNVOTE: 'DOWNVOTE'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
