import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ExchangeRatesService {
    private baseURL = 'http://api.exchangeratesapi.io/v1';

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {}

    async getLatestRate(base: string, symbols: string): Promise<any> {
        const url = `${this.baseURL}/latest`;
        const params = {
            access_key: this.configService.get<string>('EXCHANGERATES_API_KEY'),
            base,
            symbols,
        };
        
        const response = this.httpService.get(url, { params });
        return lastValueFrom(response).then(res => res.data);
    }
}
