import { hash, compare } from 'bcryptjs';

class HashProvider{
    async hashGenerator(password:string):Promise<string>{
        return await hash(password, 8);
    }

    async compare(password:string, payload:string):Promise<Boolean>{
        return compare(password, payload);
    }
}

export { HashProvider }