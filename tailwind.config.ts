
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				homm3: {
					'blue': '#1A1F2C',
					'dark-blue': '#151822',
					'purple': '#6E59A5',
					'light-purple': '#9b87f5',
					'gold': '#FEF7CD',
					'brown': '#403E43',
					'sky': '#D3E4FD'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pixel-pulse': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				},
				"logo-pulse": {
					"0%": { opacity: "0.1", transform: "scale(0)" },
					"50%": { opacity: "0.2", transform: "scale(1.5)" },
					"100%": { opacity: "0", transform: "scale(2)" }
				},
				"logo-icon": {
					"0%": { opacity: "0.4", transform: "scale(0.9)" },
					"50%": { opacity: "1", transform: "scale(1.1)" },
					"100%": { opacity: "0.4", transform: "scale(0.9)" }
				},
				"sword-rotate": {
					"0%": { transform: "rotate(-45deg)" },
					"25%": { transform: "rotate(-30deg)" },
					"75%": { transform: "rotate(-60deg)" },
					"100%": { transform: "rotate(-45deg)" }
				},
				"wand-rotate": {
					"0%": { transform: "rotate(45deg)" },
					"25%": { transform: "rotate(60deg)" },
					"75%": { transform: "rotate(30deg)" },
					"100%": { transform: "rotate(45deg)" }
				},
				"char-bounce": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-5px)" }
				},
				"char-fade": {
					"0%": { opacity: "0.3", transform: "translateY(3px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				"star-fall": {
					"0%": { transform: "translateY(-100%) rotate(0)" },
					"100%": { transform: "translateY(250%) rotate(360deg)" }
				},
				"castle-glow": {
					"0%": { opacity: "0.4", transform: "scale(1)" },
					"50%": { opacity: "0.7", transform: "scale(1.1)" },
					"100%": { opacity: "0.4", transform: "scale(1)" }
				},
				"dragon-float": {
					"0%": { transform: "translateY(0) rotate(45deg)" },
					"50%": { transform: "translateY(-10px) rotate(45deg)" },
					"100%": { transform: "translateY(0) rotate(45deg)" }
				},
				"char-pulse": {
					"0%": { textShadow: "0 0 5px #9b87f5" },
					"50%": { textShadow: "0 0 15px #9b87f5, 0 0 20px #9b87f5" },
					"100%": { textShadow: "0 0 5px #9b87f5" }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pixel-pulse': 'pixel-pulse 2s infinite',
				"logo-pulse": "logo-pulse 3s ease-in-out forwards",
				"logo-icon": "logo-icon 2s ease-in-out infinite",
				"sword-rotate": "sword-rotate 2s ease-in-out",
				"wand-rotate": "wand-rotate 2s ease-in-out",
				"char-bounce": "char-bounce 0.6s ease-in-out",
				"char-fade": "char-fade 0.8s ease-in-out forwards",
				"star-fall": "star-fall 2s ease-in 1s forwards",
				"castle-glow": "castle-glow 3s ease-in-out infinite",
				"dragon-float": "dragon-float 4s ease-in-out infinite",
				"char-pulse": "char-pulse 2s ease-in-out infinite"
			},
			backgroundImage: {
				'pixel-pattern': "url('data:image/svg+xml,%3Csvg width=\"6\" height=\"6\" viewBox=\"0 0 6 6\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%236E59A5\" fill-opacity=\"0.1\" fill-rule=\"evenodd\"%3E%3Cpath d=\"M5 0h1L0 5v1H0V0h5z\"/%3E%3C/g%3E%3C/svg%3E')"
			},
			fontFamily: {
				'pixel': ['VT323', 'monospace', 'system-ui']
			},
			transitionDelay: {
				'75': '75ms',
				'100': '100ms',
				'150': '150ms',
				'200': '200ms',
				'500': '500ms',
				'1000': '1000ms',
				'1500': '1500ms',
			}
		}
	},
	plugins: [require("tailwindcss-animate")]
} satisfies Config;
