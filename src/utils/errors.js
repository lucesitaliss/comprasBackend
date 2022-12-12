const errors = {
  MissingParameter: {
    httpCode: 400,
    message:
      'The input parameter "parameter name" that is mandatory for processing this request is not supplied.',
  },
  'InvalidAccessKeyId.NotFound': {
    httpCode: 404,
    message: 'The Access Key ID provided does not exist in our records.',
  },
  InvalidParameter: {
    httpCode: 404,
    message: 'The Access Key ID provided does not exist in our records.',
  },
  IncompleteSignature: {
    httpCode: 400,
    message: 'The request signature does not conform to Aliyun standards.',
  },
  IllegalTimestamp: {
    httpCode: 400,
    message:
      'The input parameter "Timestamp" that is mandatory for processing this request is not supplied.',
  },
  InvalidOwnerId: {
    httpCode: 400,
    message: 'The specified OwnerId is not valid.',
  },
  InvalidOwnerAccount: {
    httpCode: 400,
    message: 'The specified OwnerAccount is not valid.',
  },
  InvalidOwner: {
    httpCode: 400,
    message: "OwnerId and OwnerAccount can't be used at one API access.",
  },
  Throttling: {
    httpCode: 400,
    message: 'Request was denied due to request throttling.',
  },
  InvalidAction: {
    httpCode: 403,
    message: 'The specified action is not valid.',
  },
  ActionUnauthorized: {
    httpCode: 403,
    message: 'The specified action is not available for you',
  },
  UnsupportedHTTPMethod: {
    httpCode: 403,
    message: 'This http method not supported.',
  },
  UnsupportedParameter: {
    httpCode: 400,
    message: 'The parameter "<parameter name>" is not supported.',
  },
  'Forbidden.InstanceNotFound': {
    httpCode: 404,
    message: 'The specified DB instance does not exist.',
  },
  'Forbidden.RAM': {
    httpCode: 403,
    message:
      'The user is not authorized to operate the specified resource, or this operation does not support RAM.',
  },
  'Forbedden.NotSupportRAM': {
    httpCode: 403,
    message: 'This action does not support accessed by RAM mode.',
  },
  'Forbidden.RiskControl': {
    httpCode: 403,
    message: 'This operation is forbidden by Aliyun Risk Control system.',
  },
  InsufficientBalance: {
    httpCode: 400,
    message: 'Your account does not have enough balance.',
  },
  'Forbidden.Authentication': {
    httpCode: 403,
    message:
      'This operation is forbidden by Aliyun Realname Authentication system.',
  },
  'Invalid<parameter name>.ValueNotSupported': {
    httpCode: 400,
    message: 'The specified parameter "parameter name" is not valid.',
  },
  'Invalid<parameter name>.Malformed': {
    httpCode: 400,
    message: 'The specified parameter "parameter name n" is not valid.',
  },
  InvalidParameter: {
    httpCode: 400,
    message: 'The specified parameter " parameter name n " is not valid.',
  },
  'InvalidRegionId.NotFound': {
    httpCode: 404,
    message: 'The DBInstanceId provided does not exist in our records.',
  },
  'InvalidSecurityIPList.Duplicate': {
    httpCode: 400,
    message:
      'The Security IP address is not in the available range or occupied.',
  },

  'InvalidSecurityIPListLength.Malformed': {
    httpCode: 400,
    message:
      'The security IP address is beyond the available range or is already used.',
  },

  'InvalidEngineVersionInRegion.NotAvailable': {
    httpCode: 403,
    message: 'The EngineVersion in the Region is not available.',
  },

  'InvaildDBInstanceClassInRegion.NotAvailable': {
    httpCode: 403,
    message: 'The DBInstanceClass in the Region is not available.',
  },

  OperationDenied: {
    httpCode: 403,
    message: 'The resource is out of usage.',
  },

  RegionUnauthorized: {
    httpCode: 403,
    message:
      'There is no authority to create instance in the specified region.',
  },

  'QuotaExceeded.CreateInstance': {
    httpCode: 403,
    message: 'The quota of create instance exceeds.',
  },

  'InvalidDBInstanceId.NotFound': {
    httpCode: 404,
    message: 'The specified DBInstanceId does not exist.',
  },

  MissingParameter: {
    httpCode: 400,
    message:
      'The input parameters "DBInstanceClass" and "DBInstanceStorage" all blank or no change.',
  },

  'OperationDenied.DBInstanceType': {
    httpCode: 400,
    message: 'The operation is not permitted due to type of instance.',
  },
  'OperationDenied.DBInstanceStorageReduce': {
    httpCode: 403,
    message: 'The operation is not permitted due to reduce storage.',
  },

  'OperationDenied.DBInstanceStatus': {
    httpCode: 403,
    message: 'The operation is not permitted due to instance status.',
  },

  DependencyViolation: {
    httpCode: 403,
    message:
      'The operation is not permitted due to instance mount read only or guard instance.',
  },

  'InvalidConnectionStringPrefix.Duplicate': {
    httpCode: 400,
    message: 'The connection string is not in the available range or occupied.',
  },

  'QuotaExceeded.SwitchTime': {
    httpCode: 400,
    message: 'The quota of switch time exceed.',
  },
  'OperationDenied.LockMode': {
    httpCode: 403,
    message: 'The operation is not permitted due to lock of instance.',
  },
  'OperationDenied.LockMode': {
    httpCode: 403,
    message: 'OperationDenied.LockMode',
  },
  'InvalidSecurityIps.Duplicate': {
    httpCode: 400,
    message: 'The quota of security ip exceeds.',
  },

  'OperationDenied.CurrentEngineVersion': {
    httpCode: 400,
    message: 'The operation is not permitted due to specified current version.',
  },
  'OperationDenied.ReadOnlyDBInstanceLower': {
    httpCode: 403,
    message:
      'The operation is not permitted due to higher read only instance version.',
  },
  'OperationDenied.GuardDBInstanceLower': {
    httpCode: 403,
    message:
      'The operation is not permitted due to higher guard instance version.',
  },
  'OperationDenied.MasterDBInstanceState': {
    httpCode: 403,
    message:
      'The status of the specified master instance does not support this operation.',
  },
  'QuotaExceeded.DBName': {
    httpCode: 400,
    message: 'The quota of db exceeds.',
  },
  'InvalidDBName.Duplicate': {
    httpCode: 400,
    message: 'The specified DB name is invalid or already exists.',
  },
  'InvalidParameter.Keyword': {
    httpCode: 400,
    message: 'The specified DBName is a reserved keyword.',
  },
  'OperationDenied.DBStatus': {
    httpCode: 403,
    message: 'The status of the database does not support this operation.',
  },
  'OperationDenied.DBInstanceEngine': {
    httpCode: 403,
    message: 'The operation is not permitted due to engine of instance.',
  },
  FTPServiceUnavailable: {
    httpCode: 403,
    message:
      'The service is unavailable now; wait several minutes and try again.',
  },
  'QuotaExceeded.Upload': {
    httpCode: 403,
    message: 'The quota of file exceeds.',
  },
  'InvalidFileName.NotCompleted': {
    httpCode: 404,
    message: 'The specified "FileName" is not completed.',
  },
  'InvalidFileName.NotAvailable': {
    httpCode: 404,
    message: 'The specified "FileName" is not Available.',
  },
  'QuotaExceeded.FileSize': {
    httpCode: 403,
    message: 'The quota of file size exceeds.',
  },
  'QuotaExceeded.DBInstanceStorage': {
    httpCode: 403,
    message: 'The quota of instance storage exceeds.',
  },
  'InvalidDBInfo.Malformed': {
    httpCode: 400,
    message: 'The specified parameter "DBInfo" is not valid or db not exist.',
  },
  'OperationDenied.Region': {
    httpCode: 403,
    message: 'The operation is not permitted due to different region.',
  },
  'OperationDenied.Engine': {
    httpCode: 403,
    message: 'The operation is not permitted due to different engine.',
  },
  'OperationDenied.DBInstanceId': {
    httpCode: 403,
    message:
      'The operation is not permitted due to DBInstanceId and SourceDBInstanceId is same.',
  },
  'InvalidTaskId.NotFound': {
    httpCode: 400,
    message: 'The ImportId provided does not exist in our records.',
  },
  'OperationDenied.IncorrectTaskStatus': {
    httpCode: 403,
    message: 'The operation is not permitted due to status of import.',
  },
  'InvalidAccountName.keyword': {
    httpCode: 400,
    message: 'The specified AccountName is a reserved keyword.',
  },

  'InvalidAccountName.Duplicate': {
    httpCode: 400,
    message: 'The specified AccountName already exists.',
  },

  'QuotaExceeded.AccountName': {
    httpCode: 403,
    message: 'The quota of account exceeds.',
  },

  'OperationDenied.AccountStatus': {
    httpCode: 403,
    message: 'The status of the account does not support this operation.',
  },

  'InvalidDBName.NotFound': {
    httpCode: 404,
    message: 'The specified database does not exist.',
  },

  'OperationDenied.AccountType': {
    httpCode: 403,
    message: 'The operation is not permitted due to type of account.',
  },

  'OperationDenied.BackupJobExists': {
    httpCode: 403,
    message: 'You cannot perform this operation; a backup job exists.',
  },
  'OperationDenied.NoDatabase': {
    httpCode: 403,
    message: 'The operation is not permitted due to no database.',
  },
  'InvalidStartTimeAndEndTime.Malformed': {
    httpCode: 400,
    message: 'The EndTime must be later than or equal to the StartTime.',
  },
  'OperationDenied.BackupJobExists': {
    httpCode: 403,
    message: 'You cannot perform this operation; a backup job exists.',
  },
  'InvalidBackupId.NotFound': {
    httpCode: 404,
    message: 'The BackupId provided does not exist in our records.',
  },
  'OperationDenied.NotFoundBackup': {
    httpCode: 403,
    message: 'The operation is not permitted due to no backup.',
  },
  'OperationDenied.BackupStatus': {
    httpCode: 403,
    message: 'The operation is not permitted due to type of backup.',
  },
  'OperationDenied.BackupMethod': {
    httpCode: 403,
    message: 'The operation is not permitted method of backup.',
  },
  'OperationDenied.TempDBInstanceExists': {
    httpCode: 403,
    message: 'You cannot perform this operation; a temp instance exists.',
  },
  'Forbidden.Authentication': {
    httpCode: 403,
    message:
      'The operation is forbidden by Aliyun Realname Authentication System.',
  },
  IncorrectDBInstanceConnType: {
    httpCode: 404,
    message: 'Current DB instance conn type does not support this operation.',
  },
  'IncorrecttVpcId.Mismatch': {
    httpCode: 404,
    message: 'The specified parameter "VpcId" is not valid.',
  },
  IntranetNetTypeNotExists: {
    httpCode: 404,
    message: 'Current DB instance net type does not support this operation.',
  },
  'InvalidDBInstanceName.NotFound': {
    httpCode: 403,
    message: 'The DBInstanceId provided does not exist in our records.',
  },
  'InvalidConnectionMode.ValueNotSupported': {
    httpCode: 400,
    message: 'The specified parameter "ConnectionMode" is not valid.',
  },
  'InvalidConnectionString.Duplicate Specified': {
    httpCode: 403,
    message: 'Connection string already exists in the Aliyun RDS.',
  },

  'InvalidConnectionStringPrefix.Duplicated': {
    httpCode: 403,
    message: 'The specified connection string already exists.',
  },
  'InvalidCurrentConnectionString.NotFound': {
    httpCode: 400,
    message: "Specified current connection string doesn't exist.",
  },
  'InvalidDBInstanceId.NotFound': {
    httpCode: 400,
    message: 'The specified DBInstanceId does not exist.',
  },
  'InvalidDBInstanceId.QuotaExceeded': {
    httpCode: 400,
    message: 'The quota of instance id exceeds.',
  },
  'InvalidDBInstanceNetType.NotFound': {
    httpCode: 404,
    message: 'The Specified DB instance net type is not found.',
  },
  'InvalidDBinstanceNetType.ValueNotSupport': {
    httpCode: 400,
    message: 'The specified parameter "DBinstanceNetType" is not valid.',
  },
  'InvalidDBInstanceType.ValueNotSupport': {
    httpCode: 400,
    message: 'The specified parameter "DBInstanceType" is not valid.',
  },
  'InvalidEngineVersion.Malformed': {
    httpCode: 400,
    message: 'The specified parameter "EngineVersion" is not valid.',
  },
  'InvalidInstanceNetworkType.ValueNotSupported': {
    httpCode: 400,
    message: 'The specified parameter "InstanceNetworkType" is not valid.',
  },
  InvalidParameter: {
    httpCode: 400,
    message: 'The specified parameter "dbInstanceId" is not valid.',
  },
  'InvalidPort.Malformed': {
    httpCode: 400,
    message: 'Specified port is not valid.',
  },
  'InvalidPrivateIpAddress.Duplicated	': {
    httpCode: 400,
    message: 'Specified private IP address is duplicated.	',
  },
  'InvalidPrivateIpAddress.Mismatch': {
    httpCode: 400,
    message:
      'Specified private IP address is not in the CIDR block of virtual switch.',
  },
  'InvalidVPCId.NotFound': {
    httpCode: 400,
    message:
      'The specified connection string or port does not match the current network type.',
  },
  'InvalidVSwitchId.Mismatch': {
    httpCode: 400,
    message: 'Specified instance and virtual switch are not in the same zone.',
  },
  'InvalidVSwitchId.NotFound': {
    httpCode: 400,
    message: 'Specified virtual switch is not found in specified VPC.',
  },
  NetTypeExists: {
    httpCode: 400,
    message: 'Specified net type already existed.',
  },
  'OperationDenied.DBInstanceNetType': {
    httpCode: 403,
    message:
      'The network type of the specified instance does not support this operation.',
  },
  'OperationDenied.DBInstanceStatus': {
    httpCode: 403,
    message:
      'The specified connection string or port does not match the current network type.',
  },
  'OperationDenied.DBInstanceType': {
    httpCode: 403,
    message: 'The operation is not permitted for the database instance type.',
  },
  'OperationDenied.LockMode': {
    httpCode: 403,
    message: 'The instance is locked.',
  },
  'OperationDenied.Switch': {
    httpCode: 400,
    message: 'Specified instance cannot be switched.',
  },
  'OperationDenied.Switch': {
    httpCode: 403,
    message: 'Specified instance cannot be switched to VPC.',
  },
  'OperationDenied.SwitchToVPC': {
    httpCode: 403,
    message: 'Specified instance cannot be switched to VPC.',
  },
  OperationDenied: {
    httpCode: 403,
    message:
      'The requested resource is sold out in the specified zone; try other types of resources or other regions and zones.',
  },
  OperationDenied: {
    httpCode: 406,
    message: 'The vpc cloudinstanceIp is use, please check params.',
  },
  OperationDenied: {
    httpCode: 400,
    message: 'The vpc service is error, please check params.',
  },
  PARAMETER_ERROR: {
    httpCode: 406,
    message: 'The vpc request parameter may not be null.',
  },
  PARAMETER_MUST_NOT_NULL: {
    httpCode: 406,
    message: 'The parameter must not be null.',
  },
  PublicConnectionExists: {
    httpCode: 403,
    message: 'PublicConnection exists.',
  },
  bpcIzNoNotEqualsRdsMultIzNo: {
    httpCode: 400,
    message: 'Specified vpc IzNo not equal rds IzNo.',
  },
  IncorrectDBInstanceState: {
    httpCode: 403,
    message: 'CurrentDB instance state does not support this operation.',
  },
}
module.exports = errors
