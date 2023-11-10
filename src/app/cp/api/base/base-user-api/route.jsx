import { promises as fs } from "fs";
import { NextResponse } from "next/server";

//Recuperar o arquivo json.
const file = await fs.readFile(process.cwd() + "/src/app/cp/api/base/db-cp3.json", "utf-8");

export async function GET(request, { params }) {
    return NextResponse.json(JSON.parse(file));
  }