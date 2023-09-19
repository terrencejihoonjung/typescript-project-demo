function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  id.toLowerCase();
}

function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

function printAll(strs: string | string[] | null) {
  // If not null
  if (strs) {
    // if array
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    }
    // If string
    else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
