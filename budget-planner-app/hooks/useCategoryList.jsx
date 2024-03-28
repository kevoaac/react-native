import { useState } from "react";
import { client } from "../util/kindeConfig";
import { supabase } from "../util/supabaseConfig";

export function useCategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategoryList = async () => {
    console.log("Getting categories");
    setLoading(true);
    const { email } = await client.getUserDetails();
    const { data, error } = await supabase
      .from("Category")
      .select("*, CategoryItem(*)")
      .eq("created_by", email);

    data.forEach((category) => {
      console.log(category);
    });

    setCategories(data);
    setLoading(false);
  };

  return { categories, setCategories, loading, setLoading, getCategoryList };
}
