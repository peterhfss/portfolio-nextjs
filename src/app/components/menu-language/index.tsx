import Link from "next/link";
import { Locale } from "@/config/i18n.config";
import { NavigationMenu,NavigationMenuContent,NavigationMenuTrigger, NavigationMenuItem,navigationMenuTriggerStyle, NavigationMenuLink, NavigationMenuList,} from "@/components/ui/navigation-menu"

interface MenuLanguageProps{
  lang: Locale;
}

export const MenuLanguage = ({lang}:MenuLanguageProps) => {
  return(
    <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-tertiary-600 focus:bg-transparent focus:text-tertiary-400">{lang.toUpperCase()}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Link href="/en-us" legacyBehavior passHref> 
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:bg-secundary-100 text-tertiary-600`}>
                      EN-US
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/pt-br" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:bg-secundary-100 text-tertiary-600`}>
                      PT-BR
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
  );
}