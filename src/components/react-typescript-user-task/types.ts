export type Name = {
    title: string;
    first: string;
    last: string;
  };
  
  export type Street = {
    number: number;
    name: string;
  };
  
  export type Coordinate = {
    latitude: string;
    longitude: string;
  };
  
  export type Timezone = {
    offset: string;
    description: string;
  };
  
  export type Dob = {
    date: string;
    age: number;
  };
  
  export type Registered = {
    date: string;
    age: number;
  };
  
  export type Id = {
    name: string;
    value: number;
  };
  
  export type Login = {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  
  export type Picture = {
    large: string;
    medium: string;
    thumbnail: string;
  };
  
  export type Location = {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: Coordinate;
    timezone: Timezone;
  };
  
  export type User = {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    registered: Registered;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
  };
  