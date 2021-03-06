#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
.version('0.1')  
.description('Compares two configuration files and shows a difference.') 
.option('-f, --format <type>', 'output format', 'stylish')
.argument('<filepath1> <filepath2>')


program.parse();