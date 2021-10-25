import { hash } from 'bcryptjs';

class HashProvider{
    async hashGenerator(password:string):Promise<string>{
        return await hash(password, 8);
    }
}

export { HashProvider }