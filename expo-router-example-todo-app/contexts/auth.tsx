import { useRouter, useSegments } from "expo-router";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<any>(undefined);


// Este es el hook que usaremos en nuestros componentes para acceder al contexto
export function useAuth() {
  return useContext(AuthContext);
}
// Este es el componente proveedor que usaremos para envolver nuestra aplicación
export function AuthProvider({ children }: React.PropsWithChildren<any>) {
  const [user, setUser] = useState<String | undefined>("");

  const rootSegment = useSegments()[0]; // Obtener el segmento raíz
  const router = useRouter(); // Permite navegar entre segmentos

  useEffect(() => {
    // Como el estado inicial es `undefined`, no hacer nada si no hay usuario
    if (user === undefined) return;
    if (!user && rootSegment !== "(auth)") {
      // Si no hay usuario y el segmento raíz no es el de autenticación, redirigir
      router.replace("/(auth)/login");
    } else if (user && rootSegment === "(auth)") {
      // Si hay usuario y el segmento raíz es el de autenticación, redirigir
      router.replace("/");
    }

  }, [user, rootSegment]);

  return (
    <AuthContext.Provider value={{
      user: null,
      signIn: () => {
        setUser("Kevin");
      },
      signOut: () => {
        setUser("");
      },
    }}>{children}</AuthContext.Provider>
  )
}