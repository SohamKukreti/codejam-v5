import { connectToDb } from "@/lib/connection";
import { Item } from "@/models/item.model";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const id = request.nextUrl.pathname.split("/").pop();
  try {
    connectToDb();
    const item = await Item.findById(id);
    return NextResponse.json(item);
  } catch (error) {
    console.log(error);
  }
};

export const DELETE = async (request: NextRequest) => {
  const id = request.nextUrl.pathname.split("/").pop();
  try {
    connectToDb();
    const deletedItem = await Item.findByIdAndDelete(id, { new: true });
    return NextResponse.json(deletedItem);
  } catch (e) {
    console.log(e);
  }
};
