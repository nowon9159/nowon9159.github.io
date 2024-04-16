def extract_sections(input_file_path, output_file_path):
    # 입력 파일을 읽기 모드로 열기
    with open(input_file_path, 'r', encoding='utf-8') as input_file:
        # 출력 파일을 쓰기 모드로 열기
        with open(output_file_path, 'w', encoding='utf-8') as output_file:
            # 반복문을 통해 파일 끝까지 읽기
            while True:
                # 각 섹션의 시작을 나타내는 플래그 변수
                section_started = False
                # 섹션의 제목과 내용을 담을 변수 초기화
                section_title = ""
                section_content = ""

                # 파일을 한 줄씩 읽기
                for line in input_file:
                    # 빈 줄이거나 TOC인 경우 무시
                    # 섹션 시작을 나타내는 **정리** 라인인 경우
                    if line.strip() == "**정리**":
                        # 섹션 시작을 표시
                        section_started = True
                        # 섹션 제목과 내용을 출력 파일에 쓰기
                        output_file.write(section_title + "\n\n")
                        output_file.write(section_content.strip() + "\n\n")
                        # 다음 섹션을 위해 변수 초기화
                        section_title = ""
                        section_content = ""
                    # 섹션 제목인 경우
                    elif line.strip().startswith("#"):
                        # 이전 섹션의 내용을 출력 파일에 쓰기
                        if section_started:
                            output_file.write(section_title + "\n\n")
                            output_file.write(section_content.strip() + "\n\n")
                        # 섹션 시작을 표시하고 섹션 제목 업데이트
                        section_started = True
                        section_title = line.strip()
                        # 다음 섹션을 위해 변수 초기화
                        section_content = ""
                    # 섹션 내용인 경우
                    else:
                        # 섹션 내용 추가
                        section_content += line

                # 파일의 끝에 도달하면 마지막 섹션을 출력 파일에 쓰기
                if not section_started:
                    break
                output_file.write(section_title + "\n\n")
                output_file.write(section_content.strip() + "\n\n")

input_file = r"C:\Users\Administrator\Documents\nowon9159.github.io\SOA\SOA-C02.md"  # 입력 파일 경로
output_file = r"C:\Users\Administrator\Documents\nowon9159.github.io\SOA\SOA-C02_ext.md"  # 출력 파일 경로

extract_sections(input_file, output_file)
