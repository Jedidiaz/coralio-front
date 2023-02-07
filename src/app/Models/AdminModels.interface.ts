export interface ResponseGetAdminModel {
  response: string;
  datainfo: DataInfoAdminModel[]
}

export interface ResposeGetAdminTerapiasModel {
  response: string
  datainfo: dataInfoTerapiaAdminModel[]
}

export interface ResposeGetAdminTerapiasIDModel {
  response: string
  datainfo: dataInfoTerapiaAdminModel
}

export interface dataInfoTerapiaAdminModel{
  _id: string,
  nombre: string,
  tipo: string,
  cantidad:  number,
  precio:  number,
  createdAt: string,
  updatedAt: string,
  __v: number
}

export interface ResponseGetIDAdminModel {
  response: string;
  datainfo: DataInfoAdminModel
}

export interface DataInfoAdminModel {
  apellido: string;
  cedula: number;
  createdAt: string;
  descripcion: string;
  email: string;
  imgpro: FileAdminModel;
  isActive: boolean;
  nombre: string;
  password: string;
  preferencia: PreferenciasUsuarioModel[];
  rol: string;
  telefono: number;
  updatedAt: string;
  video: FileAdminModel;
  _id: string;
  especialidad: string
}

export interface PreferenciasUsuarioModel {
  name: string
}

export interface FileAdminModel {
  fileName: string
  filePath: string
  fileType: string
}
