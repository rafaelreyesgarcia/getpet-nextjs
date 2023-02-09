import { motion } from "framer-motion";

import Link from "next/link";

const navigation = [
  {
    pageURL: '/',
    name: 'home'
  },
  {
    pageURL: '/services',
    name: 'services'
  },
  {
    pageURL: '/contact',
    name: 'contact',
  },
];

const Navigation = () => {
  return (
    <motion.nav
      className="
        flex gap-8 items-center"
    >
      {navigation.map((link) => {
        return (
          <motion.div
            initial={{scale: 0.8}}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.3 }}
            className="uppercase"
            key={link.name}
          >
            <Link href={link.pageURL}>{link.name}</Link>
          </motion.div>
        )
      })}
    </motion.nav>
  );
}

export default Navigation;