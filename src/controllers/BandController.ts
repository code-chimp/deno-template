import {
  Controller,
  Get,
  HttpStatus,
  OakRequest,
  OakResponse,
  Post,
  Response,
  Request,
  v4,
} from "../deps.ts";
import { Band } from "../models/Band.ts";

@Controller("/bands")
export default class BandController {
  private _bands: Array<Band> = [];

  @Get("/")
  @HttpStatus(200)
  get() {
    return {
      success: true,
      data: this._bands,
    };
  }

  @Post("/")
  async create(
    @Request() request: OakRequest,
    @Response() response: OakResponse
  ) {
    const body = await request.body();

    if (!request.hasBody) {
      response.status = 400;
      response.body = {
        success: false,
        msg: "The request is empty",
      };
    } else {
      const band = body.value;
      band.id = v4.generate();
      this._bands.push(band);

      response.status = 200;
      response.body = {
        success: true,
        data: band,
      };
    }
  }
}
