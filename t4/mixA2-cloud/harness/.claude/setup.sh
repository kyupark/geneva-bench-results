#!/bin/bash
# installs deepseek-as-subagent MCP (pinned) once per VM
[ -x /opt/dsas/bin/deepseek-mcp ] && exit 0
python3 -m venv /opt/dsas 2>/dev/null || sudo -S -p '' python3 -m venv /opt/dsas
/opt/dsas/bin/pip install -q "git+https://github.com/PsChina/deepseek-as-subagent@7e54026392f85ccfc796f947faf9ffac3968a49e"
