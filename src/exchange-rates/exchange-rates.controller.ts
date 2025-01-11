import { Controller, Get, Query } from '@nestjs/common';
import { ExchangeRatesService } from './exchange-rates.service';


@Controller('exchange-rates')
export class ExchangeRatesController {
    constructor(private readonly exchangeRatesService: ExchangeRatesService) {}
    @Get('latest')
    async getLatestRate(
        @Query('base') base: string,
        @Query('symbols') symbol: string,
    ) {
        return this.exchangeRatesService.getLatestRate(base, symbol);
    }
}
