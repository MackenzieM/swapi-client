import unittest

from api.src.fixture import STARSHIPS, FILMS
from main import build_report

class MainTest(unittest.TestCase):
    def test_build_report(self):
        actual = build_report(FILMS, STARSHIPS)
        self.assertEqual(len(FILMS), len(actual))
        for film in actual:
            self.assertGreater(len(film["starships"]), 0)
            for ship in film["starships"]:
                self.assertIsNotNone(ship["cost"])
                self.assertIsNotNone(ship["name"])

if __name__ == '__main__':
    unittest.main()
